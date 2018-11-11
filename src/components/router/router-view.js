{{- define "router-view" -}}
Vue.component('router-view', {
  props: {},
  components: {},
  created(){
    this.sanitizeHash()
    window.addEventListener('hashchange', this.sanitizeHash)
  },
  // mounted(){},
  // updated(){},
  // activated(){},
  // beforeDestroy(){},
  watch: {},
  computed: {},
  methods: {
    sanitizeHash: function(){
      if (window.location.href.split('/#/').length === 2){
        // console.log("route is correctly set")
        this.setClientSideSeparator(this.clientSideHash())
        this.findRoute(this.clientSideHash())
      } else {
        // console.log("route has been normalized")
        this.setClientSideSeparator()
        this.currentPage = App.router.routes['/']
      }
    },
    setClientSideSeparator: function(hash){
      if (!hash) hash = "";
      history.pushState( null, null, window.location.pathname.replace(/(\/)+$/, "") + "/#/" + hash)
    },
    clientSideHash: function(){
      return window.location.href.split('/#/')[1] || '';
    },
    findRoute: function(hash){
      hash = "/" + hash
      // console.log(`looking for route ${hash} ..`)
      if (App.router.routes[hash]){
        // console.log("route found")
        this.currentPage = App.router.routes[hash].component
      } else {
        // console.log("route not found")
        this.handle404()
      }
    },
    handle404: function(){
      console.log("404 ERROR")
    }
  },
  data() {
    return {
      currentPage: 'landing-page'
    }
  },
  template: `
<div :is="currentPage">
</div>
`
})
{{- end -}}
