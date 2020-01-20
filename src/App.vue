<template>
  <div id="app">
    <component :is="layout">
     <router-view/>
    </component>
  </div> 
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  computed: {
    layout() {
      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  
  components: {
    MainLayout
  }
}
</script>
<style lang="scss">
@import '~mdbootstrap/css/bootstrap.css';
@import '~slick-carousel/slick/slick-theme.css';
@import '~slick-carousel/slick/slick.css';
@import '~@fortawesome/fontawesome-free/css/all.css';
@import 'assets/style/main.scss';
@import 'assets/style/media.scss';
</style>
