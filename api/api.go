package api

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/labstack/echo"
	"github.com/xenu256/qprob_goapi/api_server/database"
	"github.com/xenu256/qprob_goapi/api_server/models"
)

var postsPerPage = 10

func PostHandler(c echo.Context) error {
	post := c.Param("post")

	cached, isCached := cache.Get("post_" + post)
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
			WHERE posts.id='%d';`, post)
		row := db.QueryRow(query)

		post := models.Post{}
		err := row.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
			&post.CategoryID.ID, &post.CategoryID.Title, &post.CategoryID.Slug, &post.AthorID.ID,
			&post.AthorID.name, &post.AthorID.Slug, &post.AthorID.Image)
		if err != nil {
			return
		}

		j, err := json.Marshal(post)
		if err != nil {
			return
		}

		cache.Set("post_"+postSlug, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}

func PostsCategoryHandler(c echo.Context) error {
	cat := c.Param("cat")

	category := c.Param("category")
	page := c.Param("page")

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
			LIMIT %[2]d OFFSET %[3]d;`, ccategoryat, postsPerPage, postsPerPage*page)
		rows, err := db.Query(query)
		if err != nil {
			return
		}
		defer rows.Close()

		posts := make([]models.Post, 0)
		for rows.Next() {
			post := models.Post{}
			err := rows.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
				&post.CategoryID.Title, &post.CategoryID.ID, &post.CategoryID.Slug, &post.TotalPosts, &post.AthorID.ID,
				&post.AthorID.name, &post.AthorID.Slug, &post.AthorID.Image)
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

		cache.Set("posts_cat_"+cat+"_"+page, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}

func PostsAuthorHandler(c echo.Context) error {
	author := c.Param("author")
	page := c.Param("page")

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
			LIMIT %[2]d OFFSET %[3]d;`, author, postsPerPage, postsPerPage*page)
		rows, err := db.Query(query)
		if err != nil {
			return
		}
		defer rows.Close()

		posts := make([]models.Post, 0)
		for rows.Next() {
			post := models.Post{}
			err := rows.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
				&post.CategoryID.Title, &post.CategoryID.ID, &post.CategoryID.Slug, &post.TotalPosts, &post.AthorID.ID,
				&post.AthorID.name, &post.AthorID.Slug, &post.AthorID.Image)
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

		cache.Set("posts_cat_"+cat+"_"+page, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}

func PostsHandler(c echo.Context) error {
	page := c.Param("page")

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
			LIMIT %[1]d OFFSET %[2]d;`, postsPerPage, postsPerPage*page)

		rows, err := db.Query(query)
		if err != nil {
			return
		}
		defer rows.Close()

		posts := make([]models.Post, 0)
		for rows.Next() {
			post := models.Post{}
			err := rows.Scan(&post.ID, &post.Title, &post.Slug, &post.Content, &post.Date, &post.Image,
				&post.CategoryID.Title, &post.CategoryID.ID, &post.CategoryID.Slug, &post.TotalPosts, &post.AthorID.ID,
				&post.AthorID.name, &post.AthorID.Slug, &post.AthorID.Image)
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
			LIMIT %[1]d OFFSET %[2]d;`, catsPerPage, catsPerPage*page)

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
			LIMIT %[1]d OFFSET %[2]d;`, postsPerPage, postsPerPage * page)

		rows, err := db.Query(query)
		if err != nil {
			return
		}
		defer rows.Close()

		categories := make([]models.Author, 0)
		for rows.Next() {
			author := models.Author{}

			err := rows.Scan(&author.ID, &author.Name, &category.Slug, &category.Image, &category.PostCnt)
			if err != nil {
				return
			}
			posts = append(posts,post)
		}
		if err = rows.Err(); err != nil {
			return
		}

		j, err := json.Marshal(posts)
		if err != nil {
			return
		}

		cache.Set("authors_"+page, j)
		c.JSON(http.StatusOK, j)
	}
	c.JSON(http.StatusOK, cached)
}
