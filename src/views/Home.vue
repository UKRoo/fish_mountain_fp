<template>
  <div class="home">
    <MainCarousel />
    <MainBrand />
    <MainMain />

    <MainAbout />
    
  </div>
</template>

<script>
import MainCarousel from '@/components/MainCarousel.vue'
import MainBrand from '@/components/MainBrand.vue'
import MainMain from '@/components/MainMain.vue'
import MainAbout from '@/components/MainAbout.vue'

export default {
  name: 'home',
  components: {
    MainCarousel, MainBrand, MainMain, MainAbout 
  },
  
}
</script>
