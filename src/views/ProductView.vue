<template>
  <section>
    <TopBannerPV />
    <div class="fs-container">
      <div class="fs-prod-vw-nav">
        <a href>
          <i class="fas fa-angle-left"></i>Back to Men’s Jackets
        </a>
      </div>
      <!-- ProductView {{$route.params.id}} -->
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
// import products from "@/json/products.json.js";

import TopBannerPV from "@/components/products/TopBannerPV";
import ProductViewMainGallery from "@/components/productview/ProductViewMainGallery";
import ProductViewMainInfo from "@/components/productview/ProductViewMainInfo";
import ProductViewMainInfoTabs from "@/components/productview/ProductViewMainInfoTabs";
import GallerySliderPV from "@/components/productview/GallerySliderPV";

export default {
  // item: [],
  data: function() {
    return {
      // item: products[$route.params.id]
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


