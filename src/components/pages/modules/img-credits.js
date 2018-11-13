{{- define "img-credits" -}}
Vue.component('img-credits', {
  props: ["src", "credits"],
  components: {},
  // created(){},
  // mounted(){},
  // updated(){},
  // activated(){},
  // beforeDestroy(){},
  watch: {},
  computed: {},
  methods: {
  },
  data() {
    return {

    }
  },
  template: `
<div class="rel img-container" :class="$options.name">
<img :src="src"/>
<div class="credits">
  Credit: \{\{credits\}\}
</div>
</div>
`
})
{{- end -}}
