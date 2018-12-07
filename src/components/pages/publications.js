{{- define "publication-page" -}}
Vue.component('publication-page', {
  props: {},
  components: {},
  // created(){},
  mounted(){
    this.$xhr.get('/static/content/publications.json', function(xhr){
      this.publications = JSON.parse(xhr.responseText)
    }.bind(this))
  },
  // updated(){},
  // activated(){},
  // beforeDestroy(){},
  watch: {},
  computed: {},
  methods: {
  },
  data() {
    return {
      publications:"yahe"
    }
  },
  template: `
<div :class="$options.name" class="small">
<h2>BxB Publications</h2>
<ul>
  <li v-for="pub in publications.bxb">
    <publication-reference :refs="pub"/>
  </li>
</ul>
<h3>Past publications from team members related to the BxB project</h3>
<ul>
  <li v-for="theme in publications.past">
    <h4>\{\{theme.title\}\}</h4>
    <ul>
      <li v-for="pub in theme.list">
        <publication-reference :refs="pub"/>
      </li>
    </ul>
  </li>
</ul>

</div>
`
})
{{- end -}}
