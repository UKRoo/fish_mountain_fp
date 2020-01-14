<template>
  <div class="home">
    <MainCarousel />
    <MainBrand />
    <MainMain />
    <MainLiked />
    <MainViewed />

    <MainAbout />
    
  </div>
</template>

<script>
import MainCarousel from '@/components/MainCarousel.vue'
import MainBrand from '@/components/MainBrand.vue'
import MainMain from '@/components/MainMain.vue'
import MainLiked from '@/components/MainLiked.vue'
import MainViewed from '@/components/MainViewed.vue'

import MainAbout from '@/components/MainAbout.vue'

export default {
  name: 'home',
  components: {
    MainCarousel, MainBrand, MainMain, MainAbout, MainLiked, MainViewed 
  },
  
}
</script>
