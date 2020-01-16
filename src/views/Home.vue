<template>
  <div class="home">
    <MainCarousel />
    <MainBrand />
    <Main />
    <MainLiked />
    <MainViewed />
    <MainAbout />
    
  </div>
</template>

<script>
import MainCarousel from '@/components/main/Carousel'
import MainBrand from '@/components/main/Brand'
import Main from '@/components/main/Main'
import MainLiked from '@/components/main/Liked'
import MainViewed from '@/components/main/Viewed'
import MainAbout from '@/components/main/About'

export default {
  name: 'home',
  components: {
    MainCarousel, MainBrand, Main, MainAbout, MainLiked, MainViewed 
  },
  
}
</script>
