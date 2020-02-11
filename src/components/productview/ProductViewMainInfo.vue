<template>
  <div class="fs-prod-vw-info">
    <h2>
      {{ item.title }} {{category}}
    </h2>
    <h2>{{ item.gender }}</h2>
    <div class="fs-prod-vw-info-rew flex-sb">
      <h2>
        <b>${{ item.price }}</b>
      </h2>
      <!-- <div class="container">
  <span id="rateMe1"></span>
</div> -->
      <div>27 reviews</div>
    </div>
    <div class="fs-prod-vw-info-style flex-sb">
      <h2>{{ item.style }}</h2>
      <div>rew</div>
    </div>
    <div class="fs-prod-vw-info-size">
      <h3>Select a Size</h3>
      <div class="fs-size-block">
        <div
          v-for="(size, index) in item.sizes"
          :key="index"
          class="size-square"
        >
          {{ size }}
        </div>
      </div>
      <h3>
        <router-link to="/">Size Guide</router-link>
      </h3>
      <div class="fs-prod-vw-info-color flex-sb">
        <div class="fs-select-color">
          <h3>Select a Color</h3>
          <div class="color-block">
            <div class="fs-select-color-1"></div>
            <div class="fs-select-color-2"></div>
          </div>
        </div>
        <div class="fs-select-qty">
          <h3>Quantity</h3>
          <select class="browser-default custom-select">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
  data: function() {
    return {
      item: this.$store.getters.getAllProducts[this.$route.params.id],
      category: this.$store.getters.getAllProducts[this.$route.params.id].categories
    };
  },
 
};
</script>
