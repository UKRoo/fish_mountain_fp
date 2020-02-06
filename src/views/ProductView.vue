<template>
  <section>
    <TopBannerPV />
    <div class="fs-container">
      <div class="fs-prod-vw-nav">
        <router-link to="#">
          <i class="fas fa-angle-left"></i>Back to Men’s Jackets
        </router-link>
      </div>
      <div class="fs-prod-vw-main">
        <ProductViewMainGallery />
        <ProductViewMainInfo />
      </div>
    </div>
    <GallerySliderPV />
    <ProductViewMainInfoTabs />
  </section>
</template>
<script>
import TopBannerPV from "@/components/products/TopBannerPV";
import ProductViewMainGallery from "@/components/productview/ProductViewMainGallery";
import ProductViewMainInfo from "@/components/productview/ProductViewMainInfo";
import ProductViewMainInfoTabs from "@/components/productview/ProductViewMainInfoTabs";
import GallerySliderPV from "@/components/productview/GallerySliderPV";

export default {
  item: [],
  data: function() {
    return {
      item: this.$store.getters.getAllProducts[this.$route.params.id]
    };
  },
  components: {
    TopBannerPV,
    ProductViewMainGallery,
    ProductViewMainInfo,
    GallerySliderPV,
    ProductViewMainInfoTabs
  }
};
</script>


