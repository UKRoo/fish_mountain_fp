<template>
  <div class="fs-container wishlist-container">
    <h2>Wishlist</h2>
    <hr />
    <div class="wishlist-tile" v-for="item in items" :key="item.id">
      <div class="wishlist-tile-main">
        <div class="wishlist-tile-main-img">
          <img :src="`/img/products/product_${item.id}.jpg`" alt="">
        </div>
        <div class="wishlist-tile-main-info">
          <h2>Patagonia Better Sweater® Jacket</h2>
          <h3>Color: Light Beige</h3>
          <h3>In stock</h3>
          <router-link to="">
            <h3 v-on:click="item.wishlist = !item.wishlist">Remove</h3>
          </router-link>
        </div>
      </div>
      <div class="wishlist-tile-order-info">
        <div class="wishlist-tile-order-gall">
          <img v-for="n in 4" :key="n" :src="`/img/products/product_${item.id}.jpg`" alt="">
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
              <option v-for="n in 10" :key="n" :value="`${n}`">{{n}}</option>
            </select>
          </div>
        </div>
        <router-link to="#"><h3>Size guide</h3></router-link>
        <button v-on:click="item.cart = !item.cart" class="btn btn-outline-primary">ADD TO CART</button>
      </div>
    </div>
    <hr />
    <div class="flex-end test-1">
        <router-link tag="button" to="/cart" class="btn btn-primary">GO TO CART</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wishlist-tile-order-gall{
  img {
  width: 98px;
  }
}
.btn-primary {
  width: 392px;
  margin-top: 50px;
  margin-bottom: 96px;
}
</style>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getWishlist;
    }
  }
};
</script>
