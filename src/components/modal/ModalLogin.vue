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
              <a
                class="nav-link active"
                id="sign-in-tab"
                data-toggle="tab"
                href="#sign-in"
                role="tab"
                aria-controls="sign-in"
                aria-selected="true"
              >Sign in</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="create-tab"
                data-toggle="tab"
                href="#create"
                role="tab"
                aria-controls="create"
                aria-selected="false"
              >Create an account</a>
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