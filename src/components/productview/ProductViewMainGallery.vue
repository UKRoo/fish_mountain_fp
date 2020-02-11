<template>
  <div class="fs-prod-vw-gall-main">
    <div>
      <div class="slider slider-for">
        <div v-for="n in 3" class="main-img">
          <img :src="`/img/products/product_vw_${$route.params.id}_${n}.jpg`" />
        </div>
      </div>
      <div class="slider slider-nav">
        <div v-for="n in 3">
          <img :src="`/img/products/product_vw_${$route.params.id}_${n}.jpg`" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .main-img{
    margin-bottom: 85px;
  }
</style>
<script>
import $ from "jquery";

export default {
  mounted() {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav"
    });
    $(".slider-nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: true,
      focusOnSelect: true
    });
  }
};
</script>
