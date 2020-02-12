<template>
  <div class="flex-end icons">
    
    <a href="#" data-toggle="modal" data-target="#modalCart">
<span class="fa-stack has-badge" :data-count="`${cart}`">
  <i class="fas fa-shopping-bag fa-stack-1x fa-inverse"></i>
</span>
    </a>
        <a href="#" data-toggle="modal" data-target="#modalWish">
<span class="fa-stack has-badge" :data-count="`${wish}`">
  <i class="fas fa-heart fa-stack-1x fa-inverse"></i>
</span>
    </a>
    <a href="#" data-toggle="modal" data-target="#basicRegModal">
      <i class="far fa-user"></i>
    </a>
    
  </div>
</template>
<style lang="scss">

.fa-stack[data-count]:after{
  font-size: 10px !important;
  position:absolute;
  right:-10%;
  top:-2%;
  content: attr(data-count);
  // font-size:40%;
  padding:.6em;
  border-radius:999px;
  line-height:.75em;
  color: white;
  text-align:center;
  min-width:2em;
  font-weight:bold;
  background: #D80000;
  border: 1px solid #D80000;
}
.fa-user{
  font-size: 27px !important;
}

</style>
<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.getCart.length;
    },
    wish() {
      return this.$store.getters.getWishlist.length;
    },
  }
};
</script>