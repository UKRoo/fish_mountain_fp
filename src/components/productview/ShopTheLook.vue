<template>
  <div class="look-bg">
    <div class="fs-container fs-look-wrap">
      <h1>SHOP THE LOOK</h1>
      <div class="fs-look-tile" v-for="look in looks" :key="look.id" to="/">
        <div class="fs-look-tile-left">
          <router-link :to="`/ct/${look.categories}/p-${look.id}`">
            <img :src="`/img/products/product_${look.id}.png`" />
          </router-link>
          <i
            v-on:click="look.wishlist = !look.wishlist"
            class="far fa-heart"
            v-bind:class="{ in_wish: look.wishlist }"
          ></i>
        </div>
        <div class="fs-look-tile-right">
          <h2>
            <b>{{look.title}}</b>
          </h2>
          <h2>
            <b>${{look.price}}</b>
          </h2>
          <h2>{{look.gender}}</h2>
          <h2>100% Polyester</h2>
          <div class="fs-size-block">
            <div v-for="(size, index) in look.sizes" :key="index" class="size-square">{{ size }}</div>
          </div>
          <div class="fs-color-wrap">
            <div class="color-block">
              <div class="fs-select-color-1"></div>
              <div class="fs-select-color-2"></div>
            </div>
            <button v-on:click="look.cart = !look.cart" class="btn btn-primary">ADD TO CART</button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.look-bg {
  background-image: url("/img/look_bg.png");
  background-repeat: no-repeat;
  background-position: center bottom;
}
.fs-color-wrap {
  display: flex;
  justify-content: space-between;
  button {
    width: 377px;
  }
}
.color-block {
  display: flex;
  margin-right: 289px;
}
.fs-select-color-1 {
  width: 44px;
  height: 44px;
  border: 1px solid #e6e6e6;
  background-color: #55e590;
  cursor: pointer;
  margin-right: 18px;
}

.fs-select-color-2 {
  width: 44px;
  height: 44px;
  border: 1px solid #e6e6e6;
  background-color: #e26930;
  cursor: pointer;
}

.fs-size-block {
  display: flex;
  margin-top: 55px;
  margin-bottom: 29px;
}
.fs-look-tile {
  display: flex;
  margin-top: 18px;
  margin-bottom: 18px;
}
.fs-look-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 184px;
  h1 {
    margin-bottom: 82px;
  }
}
.fs-look-tile-left {
  display: flex;
  i {
    font-size: 30px;
    cursor: pointer;
  }
  img {
    width: 385px;
  }
}
.fs-look-tile-right {
  margin-left: 18px;
}
h2 {
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #302640;
  margin-bottom: 18px;
}
</style>
<script>
export default {
  data: function() {
    return {
      looks: this.$store.getters.getLooks
    };
  }
};
</script>
