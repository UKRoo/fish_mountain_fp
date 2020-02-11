<template>
  <section>
    <!-- {{sizes}} -->
    <TopBannerPV />
    <div class="fs-container">
      <div class="fs-prod-vw-nav">
        <router-link :to="`/ct/${item.categories}`">
          <i class="fas fa-angle-left"></i>Back to {{item.gender}} {{item.categories}}
        </router-link>
      </div>
      <div class="fs-prod-vw-main">
        <ProductViewMainGallery />
        <ProductViewMainInfo />
      </div>
    </div>
    <GallerySliderPV />
    <ProductViewMainInfoTabs />
    <ShopTheLook />
  </section>
</template>
<script>
import TopBannerPV from "@/components/products/TopBannerPV";
import ProductViewMainGallery from "@/components/productview/ProductViewMainGallery";
import ProductViewMainInfo from "@/components/productview/ProductViewMainInfo";
import ProductViewMainInfoTabs from "@/components/productview/ProductViewMainInfoTabs";
import GallerySliderPV from "@/components/productview/GallerySliderPV";
import ShopTheLook from "@/components/productview/ShopTheLook";

export default {
  item: [],
  sizes: [],
  data: function() {
    return {
      item: this.$store.getters.getAllProducts[this.$route.params.id],
      sizes: this.$store.getters.getAllSizes
    };
  },
  components: {
    TopBannerPV,
    ProductViewMainGallery,
    ProductViewMainInfo,
    GallerySliderPV,
    ProductViewMainInfoTabs,
    ShopTheLook
  }
};
</script>


