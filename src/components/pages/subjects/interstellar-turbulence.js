{{- define "interstellar-turbulence" -}}
Vue.component('interstellar-turbulence', {
  props: {},
  // props: [],
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
  <h2>
    Interstellar Turbulence
  </h2>
  <section>
    <img src="/static/img/interstellar-matter.png"/>

    <div class="caption">
    {{readFile "assets/content/interstellar-matter/interstellar-turbulence.md" | renderMarkup}}
    </div>
  </section>
  <h2>
    Towards a 3D View
  </h2>
  <section>
    <img src="/static/img/gaia-3d-view.png"/>
    <div class="caption">
    {{readFile "assets/content/interstellar-matter/3dview.md" | renderMarkup}}
    </div>
  </section>
  </div>
  `
})
{{- end -}}
