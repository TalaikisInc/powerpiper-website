package handlers

import (
	"html/template"
	"log"
	"net/http"
	"os"

	"../middleware"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("static/html/*.html"))
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	aID := os.Getenv("GOOGLE_ANALYTICS")
	baseUrl := os.Getenv("BASE_URL")

	strings := map[string]string{
		"SiteTitle":   "Power Piper",
		"AnalyticsID": aID,
		"BaseURL":     baseUrl,
		"PageTitle":   "Main"}

	err := tpl.ExecuteTemplate(w, "content.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}

func PrivacyPolicyHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	aID := os.Getenv("GOOGLE_ANALYTICS")
	baseUrl := os.Getenv("BASE_URL")

	strings := map[string]string{
		"SiteTitle":   "Power Piper",
		"AnalyticsID": aID,
		"BaseURL":     baseUrl,
		"PageTitle":   "Pribacy Policy"}

	err := tpl.ExecuteTemplate(w, "privacy_policy.html", middleware.PageStruct{
		Strings: strings})
	if err != nil {
		log.Fatal(err)
	}
}
