<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
    <ModalLogin />
    <ModalCart />
    <ModalWish />

  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ModalLogin from '@/components/modal/ModalLogin.vue'
import ModalCart from '@/components/modal/ModalCart.vue'
import ModalWish from '@/components/modal/ModalWish.vue'

export default {
  name: 'app',
  components: {
    Header, Footer, ModalLogin, ModalCart, ModalWish
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
