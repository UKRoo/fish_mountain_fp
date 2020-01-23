<template>
<div class="fs-prod-vw-gall-main">
  <div>
    <div class="slider slider-for">
      <div>
        <img src="@/assets/img/product_vw_1.jpg" />
      </div>
      <div>
        <img src="@/assets/img/product_vw_2.jpg" />
      </div>
      <div>
        <img src="@/assets/img/product_vw_3.jpg" />
      </div>
    </div>
    <div class="slider slider-nav">
      <div>
        <img src="@/assets/img/product_vw_1.jpg" />
      </div>
      <div>
        <img src="@/assets/img/product_vw_2.jpg" />
      </div>
      <div>
        <img src="@/assets/img/product_vw_3.jpg" />
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import $ from "jquery";
// import JQuery from 'jquery'
// window.$ = JQuery
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