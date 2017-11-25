package handlers

import (
	"html/template"
	"log"
	"net/http"

	"../middleware"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("static/html/*.html"))
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	strings := middleware.Strings()
	strings["PageTitle"] = "Main"

	err := tpl.ExecuteTemplate(w, "content.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}

func PrivacyPolicyHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	strings := middleware.Strings()
	strings["PageTitle"] = "Privacy Policy"

	err := tpl.ExecuteTemplate(w, "privacy_policy.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}

func NotFound(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	strings := middleware.Strings()
	strings["PageTitle"] = "Not Found"

	err := tpl.ExecuteTemplate(w, "404.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}
