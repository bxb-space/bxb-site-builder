{{- define "workplan-page" -}}
Vue.component('workplan-page', {
  props: {},
  components: {},
  // created(){},
  mounted(){
    this.$xhr.get('/static/content/workpackages.json', function(xhr){
      this.workPackages = JSON.parse(xhr.responseText)
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
      workPackages: []
    }
  },
  template: `
<div :class="$options.name">
<ul>
  <li v-for="wp in workPackages">
    <h2>\{\{wp.name\}\}</h2>
    <div class="description">
    \{\{wp.description\}\}
    </div>
  </li>
</ul>

</div>
`
})
{{- end -}}
