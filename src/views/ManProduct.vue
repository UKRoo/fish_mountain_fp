<template>
  <section>
    <div class="fs-container fs-container-prod">
      <div class="product-search">a</div>
      <div class="main-goods">
        <div v-for="item in items" :key="item.id" class="main-goods__tile" :id="item.id">
          <a :href="`${item.categories}/product-id-${item.id}`" >
            <img :src="`${item.img_main_url}`" alt />
            <p>{{item.title}}</p>
          </a>
             <button v-on:click="greet">Поприветствовать</button>

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
      alert(id)
    }
  }
};
</script>

