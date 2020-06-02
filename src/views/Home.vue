<template>
  <div class="home-page">
    <full-page ref="fullpage" :options="options">
      <div class="section">
        1 section ...
      </div>
      <div class="section">
        2 section ...
      </div>
      <div class="section">
        3 section ...
      </div>
    </full-page>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        options: {
          licenseKey: null,
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
        }
      }
    },
    methods: {
      // Called when your components are ready. That is up to you to decide when.
      componentsReady() {
        this.$refs.fullpage.init()
      }
    },
    mounted() {
      this.componentsReady()
    }
  }
</script>
