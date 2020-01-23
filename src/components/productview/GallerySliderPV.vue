<template>
 <div>
     <div class="fs-container flex-sb product-view-gall-add-photo">
         <h2>SEE OUR FANS</h2>
         <h2>+ADD YOUR PHOTO</h2>
     </div>
         <section class="product-view-gall-slider slider">
      <div class="product-view-sl-image"><img src="@/assets/img/product_view_gall_slider_1.jpg"></div>
      <div class="product-view-sl-image"><img src="@/assets/img/product_view_gall_slider_4.jpg"></div>
      <div class="product-view-sl-image"><img src="@/assets/img/product_view_gall_slider_2.jpg"></div>
      <div class="product-view-sl-image"><img src="@/assets/img/product_view_gall_slider_3.jpg"></div>
      <div class="product-view-sl-image"><img src="@/assets/img/product_view_gall_slider_2.jpg"></div>
      <div class="product-view-sl-image"><img src="@/assets/img/product_view_gall_slider_4.jpg"></div>
      <div class="product-view-sl-image"><img src="@/assets/img/product_view_gall_slider_2.jpg"></div>
    </section>
 </div>
</template>
<script>
import $ from 'jquery'
export default {
  
    mounted() {
        $(".product-view-gall-slider").slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 3,
        draggable: true,
        focusOnSelect: true,
        centerMode: true,
        slidesToScroll: 2,
        touchMove: true,
        arrows: false,        
      });

    }
};
</script>