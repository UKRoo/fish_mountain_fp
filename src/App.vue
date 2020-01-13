<template>
  <div id="app">
    <MainHeader />

    <router-view/>
    <MainFooter />
  </div>
</template>
<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'app',
  components: {
    MainHeader, MainFooter
  }
}
</script>
<style lang="scss">
@import '~mdbootstrap/css/bootstrap.css';
@import '~@fortawesome/fontawesome-free/css/all.css';
@import 'assets/style/main.scss';
@import 'assets/style/media.scss';
</style>
