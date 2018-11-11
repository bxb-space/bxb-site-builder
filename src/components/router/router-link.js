{{- define "router-link" -}}
Vue.component('router-link', {
  props: {
    to: {
      type: String,
      default: "/"
    }
  },
  components: {},
  created(){
    // if (this.to === '') {this.sanitizedTo = '/'} else {
    //   if (this.to.length > 0){
    //     if (this.to[0] !== "/") {this.sanitizedTo = "/" + this.to} else {
    //       this.sanitizeTo = this.to
    //     }
    //   }
    // }

  },
  // mounted(){},
  // updated(){},
  // activated(){},
  // beforeDestroy(){},
  watch: {},
  computed: {},
  methods: {},
  data() {
    return {
      sanitizedTo: '/'
    }
  },
  template: `<a :href="'/#' + to" :class="$options.name"><slot></slot></a>`
})
{{- end -}}
