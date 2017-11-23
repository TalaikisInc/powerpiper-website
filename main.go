package main

import (
	"log"
	"net/http"
	"os"
	"time"

	"./handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading environment variables.")
	}
}

func main() {
	Host := os.Getenv("HOST")

	app := mux.NewRouter()
	app.PathPrefix("/static/").Handler(http.FileServer(http.Dir(".")))

	app.HandleFunc("/", handlers.IndexHandler)
	app.HandleFunc("/privacy_policy/", handlers.PrivacyPolicyHandler)

	server := &http.Server{
		Handler:      app,
		Addr:         Host + ":" + os.Getenv("WEB_PORT"),
		WriteTimeout: 1 * time.Second,
		ReadTimeout:  1 * time.Second,
	}

	log.Fatal(server.ListenAndServe())

}
