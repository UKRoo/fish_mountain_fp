<template>
  <div>
    <Header />
    <router-view />
    <Footer />
    <ModalLogin />
    <ModalCart />
    <ModalWish />
  </div>
</template>
<script>
import Header from "@/components/header/Header";
import Footer from "@/components/Footer.vue";
import ModalLogin from "@/components/modal/ModalLogin.vue";
import ModalCart from "@/components/modal/ModalCart.vue";
import ModalWish from "@/components/modal/ModalWish.vue";

export default {
  components: {
    Header,
    Footer,
    ModalLogin,
    ModalCart,
    ModalWish
  }
};
</script>