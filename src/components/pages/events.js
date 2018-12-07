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
<div :class="$options.name" class="small">
<h3>
Upcoming
</h3>
[...]
<h3>
Attended
</h3>
[...]


</div>
`
})
{{- end -}}
