package main
import (
  "fmt"
)

func check(e error) { if e != nil { fmt.Println(e) } }

// buildTemplate(), IDlize, readFile, renderMarkup
// in templating.go

func main(){
  buildTemplate()
  buildStaticAssets()
}

func graspContent() interface{}{
  return struct {
    Title string
  }{
      "Yahe",
  }
}
// err := tmpl.Execute(w, graspContent())



func buildStaticAssets() {

}
