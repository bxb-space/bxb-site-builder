{{- define "team-page" -}}
Vue.component('team-page', {
  props: {},
  components: {},
  // created(){},
  // mounted(){},
  // updated(){},
  // activated(){},
  // beforeDestroy(){},
  watch: {},
  computed: {},
  methods: {},
  data() {
    return {}
  },
  template: `
<div :class="$options.name">
  {{readFile "assets/content/team-page-intro.md"}}
</div>
`
})
{{- end -}}
