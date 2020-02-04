<template>
  <div id="app">
    <!-- {{femaleProducts}} -->
    <component :is="layout">
     <router-view/>
    </component>
  </div> 
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MainLayout from '@/layouts/MainLayout'
import DeliveryLayout from '@/layouts/DeliveryLayout'
import AccountLayout from '@/layouts/AccountLayout'

export default {
  computed: {
    layout() {
      // console.log(this.$route.meta)
      return (this.$route.meta.layout || 'main') + '-layout'
    },
    ...mapGetters({
      products: "getAllProducts",
      maleProducts: "getMale",
      femaleProducts: "getFemale",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetchProducts",
    }),
  },
  components: {
    MainLayout,
    DeliveryLayout,
    AccountLayout
  },
  mounted() {
    this.fetchProducts();
  },
}
</script>
<style lang="scss">
@import '~mdbootstrap/css/bootstrap.css';
@import '~slick-carousel/slick/slick-theme.css';
@import '~slick-carousel/slick/slick.css';
@import '~@fortawesome/fontawesome-free/css/all.css';
@import 'assets/style/main.scss';
@import 'assets/style/media.scss';
</style>
