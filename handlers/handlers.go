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

	err := tpl.ExecuteTemplate(w, strings["Template"]+"/content.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}

func PrivacyPolicyHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	strings := middleware.Strings()
	strings["PageTitle"] = "Privacy Policy"

	err := tpl.ExecuteTemplate(w, strings["Template"]+"/privacy_policy.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}

func NotFound(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	strings := middleware.Strings()
	strings["PageTitle"] = "Not Found"

	err := tpl.ExecuteTemplate(w, strings["Template"]+"/404.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}
