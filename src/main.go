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
  if err := http.ListenAndServe(":8090", nil); err != nil {
    panic(err)
  }
  // buildTemplate()
  // buildStaticAssets()
}

func ServeTemplate(w http.ResponseWriter, r *http.Request){
  check(BuildStaticAssets(buildStyle()))
  var t []byte = buildTemplate()
  w.Write(t)
  check(BuildFileTemplate(t))
  // http.ServeFile(w, r, "./build/index.html")
}

func graspContent() interface{}{
  return struct {
    Title string
  }{
      "Yahe",
  }
}
// err := tmpl.Execute(w, graspContent())
