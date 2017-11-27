package middleware

import (
	"net/http"
	"os"
	"strings"
)

type PageStruct struct {
	Strings map[string]string
}

func Strings() map[string]string {
	strings := map[string]string{
		"SiteTitle":   "Power Piper",
		"AnalyticsID": os.Getenv("GOOGLE_ANALYTICS"),
		"BaseURL":     os.Getenv("BASE_URL"),
		"Template":    os.Getenv("TEMPLATE")}
	return strings
}

func GetUserAgent(r *http.Request) string {
	ua := r.Header.Get("User-Agent")
	ualow := strings.ToLower(ua)

	if strings.Contains(ualow, "google") {
		return "Google"
	} else {
		return ""
	}
}
