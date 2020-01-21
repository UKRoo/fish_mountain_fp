<template>
  <div class="product-search">
    <div class="accordion" id="accordionProductSearch">
      <Gender />
      <Activity />
      <Size />
      <Color />
      <Price />
      <Material />
      <Technology />
      <Brand />
    </div>
  </div>
</template>
<script>
import Gender from "@/components/search/aside/Gender";
import Activity from "@/components/search/aside/Activity";
import Size from "@/components/search/aside/Size";
import Color from "@/components/search/aside/Color";
import Price from "@/components/search/aside/Price";
import Material from "@/components/search/aside/Material";
import Technology from "@/components/search/aside/Technology";
import Brand from "@/components/search/aside/Brand";


export default {
  components: {
    Gender,
    Activity,
    Size,
    Color,
    Price,
    Material,
    Technology,
    Brand
  }
};
</script>