<template>
   
  <section>
    <!-- Modal: modalWish -->
    <div class="modal fade" id="modalWish" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--Header-->
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabelWish">WISHLIST</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <!--Body-->
          <div class="modal-body">

            <table class="table table-hover">
              <thead>
                <tr>
                </tr>
              </thead>
              <tbody> 
                <tr v-for="item in items" :key="item.id">
                  <th scope="row"><router-link to=""><i 
                  v-on:click="item.wishlist = !item.wishlist"
                  class="fas fa-times"></i></router-link></th>
                  <td><img :src="`/img/products/product_${item.id}.jpg`" alt=""></td>
                  <td>{{item.title}}<br>{{item.gender}}</td>
                  <td>${{item.price}}</td>
                </tr>
              </tbody>
            </table>

          </div>
          <!--Footer-->
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal: modalWish -->
  </section> 
</template>
<style lang="scss" scoped>
img {
  height: 60px;
}
</style>
<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getWishlist;
    }
  }
};
</script>