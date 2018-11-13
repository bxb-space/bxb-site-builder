{{- define "router-link" -}}
Vue.component('router-link', {
  props: {
    to: {
      type: String,
      default: "/"
    }
  },
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
    return {

    }
  },
  template: `<a :href="'/#' + to" :class="$options.name"><slot></slot></a>`
})
{{- end -}}
