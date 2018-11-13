{{- define "explore-page" -}}
Vue.component('explore-page', {
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
    return {
      topics: [
        {
          link: "/explore/interstellar-dust",
          name: "Interstellar Dust"
        },
        {
          link: "/explore/grain-alignement",
          name: "Grain Alignment"
        },
        {
          link: "/explore/cmb-polarization",
          name: "CMB Polarization"
        },
        {
          link: "/explore/interstellar-matter",
          name: "Interstellar Matter"
        },
        {
          link: "/explore/magnetic-fields",
          name: "Magnetic Fields"
        },
        {
          link: "/explore/dust-polarization",
          name: "Dust Polarization"
        },
      ]
    }
  },
  template: `
<div :class="$options.name">
  <ul>
    <li v-for="topic in topics">
      <router-link :to="topic.link">
        \{\{topic.name\}\}
      </router-link>
    </li>
  </ul>
</div>
`
})
{{- end -}}
