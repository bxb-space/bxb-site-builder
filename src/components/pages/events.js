{{- define "events-page" -}}
Vue.component('events-page', {
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
<h3>
À venir
</h3>
[...]
<h3>
Passées
</h3>
[...]


</div>
`
})
{{- end -}}
