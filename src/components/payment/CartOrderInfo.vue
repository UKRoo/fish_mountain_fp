<template>
  <div class="cart-order-info">
    <div class="d-flex flex-column cart-order-block">
      <div class="d-flex align-items-center">
        <i class="fas fa-circle"></i>
        <h2>CART</h2>
      </div>
      <div class="cart-block">
        <div class="cart-block-items" v-for="item in items" :key="item.id">
          <img :src="`/img/products/product_${item.id}.jpg`" alt="" />
          <div class="d-flex justify-content-between right-block-info">
            <h4>{{ item.title }}</h4>
            <h3>${{ item.price }}</h3>
          </div>
        </div>
                  <div class="d-flex justify-content-between right-block-info">
                    
          </div>
      </div>
      <div class="d-flex align-items-center">
        <i class="fas fa-circle"></i>
        <h2>DELIVERY</h2>
      </div>
      <div class="d-flex align-items-center">
        <i class="fas fa-circle"></i>
        <h2>PAYMENT</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCart;
    }
  }
};
</script>
<style lang="scss" scoped>
.right-block-info {
    width: 100%;
    margin-right: 45px;
}
.cart-block {
  border-left: 0.5px solid #d0d0d0;
  margin-left: 25px;
}
.cart-block-items {
  margin-top: 32px;
  display: flex;
//   width: 100%;

  h4 {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.06em;
    text-transform: capitalize;
    color: #302640;
    margin-left: 23px;
  }
  h3 {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.06em;

    color: #302640;
  }
  img {
    width: 81px;
    // margin-bottom: 34px;
    margin-left: 32px;
  }
}
h2 {
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.06em;
  color: #302640;
  margin: 0;
}
ul {
  margin-top: 65px;
}
.fa-circle {
  color: #fcc43e;
  font-size: 15px;
  margin-left: 16px;
}
.cart-order-block {
  margin-top: 65px;
}
</style>
