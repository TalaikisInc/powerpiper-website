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

func PostHandler(c echo.Context) error {
	_post := c.Param("post")
	p, err := strconv.Atoi(_post)
	if err != nil {
		fmt.Println(err)
		return err
	}

	cached, isCached := cache.Get("post_" + string(p))
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
			authors.first_name, 
			authors.last_name, 
			authors.username, 
			COALESCE(authors.avatar, '') 
			FROM tasks_post as posts 
			INNER JOIN tasks_category as cats ON posts.category_id = cats.id 
			INNER JOIN tasks_author as authors ON posts.author_id = authors.id 
			WHERE posts.id='%d';`, p)
		row := db.QueryRow(query)

		post := models.Post{}
		err := row.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
			&post.CategoryID.ID, &post.CategoryID.Title, &post.CategoryID.Slug, &post.AuthorID.ID,
			&post.AuthorID.FirstName, &post.AuthorID.LastName, &post.AuthorID.Username, &post.AuthorID.Avatar)
		if err != nil {
			fmt.Println(err)
			return err
		}

		j, err := json.Marshal(post)
		if err != nil {
			fmt.Println(err)
			return err
		}

		cache.Set("post_"+_post, j)
		return c.JSON(http.StatusOK, post)
	}
	return c.String(http.StatusOK, string(cached))
}

func PostsCategoryHandler(c echo.Context) error {
	category := c.Param("category")
	cat, err := strconv.Atoi(category)
	if err != nil {
		fmt.Println(err)
		return err
	}

	page := c.Param("page")
	p, err := strconv.Atoi(page)
	if err != nil {
		fmt.Println(err)
		return err
	}

	cached, isCached := cache.Get("posts_cat_" + string(cat) + "_" + string(p))
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
			authors.first_name, 
			authors.last_name, 
			authors.username, 
			COALESCE(authors.avatar, '') 
			FROM tasks_post AS posts 
			INNER JOIN tasks_category AS cats ON posts.category_id = cats.id 
			INNER JOIN tasks_author as authors ON posts.author_id = authors.id 
			WHERE cats.id='%[1]d' 
			ORDER BY dt DESC 
			LIMIT %[2]d OFFSET %[3]d;`, cat, postsPerPage, postsPerPage*p)
		rows, err := db.Query(query)
		if err != nil {
			fmt.Println(err)
			return err
		}
		defer rows.Close()

		posts := make([]models.Post, 0)
		for rows.Next() {
			post := models.Post{}
			err := rows.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
				&post.CategoryID.ID, &post.CategoryID.Title, &post.CategoryID.Slug, &post.TotalPosts, &post.AuthorID.ID,
				&post.AuthorID.FirstName, &post.AuthorID.LastName, &post.AuthorID.Username, &post.AuthorID.Avatar)
			if err != nil {
				return err
			}
			posts = append(posts, post)
		}
		if err = rows.Err(); err != nil {
			fmt.Println(err)
			return err
		}

		j, err := json.Marshal(posts)
		if err != nil {
			fmt.Println(err)
			return err
		}

		cache.Set("posts_cat_"+category+"_"+page, j)
		return c.JSON(http.StatusOK, posts)
	}
	return c.String(http.StatusOK, string(cached))
}

func PostsAuthorHandler(c echo.Context) error {
	author := c.Param("author")
	a, err := strconv.Atoi(author)
	if err != nil {
		fmt.Println(err)
		return err
	}

	page := c.Param("page")
	p, err := strconv.Atoi(page)
	if err != nil {
		fmt.Println(err)
		return err
	}

	cached, isCached := cache.Get("posts_author_" + string(a) + "_" + string(p))
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
				INNER JOIN tasks_author AS authors ON posts.author_id = authors.id 
				WHERE authors.id='%[1]d'), 
			authors.id, 
			authors.first_name, 
			authors.last_name, 
			authors.username, 
			COALESCE(authors.avatar, '') 
			FROM tasks_post AS posts 
			INNER JOIN tasks_category as cats ON posts.category_id = cats.id 
			INNER JOIN tasks_author AS authors ON posts.author_id = authors.id 
			WHERE authors.id='%[1]d' 
			ORDER BY dt DESC 
			LIMIT %[2]d OFFSET %[3]d;`, a, postsPerPage, postsPerPage*p)
		rows, err := db.Query(query)
		if err != nil {
			fmt.Println(err)
			return err
		}
		defer rows.Close()

		posts := make([]models.Post, 0)
		for rows.Next() {
			post := models.Post{}
			err := rows.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
				&post.CategoryID.ID, &post.CategoryID.Title, &post.CategoryID.Slug, &post.TotalPosts, &post.AuthorID.ID,
				&post.AuthorID.FirstName, &post.AuthorID.LastName, &post.AuthorID.Username, &post.AuthorID.Avatar)
			if err != nil {
				fmt.Println(err)
				return err
			}
			posts = append(posts, post)
		}
		if err = rows.Err(); err != nil {
			fmt.Println(err)
			return err
		}

		j, err := json.Marshal(posts)
		if err != nil {
			fmt.Println(err)
			return err
		}

		cache.Set("posts_author_"+author+"_"+page, j)
		return c.JSON(http.StatusOK, posts)
	}
	return c.String(http.StatusOK, string(cached))
}

func PostsHandler(c echo.Context) error {
	page := c.Param("page")
	p, err := strconv.Atoi(page)
	if err != nil {
		fmt.Println(err)
		return err
	}

	cached, isCached := cache.Get("posts_" + string(p))
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
			authors.first_name, 
			authors.last_name, 
			authors.username, 
			COALESCE(authors.avatar, '') 
			FROM tasks_post as posts 
			INNER JOIN tasks_category AS cats ON posts.category_id = cats.id 
			INNER JOIN tasks_author as authors ON posts.author_id = authors.id 
			ORDER BY posts.date DESC 
			LIMIT %[1]d OFFSET %[2]d;`, postsPerPage, postsPerPage*p)

		rows, err := db.Query(query)
		if err != nil {
			fmt.Println(err)
			return err
		}
		defer rows.Close()

		posts := make([]models.Post, 0)
		for rows.Next() {
			post := models.Post{}
			err := rows.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
				&post.CategoryID.ID, &post.CategoryID.Title, &post.CategoryID.Slug, &post.TotalPosts, &post.AuthorID.ID,
				&post.AuthorID.FirstName, &post.AuthorID.LastName, &post.AuthorID.Username, &post.AuthorID.Avatar)
			if err != nil {
				fmt.Println(err)
				return err
			}
			posts = append(posts, post)
		}
		if err = rows.Err(); err != nil {
			fmt.Println(err)
			return err
		}

		j, err := json.Marshal(posts)
		if err != nil {
			fmt.Println(err)
			return err
		}

		cache.Set("posts_"+page, j)
		return c.JSON(http.StatusOK, posts)
	}
	return c.String(http.StatusOK, string(cached))
}

func CategoriesHandler(c echo.Context) error {
	page := c.Param("page")
	p, err := strconv.Atoi(page)
	if err != nil {
		fmt.Println(err)
		return err
	}

	cached, isCached := cache.Get("cats_" + string(p))
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
			GROUP BY (cats.id, cats.title, cats.slug) 
			ORDER BY cats.title 
			LIMIT %[1]d OFFSET %[2]d;`, postsPerPage, postsPerPage*p)

		rows, err := db.Query(query)
		if err != nil {
			fmt.Println(err)
			return err
		}
		defer rows.Close()

		categories := make([]models.Category, 0)
		for rows.Next() {
			category := models.Category{}
			err := rows.Scan(&category.ID, &category.Title, &category.Slug, &category.PostCnt)
			if err != nil {
				fmt.Println(err)
				return err
			}

			categories = append(categories, category)
		}
		if err = rows.Err(); err != nil {
			fmt.Println(err)
			return err
		}

		j, err := json.Marshal(categories)
		if err != nil {
			fmt.Println(err)
			return err
		}

		cache.Set("cats_"+page, j)
		return c.JSON(http.StatusOK, categories)
	}
	return c.String(http.StatusOK, string(cached))
}

func AuthorsHandler(c echo.Context) error {
	page := c.Param("page")
	p, err := strconv.Atoi(page)
	if err != nil {
		fmt.Println(err)
		return err
	}

	cached, isCached := cache.Get("authors_" + string(p))
	if isCached == false {
		db := database.Connect()
		defer db.Close()

		query := fmt.Sprintf(`SELECT 
			authors.id, 
			authors.first_name, 
			authors.last_name, 
			authors.username, 
			COALESCE(authors.avatar, ''), 
			COUNT(posts.title) AS cnt 
			FROM tasks_author AS authors  
			INNER JOIN tasks_post AS posts ON posts.author_id = authors.id 
			WHERE authors.is_staff = 'TRUE' 
			GROUP BY (authors.id, authors.last_name, authors.username) 
			ORDER BY authors.last_name 
			LIMIT %[1]d OFFSET %[2]d;`, postsPerPage, postsPerPage*p)

		rows, err := db.Query(query)
		if err != nil {
			fmt.Println(err)
			return err
		}
		defer rows.Close()

		authors := make([]models.Author, 0)
		for rows.Next() {
			author := models.Author{}

			err := rows.Scan(&author.ID, &author.FirstName, &author.LastName, &author.Username, &author.Avatar, &author.PostCnt)
			if err != nil {
				fmt.Println(err)
				return err
			}
			authors = append(authors, author)
		}
		if err = rows.Err(); err != nil {
			fmt.Println(err)
			return err
		}

		j, err := json.Marshal(authors)
		if err != nil {
			fmt.Println(err)
			return err
		}

		cache.Set("authors_"+page, j)
		return c.JSON(http.StatusOK, authors)
	}
	return c.String(http.StatusOK, string(cached))
}
