<template>
  <div id="app">
    <MainHeader />
    <router-view/>
    <MainFooter />
    <ModalLogin />
    <ModalCart />
    <ModalWish />

  </div>
</template>
<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import ModalLogin from '@/components/ModalLogin.vue'
import ModalCart from '@/components/ModalCart.vue'
import ModalWish from '@/components/ModalWish.vue'

export default {
  name: 'app',
  components: {
    MainHeader, MainFooter, ModalLogin, ModalCart, ModalWish
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
