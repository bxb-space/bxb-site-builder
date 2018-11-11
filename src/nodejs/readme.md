### Less
Requires less installed globally on your computer.
Less is a powerful CSS preprocessor. It enhances comprehension, functionality and extendability.

```sh
yarn add global less
```
```sh
lessc origin.less dest.css
```
It is invoked this way in `templating.go` :
```go
func renderLESS(file string) string{
  data, err := exec.Command("lessc", file).Output()
  check(err)
  return string(data)
}
```
