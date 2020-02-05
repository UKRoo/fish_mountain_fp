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
              In your CART 4 items
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
                <tr>
                  <th scope="row">
                    <router-link to=""><i class="fas fa-times"></i></router-link>
                  </th>
                  <td><img src="@/assets/img/cart_itms.png" alt="" /></td>
                  <td>
                    Jacket Jack Wolfskin<br />
                    Men
                  </td>
                  <td>1</td>
                  <td>160$</td>
                </tr>
                <tr>
                  <th scope="row">
                    <router-link to=""><i class="fas fa-times"></i></router-link>
                  </th>
                  <td><img src="@/assets/img/cart_itms.png" alt="" /></td>
                  <td>
                    Jacket Jack Wolfskin<br />
                    Men
                  </td>
                  <td>1</td>
                  <td>160$</td>
                </tr>
                <tr>
                  <th scope="row">
                    <router-link to=""><i class="fas fa-times"></i></router-link>
                  </th>
                  <td><img src="@/assets/img/cart_itms.png" alt="" /></td>
                  <td>
                    Jacket Jack Wolfskin<br />
                    Men
                  </td>
                  <td>1</td>
                  <td>160$</td>
                </tr>
                <tr>
                  <th scope="row">
                    <router-link to=""><i class="fas fa-times"></i></router-link>
                  </th>
                  <td><img src="@/assets/img/cart_itms.png" alt="" /></td>
                  <td>
                    Jacket Jack Wolfskin<br />
                    Men
                  </td>
                  <td>1</td>
                  <td>160$</td>
                </tr>
                <tr class="total">
                  <th scope="row">&#8195;</th>
                  <td>&#8195;</td>
                  <td>&#8195;</td>
                  <td>Total</td>
                  <td>640$</td>
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
            <button class="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal: modalCart -->
  </section>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getMale;
    }
  }
};
</script>
