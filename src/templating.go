package main

import (
  "gopkg.in/russross/blackfriday.v2"
  "github.com/microcosm-cc/bluemonday"
  "io/ioutil"
  "bytes"
  "text/template"
  "strings"
  "regexp"
)

func buildTemplate() []byte{
  funcMap := template.FuncMap{
    "IDlize": IDlize,
    "readFile": readFile,
    "renderMarkup": renderMarkup,
  }

  t := template.Must(template.New("layout").Funcs(funcMap).ParseFiles("./src/index.html"))
  buf := new(bytes.Buffer)
  err := t.ExecuteTemplate(buf, "layout", graspContent())
  check(err)
  return buf.Bytes()
}

func BuildFileTemplate(t []byte) error{
  return ioutil.WriteFile("./build/index.html", t, 0644)
}

// func ServeTemplate(w http.ResponseWriter, r *http.Request){
//   w.Write(buildTemplate())
// }

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
