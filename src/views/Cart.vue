<template>
  <div class="fs-container cart-container">
    <h2>CART</h2>
    <hr />
    <div class="cart-main flex-sb">
      <div >
        <div class="cart-product-tile" v-for="item in items" :key="item.id">
          <div class="d-flex">
            <div>
              <img :src="`/img/products/product_${item.id}.png`" alt="" />
            </div>
            <div class="product-tile-info">
              <div class="flex-sb">
                <h2>{{ item.title }}</h2>
                <div class="cart-product-tile-icons">
                  <router-link to=""><i v-on:click="item.wishlist = !item.wishlist" class="far fa-heart"></i></router-link>
                  <router-link to=""><i v-on:click="item.cart = !item.cart" class="fas fa-times"></i></router-link>
                </div>
              </div>
              <h3>Color: Light Beige</h3>
              <h2>${{ item.price }}</h2>
              <div class="fs-select-qty">
                <select class="browser-default custom-select">
                  <option v-for="n in 10" :key="n" :value="`${n}`">{{
                    n
                  }}</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
        </div>
    <div class="d-flex justify-content-center">
      <router-link tag="button" to="/delivery" class="btn btn-primary order-btn">ORDER NOW</router-link>
      </div>

      </div>
      <CartOrderInfo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-main {
margin-bottom: 173px;
}
.order-btn {
  width: 377px;
  margin-top: 60px;
}
.fa-times {
  color: #B9B9B9 !important;
  font-size: 18px;
}
.product-tile-info {
  width: 100%;
  margin-right:24px; 
}
select {
  width: 81px;
  margin-top: 24px;
  margin-left: 8px;
}
  h2 {
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #302640;
    margin: 8px;

  }
    h3 {
    height: 20px;
    left: 653.01px;
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.06em;
    color: #302640;
    margin: 8px;

  }
.cart-product-tile {
  hr {
    border: 1px solid #E6E6E6
  }
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  img {
    width: 200px;
    margin-right: 78px;
  }
}
</style>
<script>
import CartOrderInfo from "@/components/payment/CartOrderInfo";

export default {
  computed: {
    items() {
      return this.$store.getters.getCart;
    }
  },
  components: {
    CartOrderInfo
  }
};
</script>
