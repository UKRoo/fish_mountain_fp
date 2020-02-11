<template>
  <div class="fs-prod-vw-info">
    <h2>{{ item.title }} {{ category }}</h2>
    <h3>{{ item.gender }}</h3>
    <div class="fs-prod-vw-info-rew flex-sb">
      <h2>
        ${{ item.price }}
      </h2>
      <div class="d-flex">
        <div>
        <span class="float-right"><i class="text-warning far fa-star"></i></span>
        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
        <span class="float-right"><i class="text-warning fa fa-star"></i></span>
        </div>
        <router-link to="/" class="fs-rew-url"><h3>27 reviews</h3></router-link>
      </div>
    </div>
    <div class="fs-prod-vw-info-style">
      <h2>{{ item.style }}</h2>
      <div class="fs-style-feel">
        <p>Feels too <br> small</p>
        <div class="fs-dot-style">
          <i class="text-warning fas fa-circle"></i>
          <i class="text-warning fas fa-minus"></i>
          <i class="text-warning fas fa-circle"></i>
          <i class="text-warning fas fa-minus"></i>
          <i class="text-warning fas fa-circle"></i>
          <i class="text-warning fas fa-minus"></i>
          <i class="text-warning fas fa-circle"></i>
          <i class="text-warning fas fa-minus"></i>
          <i class="text-warning fas fa-circle"></i>
        </div>
        <p>Feels too <br> big</p>

      </div>
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
      <h3 class="size-guide">
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
    <router-link tag="button" to="/" class="btn btn-primary">ADD TO CART</router-link>
    <div><img :src="`/img/link_to_the_video.jpg`" /></div>
  </div>
</template>
<style lang="scss" scoped>
button {
  width: 100%;
  margin-bottom: 74px;
}
    h3 {
font-family: Muli;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
letter-spacing: 0.06em;
text-transform: capitalize;
color: #302640;
    }
.fs-prod-vw-info-style {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 38px; 
}
.fs-dot-style {
  display: flex;
  align-items: center;
  margin-left: 18px;
  margin-right: 18px;
  i {
    color: #C4C4C4 !important;
  }
   i:nth-child(5) {
    color: #FCC43E !important;
  }
}
.fa-circle {
  font-size: 11px;
}
.fs-style-feel {
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-family: Muli;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
letter-spacing: 0.06em;
text-transform: capitalize;
padding: 0 !important;
margin: 0 !important;
color: #302640;
  }
}
  .fs-rew-url {
    h3 {
      font-family: Muli;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.06em;
text-decoration-line: underline;
text-transform: capitalize;
color: #302640;
margin-left: 10px;

    }
  }
  .size-guide {
a {
      font-family: Muli;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.06em;
text-decoration-line: underline;
text-transform: capitalize;
color: #302640;
}
  }
</style>
<script>
export default {
  data: function() {
    return {
      item: this.$store.getters.getAllProducts[this.$route.params.id],
      category: this.$store.getters.getAllProducts[this.$route.params.id]
        .categories
    };
  }
};
</script>
