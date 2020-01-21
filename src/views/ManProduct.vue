<template>
  <section>
    <TopNav />
    <TopBanner />
      <div class="fs-container-prod fs-container">
      <ProductSearch />
      <div class="main-goods">
        <div v-for="item in items" :key="item.id" class="main-goods__tile" :id="item.id">
          <router-link :to="`${item.categories}/product-id-${item.id}`" :tag="a" >
            <img :src="`${item.img_main_url}`" alt />
            <p class="text-center">{{item.title}}</p>
          </router-link>
         
  
        </div>
      </div>
      </div>

    <!-- <img :src="require('@/assets/img/product_1.jpg')" /> -->
  </section>
</template>
<script>
import products from "@/json/products.json.js";
import ProductSearch from "@/components/search/ProductSearch"
import Footer from "@/components/footer/Footer";
import TopNav from "@/components/search/nav/TopNav";
import TopBanner from "@/components/search/nav/TopBanner";



export default {
  data() {
    return {
      items: products
    };
  },
  components: {
    ProductSearch, TopNav,TopBanner
  }
};
</script>

