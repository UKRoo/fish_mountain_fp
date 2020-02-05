<template>
  <section class="modal-login">
    <div
      class="modal fade"
      id="basicRegModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="basicRegModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                id="sign-in-tab"
                data-toggle="tab"
                to="#sign-in"
                role="tab"
                aria-controls="sign-in"
                aria-selected="true"
              >SIGN IN</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                id="create-tab"
                data-toggle="tab"
                to="#create"
                role="tab"
                aria-controls="create"
                aria-selected="false"
              >CREATE AN ACCOUNT</router-link>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <ModalLoginForm />
            <ModalRegisterForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ModalRegisterForm from "@/components/modal/ModalRegisterForm";
import ModalLoginForm from "@/components/modal/ModalLoginForm";

export default {
  components: {
    ModalRegisterForm,
    ModalLoginForm
  }
};
</script>