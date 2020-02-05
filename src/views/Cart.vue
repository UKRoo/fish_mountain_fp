<template>
  <div class="fs-container cart-container">
    <h2>CART</h2>
    <hr />
    <div class="cart-main flex-sb">
      <div class="cart-product-tile flex-sa">
        <img src="@/assets/img/product_f_2.jpg" alt />
        <div class="product-tile-info">
          <h2>
            Patagonia Better
            <br />Sweater® Jacket
          </h2>

          <h3>Color: Light Beige</h3>
          <h4>$ Price</h4>
          <div class="fs-select-qty">
            <select class="browser-default custom-select">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div class="cart-product-tile-icons">
            <router-link to=""><i class="far fa-heart"></i></router-link>
            <router-link to=""><i class="fas fa-times"></i></router-link>
        </div>
      </div>
      <div class="cart-order-info">
          <!--  -->
      </div>
    </div>
  </div>
</template>