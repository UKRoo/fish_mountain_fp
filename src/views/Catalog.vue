<template>
  <section>
    <TopNav />
    <TopBanner />
    <div class="fs-container-prod fs-container">
      <ProductSearch />
      <div class="main-goods">
        <div v-for="item in items" :key="item.id" class="main-goods-tile" :id="item.id">
          <a :href="`/ct/${item.categories}/p-${item.id}`">
            <img :src="`${item.img_main_url}`" :alt="`${item.title}`" />
          </a>
          <div class="main-goods-tile-desc">
            <div class="text-center">
              <div>
                <i class="fas fa-square-full"></i>
              </div>
              <div>
                <i class="fas fa-square-full"></i>
              </div>
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
  
  data: function() {
    return {
      items: products.filter(function (products){
        return products.id > 0
      })
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
