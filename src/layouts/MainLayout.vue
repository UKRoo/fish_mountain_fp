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
import Footer from "@/components/footer/Footer";
import ModalLogin from "@/components/modal/ModalLogin";
import ModalCart from "@/components/modal/ModalCart";
import ModalWish from "@/components/modal/ModalWish";

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