<template>
    
  <section id="viewed" class="product">
    <h2>VIEWED</h2>
    <section class="view slider">
      <div class="product-sl">
        <img src="@/assets/img/product_1.jpg">
        <div class="product-view">
          <div class="product-color">
            <img src="@/assets/img/rectangle_1.png" alt="">
            <img src="@/assets/img/rectangle_2.png" alt="">
            <img src="@/assets/img/rectangle_3.png" alt="">
          </div>
          <div class="product-info text-center">
            <h3>Thermal underwear</h3>
            <h4>Jack Wolfskin</h4>
            <div class="price-cart">
              <p>$20</p>
              <i class="far fa-heart"></i>
              <i class="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="product-sl"><img src="@/assets/img/product_2.jpg">
        <div class="product-view">
          <div class="product-color">
            <img src="@/assets/img/rectangle_1.png" alt="">
            <img src="@/assets/img/rectangle_2.png" alt="">
            <img src="@/assets/img/rectangle_3.png" alt="">
          </div>
          <div class="product-info text-center">
            <h3>Thermal underwear</h3>
            <h4>Jack Wolfskin</h4>
            <div class="price-cart">
              <p>$20</p>
              <i class="far fa-heart"></i>
              <i class="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="product-sl"><img src="@/assets/img/product_3.jpg">
        <div class="product-view">
          <div class="product-color">
            <img src="@/assets/img/rectangle_1.png" alt="">
            <img src="@/assets/img/rectangle_2.png" alt="">
            <img src="@/assets/img/rectangle_3.png" alt="">
          </div>
          <div class="product-info text-center">
            <h3>Thermal underwear</h3>
            <h4>Jack Wolfskin</h4>
            <div class="price-cart">
              <p>$20</p>
              <i class="far fa-heart"></i>
              <i class="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="product-sl"><img src="@/assets/img/product_4.jpg">
        <div class="product-view">
          <div class="product-color">
            <img src="@/assets/img/rectangle_1.png" alt="">
            <img src="@/assets/img/rectangle_2.png" alt="">
            <img src="@/assets/img/rectangle_3.png" alt="">
          </div>
          <div class="product-info text-center">
            <h3>Thermal underwear</h3>
            <h4>Jack Wolfskin</h4>
            <div class="price-cart">
              <p>$20</p>
              <i class="far fa-heart"></i>
              <i class="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="product-sl"><img src="@/assets/img/product_5.jpg">
        <div class="product-view">
          <div class="product-color">
            <img src="@/assets/img/rectangle_1.png" alt="">
            <img src="@/assets/img/rectangle_2.png" alt="">
            <img src="@/assets/img/rectangle_3.png" alt="">
          </div>
          <div class="product-info text-center">
            <h3>Thermal underwear</h3>
            <h4>Jack Wolfskin</h4>
            <div class="price-cart">
              <p>$20</p>
              <i class="far fa-heart"></i>
              <i class="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="product-sl"><img src="@/assets/img/product_6.jpg">
        <div class="product-view">
          <div class="product-color">
            <img src="@/assets/img/rectangle_1.png" alt="">
            <img src="@/assets/img/rectangle_2.png" alt="">
            <img src="@/assets/img/rectangle_3.png" alt="">
          </div>
          <div class="product-info text-center">
            <h3>Thermal underwear</h3>
            <h4>Jack Wolfskin</h4>
            <div class="price-cart">
              <p>$20</p>
              <i class="far fa-heart"></i>
              <i class="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="product-sl"><img src="@/assets/img/product_3.jpg">
        <div class="product-view">
          <div class="product-color">
            <img src="@/assets/img/rectangle_1.png" alt="">
            <img src="@/assets/img/rectangle_2.png" alt="">
            <img src="@/assets/img/rectangle_3.png" alt="">
          </div>
          <div class="product-info text-center">
            <h3>Thermal underwear</h3>
            <h4>Jack Wolfskin</h4>
            <div class="price-cart">
              <p>$20</p>
              <i class="far fa-heart"></i>
              <i class="fas fa-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import JQuery from 'jquery'
window.$ = JQuery
export default {
  
    mounted() {
        $(".view").slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 5,
        initialSlide: 2,
        draggable: true,
        focusOnSelect: true,
        centerMode: true,
        slidesToScroll: 2,
        touchMove: true,
        prevArrow: "<img src='@/assets/img/rectangle_1.png' class='slick-prev' alt='1'>",
        nextArrow: "<img src='@/assets/img/arrow-point-to-right.png' class='slick-next' alt='2'>",
      });

    }
};
</script>