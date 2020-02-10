<template>
  <section>
    {{size}}
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
  size: [],
  data: function() {
    return {
      item: this.$store.getters.getAllProducts[this.$route.params.id],
      size: this.$store.getters.getAllSizes[this.$route.params.id]
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


