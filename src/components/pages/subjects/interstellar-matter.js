{{- define "interstellar-matter" -}}
Vue.component('interstellar-matter', {
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
    <img-credits src="/static/img/interstellar-matter.png" credits="Kevin Blagrave"/>

    <div class="caption">
    {{readFile "assets/content/interstellar-matter/interstellar-turbulence.md" | renderMarkup}}
    </div>
  </section>
  <h2>
    Towards a 3D View
  </h2>
  <section>
    <img-credits src="/static/img/gaia-3d-view.png" credits="Rosine Lallement"/>
    <div class="caption">
    {{readFile "assets/content/interstellar-matter/3dview.md" | renderMarkup}}
    </div>
  </section>
  </div>
  `
})
{{- end -}}
