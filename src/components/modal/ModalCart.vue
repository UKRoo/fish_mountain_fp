<template>
  <section>
    <!-- Modal: modalCart -->
    <div
      class="modal fade"
      id="modalCart"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--Header-->
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabelCart">
              In your CART {{this.items.length}} items
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <!--Body-->
          <div class="modal-body">
            <table class="table table-hover">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <th scope="row"><router-link to=""><i 
                  v-on:click="item.cart = !item.cart"
                  class="fas fa-times"></i></router-link></th>
                  <td><img :src="`/img/products/product_${item.id}.png`" alt=""></td>
                  <td>{{item.title}}<br>{{item.gender}}</td>
                  <td>1</td>
                  <td>${{item.price}}</td>
                </tr>

                <tr class="total">
                  <th scope="row">&#8195;</th>
                  <td>&#8195;</td>
                  <td>&#8195;</td>
                  <td>Total</td>
                  <td>${{totalPrice}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-primary"
              data-dismiss="modal"
            >
              Close
            </button>
            <router-link tag="button" to="/cart" class="btn btn-primary" data-dismiss="modal">Checkout</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal: modalCart -->
  </section>
</template>
<style lang="scss" scoped>
img {
  height: 60px;
}
.fa-times {
  color: #302640;
}
</style>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCart;
    },
    totalPrice () {
      return this.items.reduce((total, item) => total + (item.price * 1), 0);
    },

  }
};
</script>
