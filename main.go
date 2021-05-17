package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.StaticFS("/assets", http.Dir("assets"))
	router.StaticFS("/src", http.Dir("src"))
	router.LoadHTMLGlob("phaser/*")
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})
	router.Run(":8070")
}
