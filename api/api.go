package api

import (
	"net/http"

	"github.com/labstack/echo"
)

func Page(c echo.Context) error {
	page := c.Param("page")
	return c.JSON(http.StatusOK, page)
}
