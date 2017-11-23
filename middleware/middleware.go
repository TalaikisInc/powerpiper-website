package middleware

import "os"

type PageStruct struct {
	Strings map[string]string
}

func Strings() map[string]string {
	strings := map[string]string{
		"SiteTitle":   "Power Piper",
		"AnalyticsID": os.Getenv("GOOGLE_ANALYTICS"),
		"BaseURL":     os.Getenv("BASE_URL")}
	return strings
}
