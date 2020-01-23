<template>
    <section>
        <TopBannerPV />
        <div class="fs-container">
        <div class="fs-prod-vw-nav"><a href=""><i class="fas fa-angle-left"></i>Back to Men’s Jackets</a></div>
        ProductView {{$route.params.id}}
       <div class="fs-prod-vw-main"> dfsdfs</div>
        </div>
    </section>
</template>
<script>
import TopBannerPV from "@/components/products/TopBannerPV"
export default {
    components: {
        TopBannerPV
    }
}
</script>