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
	strings["PageTitle"] = "Pribacy Policy"

	err := tpl.ExecuteTemplate(w, "privacy_policy.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}
