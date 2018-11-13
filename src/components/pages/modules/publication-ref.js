{{- define "publication-reference" -}}

Vue.component('publication-reference', {
  props: ["refs"],
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
<div class="rel" :class="$options.name">
    <div class="title">
      \{\{refs.title\}\}
    </div>
    <div class="journal">
      \{\{refs.journal\}\}
    </div>
    <ul class="authors">
      <li v-for="(author, index) in refs.authors">
        \{\{author\}\}
        <span v-if="index + 2 === refs.authors.length">and</span>
        <span v-else-if="index + 1 === refs.authors.length"></span>
        <span v-else>,</span>
      </li>
    </ul>
  </div>
`
})
{{- end -}}
