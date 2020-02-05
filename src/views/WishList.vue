<template>
  <div class="fs-container wishlist-container">
    <h2>WISHLIST</h2>
    <hr />
    <div class="wishlist-tile">
      <div class="wishlist-tile-main">
        <div class="wishlist-tile-main-img">
          <img src="@/assets/img/product_f_2.jpg" alt />
        </div>
        <div class="wishlist-tile-main-info">
          <h2>Patagonia Better Sweater® Jacket</h2>
          <h3>Color: Light Beige</h3>
          <h3>In stock</h3>
          <h3>In stock</h3>
          <router-link to="#">
            <h3>Remove</h3>
          </router-link>
        </div>
      </div>
      <div class="wishlist-tile-order-info">
        <div class="wishlist-tile-order-gall">
          <img src="@/assets/img/product_f_s_1.jpg" alt="Patagonia Better Sweater" />
          <img src="@/assets/img/product_f_s_2.jpg" alt="Patagonia Better Sweater" />
          <img src="@/assets/img/product_f_s_3.jpg" alt="Patagonia Better Sweater" />
          <img src="@/assets/img/product_f_s_4.jpg" alt="Patagonia Better Sweater" />
        </div>
        <div class="wishlist-tile-order-sizes-info flex-sb ">
          <div class="wishlist-tile-order-size">
            <div class="size-square">S</div>
            <div class="size-square">M</div>
            <div class="size-square">L</div>
            <div class="size-square">XL</div>
          </div>
          <div class="fs-select-qty">
            <select class="browser-default custom-select">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <router-link to="#"><h3>Size guide</h3></router-link>
        <button class="btn btn-outline-primary">ADD TO CART</button>
      </div>
    </div>
    <hr />
  </div>
</template>