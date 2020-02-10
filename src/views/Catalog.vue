<template>
  <section>
    <TopNav />
    <TopBanner />
    <div class="fs-container-prod fs-container">
      <ProductSearch />
      <div class="main-goods">
        <div v-for="item in items" :key="item.id" class="main-goods-tile" :id="item.id">
          <div class="add-wishlist">
            <i
              v-on:click="item.wishlist = !item.wishlist"
              class="far fa-heart"
              v-bind:class="{ in_wish: item.wishlist }"
            ></i>
          </div>
          <router-link :to="`/ct/${item.categories}/p-${item.id}`">
            <img :src="`${item.img_main_url}`" :alt="`${item.title}`" />
          </router-link>
          <div class="main-goods-tile-desc">
            <div class="text-center">
              <div>
                <i class="fas fa-square-full"></i>
              </div>
              <div>
                <i class="fas fa-square-full"></i>
              </div>
            </div>
            <h2>{{ item.gender }}'s {{ item.activity }}</h2>
            <h2>{{ item.title }}</h2>
            <h2>${{ item.price }}</h2>
          </div>
        </div>
        {{}}
        <SubcategoryDescription />
      </div>
    </div>
  </section>
</template>
<script>
// import { mapGetters, mapActions } from "vuex";
import ProductSearch from "@/components/search/ProductSearch";
import Footer from "@/components/footer/Footer";
import TopNav from "@/components/search/nav/TopNav";
import TopBanner from "@/components/search/nav/TopBanner";
import SubcategoryDescription from "@/components/products/SubcategoryDescription";

export default {
   gender: '',
   computed: {
    gender () { 
     return this.$route.params.pathMatch.split('/')[0]
    },
    items() {
      if (this.$route.params.pathMatch.split('/')[0] == "men") {
        return this.$store.getters.getMale;
      } else {
        return this.$store.getters.getFemale;
      }
    }
  },
  components: {
    ProductSearch,
    TopNav,
    TopBanner,
    SubcategoryDescription
  }
};
</script>

