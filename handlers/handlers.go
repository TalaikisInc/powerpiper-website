package handlers

import (
	"database/sql"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"

	"github.com/die-net/lrucache"
	"github.com/joho/godotenv"

	"../database"
	"../middleware"
	"../models"
)

var (
	tpl   *template.Template
	cache = lrucache.New(104857600*3, 60*60*24) //300 Mb, 240 hours
)

func init() {
	err := godotenv.Load("./.env")
	if err != nil {
		log.Fatal("Error loading environment variables.")
	}
	tpl = template.Must(template.ParseGlob("static/" + os.Getenv("TEMPLATE") + "/html/*.html"))
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	strings := middleware.Strings()
	strings["PageTitle"] = "Main"
	strings["UA"] = middleware.GetUserAgent(r)

	err := tpl.ExecuteTemplate(w, "content.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}

func PrivacyPolicyHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	w.Header().Set("Cache-Control", "max-age=2592000")

	strings := middleware.Strings()
	strings["PageTitle"] = "Privacy Policy"
	strings["UA"] = middleware.GetUserAgent(r)

	cached, isCached := cache.Get("privacy_policy")
	if isCached == false {
		db := database.Connect()
		defer db.Close()

		query := `SELECT 
			url, 
			content 
			FROM django_flatpage 
			WHERE url = '/privacy_policy/';`

		row := db.QueryRow(query)

		post := models.FlatPage{}
		err := row.Scan(&post.URL, &post.Content)
		switch {
		case err == sql.ErrNoRows:
			http.NotFound(w, r)
			return
		case err != nil:
			fmt.Println(err)
			http.Error(w, http.StatusText(500), http.StatusInternalServerError)
			return
		}

		cache.Set("privacy_policy", []byte(post.Content))

		err = tpl.ExecuteTemplate(w, "privacy_policy.html", middleware.PageStruct{
			Strings: strings,
			Body:    template.HTML(post.Content)})
		if err != nil {
			log.Fatal(err)
		}
	}

	err := tpl.ExecuteTemplate(w, "privacy_policy.html", middleware.PageStruct{
		Strings: strings,
		Body:    template.HTML(cached)})
	if err != nil {
		log.Fatal(err)
	}
}

func NotFound(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	w.Header().Set("Cache-Control", "max-age=2592000")

	strings := middleware.Strings()
	strings["PageTitle"] = "Not Found"
	strings["UA"] = middleware.GetUserAgent(r)

	err := tpl.ExecuteTemplate(w, "404.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}
