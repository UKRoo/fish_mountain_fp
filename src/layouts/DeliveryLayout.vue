<template>
  <div>
    <Header />
    <div class="fs-mount-bg">
      <div class="fs-container">
        <DeliveryHeader />
        <router-view />
      </div>
    </div>
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
import DeliveryHeader from "@/components/delivery/DeliveryHeader";

export default {
  components: {
    Header,
    Footer,
    ModalLogin,
    ModalCart,
    ModalWish,
    DeliveryHeader
  }
};
</script>

src\components\delivery\DeliveryHeader.vue