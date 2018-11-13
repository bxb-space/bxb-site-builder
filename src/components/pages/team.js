{{- define "team-page" -}}
Vue.component('team-page', {
  props: {},
  components: {},
  // created(){},
  mounted(){
    this.$xhr.get('/static/content/labs.json', function(xhr){
      this.peopleByLabs = JSON.parse(xhr.responseText)
    }.bind(this))
  },
  // updated(){},
  // activated(){},
  // beforeDestroy(){},
  watch: {},
  computed: {},
  methods: {},
  data() {
    return {
      peopleByLabs: []
    }
  },
  template: `
<div :class="$options.name">
  {{readFile "assets/content/team-page-intro.md"}}
  <ul>
    <li v-for="lab in peopleByLabs">
    <h4>\{\{lab.name\}\}</h4>
    <ul class="emphase">
      <li v-for="people in lab.people">
        \{\{people\}\}
      </li>
    </ul>
    </li>
  </ul>
</div>
`
})
{{- end -}}
