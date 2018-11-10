package main
import (
  "fmt"
  "net/http"
)

func check(e error) { if e != nil { fmt.Println(e) } }

// buildTemplate(), IDlize, readFile, renderMarkup
// in templating.go

func main(){
  http.HandleFunc("/", ServeTemplate)
  http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./build/static"))))
  // http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
  //   http.ServeFile(w, r, "layouts/index.html")
  // })
  if err := http.ListenAndServe(":8090", nil); err != nil {
    panic(err)
  }
  // buildTemplate()
  // buildStaticAssets()
}

func ServeTemplate(w http.ResponseWriter, r *http.Request){
  w.Write(buildTemplate())
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
