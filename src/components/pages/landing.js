{{- define "landing-page" -}}
Vue.component('landing-page', {
  props: {},
  components: {},
  // created(){},
  mounted(){
    this.$xhr.get('/static/content/workpackages.json', function(xhr){
      this.workPackages = JSON.parse(xhr.responseText)
    }.bind(this))
  },
  // updated(){},
  // activated(){},
  // beforeDestroy(){},
  watch: {},
  computed: {},
  methods: {},
  data() {
    return {
      workPackages : []
    }
  },
  template: `
<div :class="$options.name" class="small">
  <svg logo="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.26 78.69" class="abs"><g class="cls-1"><path d="M57.33,17.64c.42.24.52.84.31,1.76a33.57,33.57,0,0,1-1.74,4.67,39,39,0,0,1-2.23,4.6,5,5,0,0,1-1.89,1.92,7.71,7.71,0,0,1-2.8.59l-3,.21,5.9-13.76,3-.21A4.86,4.86,0,0,1,57.33,17.64ZM53.4,28.55a38,38,0,0,0,2.15-4.45,34.23,34.23,0,0,0,1.7-4.53c.17-.76.09-1.23-.25-1.43a5.06,5.06,0,0,0-2.35-.2L52,18.13,46.52,30.89l2.69-.19a7.19,7.19,0,0,0,2.66-.55A4,4,0,0,0,53.4,28.6"></path> <path d="M45.11,46.18c.4.28.47.93.23,1.93a36.64,36.64,0,0,1-1.8,4.78,44.58,44.58,0,0,1-2.36,4.93,5,5,0,0,1-1.94,2,8.15,8.15,0,0,1-2.8.59l-3,.21,6.23-14.55,3-.21A4.25,4.25,0,0,1,45.11,46.18ZM40.9,57.7a40.78,40.78,0,0,0,2.3-4.81A38.09,38.09,0,0,0,45,48.27c.2-.84.14-1.36-.18-1.6a4.18,4.18,0,0,0-2.32-.25l-2.69.19L34,60.1l2.7-.19a7.41,7.41,0,0,0,2.67-.55,4,4,0,0,0,1.56-1.66"></path> <path d="M60.52,45.47A48.29,48.29,0,0,1,57.2,55.4c-3,6.94-6.37,12.27-10.11,15.83A20.17,20.17,0,0,1,34.28,77.1l-23,1.59,33-77.06L67.35,0c9.07-.63,10.86,5.61,5.31,18.56A49.61,49.61,0,0,1,65.4,31.23,21.94,21.94,0,0,1,57,37.37,6.38,6.38,0,0,1,60.16,40C60.83,41.21,60.94,43,60.52,45.47ZM47,70.89c3.62-3.47,6.93-8.66,9.85-15.46a48.19,48.19,0,0,0,3.26-9.73c.4-2.34.29-4.1-.31-5.21a6,6,0,0,0-3.2-2.6l.26-.9a21,21,0,0,0,8.38-6c2.4-2.76,4.78-6.91,7.1-12.32C77.74,6.08,76,0,67.15.61L44.44,2.13l-32.58,76,22.65-1.57A19.71,19.71,0,0,0,47,70.89"></path></g> <g class="cls-1"><path d="M34.77,21.62a5.84,5.84,0,0,1,2.41,1.45,36.88,36.88,0,0,1,3.14,3.71,25.12,25.12,0,0,1,2.44,3.61c.33.74.27,1.23-.2,1.45a7.78,7.78,0,0,1-2.88.3H36.07L27.8,21.26h3.61A13.57,13.57,0,0,1,34.77,21.62Zm7.5,8.65a23.55,23.55,0,0,0-2.37-3.49,33,33,0,0,0-3-3.59A4.8,4.8,0,0,0,35,22a12.81,12.81,0,0,0-3.21-.31H28.56l7.64,10h3.2a7.5,7.5,0,0,0,2.75-.28q.57-.26.15-1.17"></path> <path d="M51.93,44.13a6.44,6.44,0,0,1,2.51,1.59,37.28,37.28,0,0,1,3.2,3.79,29,29,0,0,1,2.64,3.87c.39.8.34,1.32-.13,1.54a7.73,7.73,0,0,1-2.87.3H53.67L44.92,43.73h3.61A12.56,12.56,0,0,1,51.93,44.13Zm7.87,9.14a27.44,27.44,0,0,0-2.57-3.76,36.14,36.14,0,0,0-3.1-3.68,5.35,5.35,0,0,0-2-1.31,11.69,11.69,0,0,0-3.23-.36H45.7l8.07,10.63H57a7.5,7.5,0,0,0,2.75-.28c.39-.17.41-.58.09-1.25"></path> <path d="M70.65,44.51a54.19,54.19,0,0,1,7.16,7.9c4.17,5.47,6,9.6,5.31,12.28s-3.85,4-9.51,4l-27.3-.14L0,7.75l27.36.14c10.77,0,20.17,5.26,28,15.47,3.32,4.35,5.07,7.67,5.22,9.85S59.47,36.89,57,37.69a38.47,38.47,0,0,1,7,2.37A29.51,29.51,0,0,1,70.65,44.51Zm12,19.88c.62-2.59-1.13-6.63-5.21-12a52.91,52.91,0,0,0-7-7.73A27.7,27.7,0,0,0,64,40.4a35.05,35.05,0,0,0-7-2.32l-.69-.72C59,36.54,60.16,35.07,60,33s-1.86-5.35-5.11-9.61c-7.58-9.94-16.74-15-27.24-15.06l-27-.13,45.71,60,26.88.13c5.55,0,8.69-1.27,9.32-3.87"></path></g></svg>
  <h1 class="title">
    Interstellar B-fields crossing inflation B-modes
  </h1>

  {{readFile "assets/content/landing-page-intro.md" | renderMarkup}}

  <ul class="workplan emphase">
    <li v-for="(workPackage, index) in workPackages">
      <router-link :to="'/workplan/workpackage-0' + (index+1)  ">
        WP\{\{index+1\}\} - \{\{workPackage.name\}\}
      </router-link>
    </li>
  </ul>

  {{readFile "assets/content/landing-page-proposal.md" | renderMarkup}}
</div>
`
})
{{- end -}}
