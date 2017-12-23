package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"../database"
	"../models"
	"github.com/die-net/lrucache"
	"github.com/labstack/echo"
)

var postsPerPage = 10
var cache = lrucache.New(104857600*3, 60*60*24) //300 Mb, 24 hours

func PostHandler(c echo.Context) {
	_post := c.Param("post")

	cached, isCached := cache.Get("post_" + _post)
	if isCached == false {
		db := database.Connect()
		defer db.Close()

		query := fmt.Sprintf(`SELECT 
			posts.id, 
			posts.title, 
			posts.slug, 
			posts.content, 
			posts.date, 
			COALESCE(posts.image, ''), 
			cats.id, 
			cats.title, 
			cats.slug,  
			authors.id, 
			authors.name, 
			authors.slug, 
			authors.image 
			FROM tasks_post as posts 
			INNER JOIN tasks_category as cats ON posts.category_id = cats.id 
			INNER JOIN tasks_author as authors ON posts.author_id = authors.id 
			WHERE posts.id='%d';`, _post)
		row := db.QueryRow(query)

		post := models.Post{}
		err := row.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
			&post.CategoryID.ID, &post.CategoryID.Title, &post.CategoryID.Slug, &post.AuthorID.ID,
			&post.AuthorID.Name, &post.AuthorID.Slug, &post.AuthorID.Image)
		if err != nil {
			return
		}

		j, err := json.Marshal(post)
		if err != nil {
			return
		}

		cache.Set("post_"+_post, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}

func PostsCategoryHandler(c echo.Context) {
	category := c.Param("category")
	page := c.Param("page")

	p, err := strconv.Atoi(page)
	if err != nil {
		return
	}

	cached, isCached := cache.Get("posts_cat_" + category + "_" + page)
	if isCached == false {
		db := database.Connect()
		defer db.Close()

		query := fmt.Sprintf(`SELECT 
			posts.id, 
			posts.title, 
			posts.slug, 
			posts.content, 
			posts.date AS dt, 
			COALESCE(posts.image, ''), 
			cats.id, 
			cats.title, 
			cats.slug, 
			(SELECT 
				COUNT(*) 
				FROM tasks_post AS posts 
				INNER JOIN tasks_category AS cats ON posts.category_id = cats.id 
				WHERE cats.id='%[1]d'), 
			authors.id, 
			authors.name, 
			authors.slug, 
			authors.image
			FROM tasks_post AS posts 
			INNER JOIN tasks_category AS cats ON posts.category_id = cats.id 
			INNER JOIN tasks_author as authors ON posts.author_id = authors.id 
			WHERE cats.id='%[1]d' 
			ORDER BY dt DESC 
			LIMIT %[2]d OFFSET %[3]d;`, category, postsPerPage, postsPerPage*p)
		rows, err := db.Query(query)
		if err != nil {
			return
		}
		defer rows.Close()

		posts := make([]models.Post, 0)
		for rows.Next() {
			post := models.Post{}
			err := rows.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
				&post.CategoryID.Title, &post.CategoryID.ID, &post.CategoryID.Slug, &post.TotalPosts, &post.AuthorID.ID,
				&post.AuthorID.Name, &post.AuthorID.Slug, &post.AuthorID.Image)
			if err != nil {
				return
			}
			posts = append(posts, post)
		}
		if err = rows.Err(); err != nil {
			return
		}

		j, err := json.Marshal(posts)
		if err != nil {
			return
		}

		cache.Set("posts_cat_"+category+"_"+page, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}

func PostsAuthorHandler(c echo.Context) {
	author := c.Param("author")
	page := c.Param("page")
	p, err := strconv.Atoi(page)
	if err != nil {
		return
	}

	cached, isCached := cache.Get("posts_author_" + author + "_" + page)
	if isCached == false {
		db := database.Connect()
		defer db.Close()

		query := fmt.Sprintf(`SELECT 
			posts.id, 
			posts.title, 
			posts.slug, 
			posts.url, 
			posts.content, 
			posts.date AS dt, 
			COALESCE(posts.image, ''), 
			cats.id, 
			cats.title, 
			cats.slug, 
			(SELECT 
				COUNT(*) 
				FROM tasks_post AS posts 
				INNER JOIN tasks_author AS authors ON posts.author_id = authors.id 
				WHERE author.id='%[1]d'), 
			authors.id, 
			authors.name, 
			authors.slug, 
			authors.image 
			FROM tasks_post AS posts 
			INNER JOIN tasks_category as cats ON posts.category_id = cats.id 
			INNER JOIN tasks_author AS authors ON posts.author_id = authors.id 
			WHERE cats.slug='%[1]s' 
			ORDER BY dt DESC 
			LIMIT %[2]d OFFSET %[3]d;`, author, postsPerPage, postsPerPage*p)
		rows, err := db.Query(query)
		if err != nil {
			return
		}
		defer rows.Close()

		posts := make([]models.Post, 0)
		for rows.Next() {
			post := models.Post{}
			err := rows.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
				&post.CategoryID.Title, &post.CategoryID.ID, &post.CategoryID.Slug, &post.TotalPosts, &post.AuthorID.ID,
				&post.AuthorID.Name, &post.AuthorID.Slug, &post.AuthorID.Image)
			if err != nil {
				return
			}
			posts = append(posts, post)
		}
		if err = rows.Err(); err != nil {
			return
		}

		j, err := json.Marshal(posts)
		if err != nil {
			return
		}

		cache.Set("posts_author_"+author+"_"+page, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}

func PostsHandler(c echo.Context) {
	page := c.Param("page")
	p, err := strconv.Atoi(page)
	if err != nil {
		return
	}

	cached, isCached := cache.Get("posts_" + page)
	if isCached == false {
		db := database.Connect()
		defer db.Close()

		query := fmt.Sprintf(`SELECT 
			posts.id, 
			posts.title, 
			posts.slug, 
			posts.content, 
			posts.date, 
			COALESCE(posts.image, ''), 
			cats.id, 
			cats.title, 
			cats.slug, 
			(SELECT 
				COUNT(*) 
				FROM tasks_post), 
			authors.id, 
			authors.name, 
			authors.slug, 
			authors.image, 
			FROM tasks_post as posts 
			INNER JOIN tasks_category AS cats ON posts.category_id = cats.id 
			INNER JOIN tasks_author as authors ON posts.author_id = authors.id 
			ORDER BY posts.date DESC 
			LIMIT %[1]d OFFSET %[2]d;`, postsPerPage, postsPerPage*p)

		rows, err := db.Query(query)
		if err != nil {
			return
		}
		defer rows.Close()

		posts := make([]models.Post, 0)
		for rows.Next() {
			post := models.Post{}
			err := rows.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
				&post.CategoryID.Title, &post.CategoryID.ID, &post.CategoryID.Slug, &post.TotalPosts, &post.AuthorID.ID,
				&post.AuthorID.Name, &post.AuthorID.Slug, &post.AuthorID.Image)
			if err != nil {
				return
			}
			posts = append(posts, post)
		}
		if err = rows.Err(); err != nil {
			return
		}

		j, err := json.Marshal(posts)
		if err != nil {
			return
		}

		cache.Set("posts_"+page, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}

func CategoriesHandler(c echo.Context) {
	page := c.Param("page")
	p, err := strconv.Atoi(page)
	if err != nil {
		return
	}

	cached, isCached := cache.Get("cats_" + page)
	if isCached == false {
		db := database.Connect()
		defer db.Close()

		query := fmt.Sprintf(`SELECT 
			cats.id, 
			cats.title, 
			cats.slug, 
			COUNT(posts.title) AS cnt 
			FROM tasks_category AS cats 
			INNER JOIN tasks_post AS posts ON posts.category_id = cats.id 
			GROUP BY (cats.title, cats.slug) 
			ORDER BY cats.title 
			LIMIT %[1]d OFFSET %[2]d;`, postsPerPage, postsPerPage*p)

		rows, err := db.Query(query)
		if err != nil {
			return
		}
		defer rows.Close()

		categories := make([]models.Category, 0)
		for rows.Next() {
			category := models.Category{}
			err := rows.Scan(&category.ID, &category.Title, &category.Slug, &category.PostCnt)
			if err != nil {
				return
			}

			categories = append(categories, category)
		}
		if err = rows.Err(); err != nil {
			return
		}

		j, err := json.Marshal(categories)
		if err != nil {
			return
		}

		cache.Set("cats_"+page, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}

func AuthorsHandler(c echo.Context) {
	page := c.Param("page")
	p, err := strconv.Atoi(page)
	if err != nil {
		return
	}

	cached, isCached := cache.Get("authors_" + page)
	if isCached == false {
		db := database.Connect()
		defer db.Close()

		query := fmt.Sprintf(`SELECT 
			authors.id, 
			authors.name, 
			authors.slug, 
			authors.image, 
			COUNT(posts.title) AS cnt, 
			(SELECT 
				COUNT(*) 
				FROM tasks_author) 
			FROM tasks_author AS authors  
			INNER JOIN tasks_post AS posts ON posts.author_id = authors.id 
			GROUP BY (authors.name, authors.slug) 
			ORDER BY authors.name 
			LIMIT %[1]d OFFSET %[2]d;`, postsPerPage, postsPerPage*p)

		rows, err := db.Query(query)
		if err != nil {
			return
		}
		defer rows.Close()

		authors := make([]models.Author, 0)
		for rows.Next() {
			author := models.Author{}

			err := rows.Scan(&author.ID, &author.Name, &author.Slug, &author.Image, &author.PostCnt)
			if err != nil {
				return
			}
			authors = append(authors, author)
		}
		if err = rows.Err(); err != nil {
			return
		}

		j, err := json.Marshal(authors)
		if err != nil {
			return
		}

		cache.Set("authors_"+page, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}
