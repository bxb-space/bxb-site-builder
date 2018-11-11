package main

// attributes must be capitalized to be used
// in "html/template"
type Styles struct {
  Critical  string        // inlineCSS
  Async     []string      // CSS static sources
}
type Scripts struct {
  Critical  string
  Preload   []string      // async initial preload
  Postload  []string      // Body's bottom script
}
type Website struct{
  Title     string        // <title/>
  Style     Styles        //
  Script    Scripts
  Fonts     []string      // font cdn query url sources
  Content   WebContent
  LoginUrl  string        // this refers to the team's software SPA
  Favicon   string        // this is the url of the favicon
}



type WebContent struct{
  Logo      string      // the svg logo
  Subject   string      // B crossing Bs
  Pages     []Page
  Team      []Member
  Publications    []Publication
  Events    []Event
}
type Member struct{}
type Publication struct{}
type Event struct{}

type Page struct{
  Url       string      // This one and the next are used to
  Name      string      // build the router and the nav.
  Content   struct{}    // This is for the page construction
                        // several .md files can add up to
                        // make the content.
}
