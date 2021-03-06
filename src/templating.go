package main

import (
  "gopkg.in/russross/blackfriday.v2"
  "github.com/microcosm-cc/bluemonday"
  "io/ioutil"
  "bytes"
  "text/template"
  "strings"
  "regexp"
  "os/exec"
)

func buildTemplate() []byte{
  funcMap := template.FuncMap{
    "IDlize": IDlize,
    "readFile": readFile,
    "renderMarkup": renderMarkup,
    "renderLESS": renderLESS,
  }

  files := []string{
    "./src/index.html",

    "./src/components/router/router-link.js",
    "./src/components/router/router-view.js",
    "./src/components/pages/error404.js",
    "./src/components/pages/landing.js",
    "./src/components/pages/explore.js",
    "./src/components/pages/publications.js",
    "./src/components/pages/team.js",
    "./src/components/pages/workplan.js",
    "./src/components/pages/events.js",

    "./src/components/pages/modules/publication-ref.js",
    "./src/components/pages/modules/img-credits.js",
    "./src/components/pages/subjects/interstellar-matter.js",
  }


  t := template.Must(template.New("layout").Funcs(funcMap).ParseFiles(files...))
  buf := new(bytes.Buffer)
  err := t.ExecuteTemplate(buf, "layout", graspContent())
  check(err)
  return buf.Bytes()
}

func writeToFile(path string, payload []byte) error{
  return ioutil.WriteFile(path, payload, 0644)
}

func BuildFileTemplate(t []byte) error{
  return writeToFile("./build/index.html", t)
}
func BuildStaticAssets(t []byte) error{
  return writeToFile("./build/static/css/style.css", t)
}

func buildStyle() []byte{
  funcMap := template.FuncMap{
    "IDlize": IDlize,
    "readFile": readFile,
    "renderMarkup": renderMarkup,
    "renderLESS": renderLESS,
  }
  files := []string{
    "./src/styles/style.css",
  }
  t := template.Must(template.New("style").Funcs(funcMap).ParseFiles(files...))
  buf := new(bytes.Buffer)
  err := t.ExecuteTemplate(buf, "style", nil)
  check(err)
  return buf.Bytes()
}






// func maps
func IDlize(str string) string{
  str = strings.Replace(str, " ", "-", -1)
  str = strings.ToLower(str)
  reg, err := regexp.Compile("[^a-Z]+")
  check(err)
  return reg.ReplaceAllString(str, "")
}
func readFile(fileName string) string{
  fileContent, err := ioutil.ReadFile("./" + fileName)
  check(err)
  return string(fileContent)
}
func renderMarkup(content string) string{
  return string(bluemonday.UGCPolicy().SanitizeBytes(blackfriday.Run([]byte(content))))
}

func renderLESS(file string) string{
  data, err := exec.Command("lessc", file).Output()
  check(err)
  return string(data)
}
