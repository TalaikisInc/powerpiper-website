package handlers

import (
	"html/template"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"

	"../middleware"
)

var tpl *template.Template

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

	err := tpl.ExecuteTemplate(w, "privacy_policy.html", middleware.PageStruct{
		Strings: strings})
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
