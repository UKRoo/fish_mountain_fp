<template>
  <section>
    <div class="fs-container fs-container-prod">
      <div class="product-search">a</div>
      <div class="main-goods">
        <div v-for="item in items" :key="item.id" class="main-goods__tile" :id="item.id">
          <router-link :to="`${item.categories}/product-id-${item.id}`" :tag="a" >
            <img :src="`${item.img_main_url}`" alt />
            <p class="text-center">{{item.title}}</p>
          </router-link>
             <!-- <button @click="greet">Поприветствовать</button> -->

        </div>
      </div>
    </div>
    <!-- <img :src="require('@/assets/img/product_1.jpg')" /> -->
  </section>
</template>
<script>
import products from "@/json/products.json.js";

export default {
  data() {
    return {
      items: products
    };
  },
  methods: {
    greet: function() {
      alert(items.id)
    }
  }
};
</script>

