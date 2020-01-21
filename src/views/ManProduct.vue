<template>
  <section>
    <TopNav />
    <TopBanner />
    <div class="fs-container-prod fs-container">
      <ProductSearch />
      <div class="main-goods">
        <div v-for="item in items" :key="item.id" class="main-goods-tile" :id="item.id">
          <router-link :to="`${item.categories}/product-id-${item.id}`" :tag="a">
            <img :src="`${item.img_main_url}`" alt />
          </router-link>
          <div class="main-goods-tile-desc">
          <div class="text-center">
            <div><i class="fas fa-square-full"></i></div>
            <div><i class="fas fa-square-full"></i></div>
          </div>
          <h3>{{item.activity}}</h3>
          <h2>{{item.title}}</h2>
          <h2>${{item.price}}</h2>
          </div>
        </div>
        <SubcategoryDescription />
      </div>
    </div>
  </section>
</template>
<script>
import products from "@/json/products.json.js";
import ProductSearch from "@/components/search/ProductSearch";
import Footer from "@/components/footer/Footer";
import TopNav from "@/components/search/nav/TopNav";
import TopBanner from "@/components/search/nav/TopBanner";
import SubcategoryDescription from "@/components/products/SubcategoryDescription";

export default {
  data() {
    return {
      items: products
    };
  },
  components: {
    ProductSearch,
    TopNav,
    TopBanner,
    SubcategoryDescription
  }
};
</script>

