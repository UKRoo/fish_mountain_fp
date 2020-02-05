<template>
  <div class="tab-pane fade" id="create" role="tabpanel" aria-labelledby="create-tab">
    <form class="text-center border border-light p-5" action="#!">
      <!-- First name -->
      <input
        type="text"
        id="defaultRegisterFormFirstName"
        class="form-control mb-4"
        placeholder="First name"
      />
      <!-- Last name -->
      <input
        type="text"
        id="defaultRegisterFormLastName"
        class="form-control mb-4"
        placeholder="Last name"
      />
      <!-- E-mail -->
      <input
        type="email"
        id="defaultRegisterFormEmail"
        class="form-control mb-4"
        placeholder="E-mail"
      />
      <!-- Password -->
      <input
        type="password"
        id="defaultRegisterFormPassword"
        class="form-control"
        placeholder="Password"
        aria-describedby="defaultRegisterFormPasswordHelpBlock"
      />
      <small
        id="defaultRegisterFormPasswordHelpBlock"
        class="form-text text-muted mb-4"
      >At least 8 characters and 1 digit</small>
      <!-- terms -->
      <div class="custom-control custom-checkbox text-left">
        <input type="checkbox" class="custom-control-input" id="defaultPrivacyPolicy" />
        <label class="custom-control-label fs-custom-control-label" for="defaultPrivacyPolicy">
          I agree with Fish Mountain Terms and
          Conditions
          and
          <router-link to="#" target="_blank">Privacy Policy</router-link>
        </label>
      </div>
      <!-- Newsletter -->
      <div class="custom-control custom-checkbox text-left">
        <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter" />
        <label
          class="custom-control-label fs-custom-control-label"
          for="defaultRegisterFormNewsletter"
        >
          Subscribe to our
          newsletter
        </label>
      </div>
      <!-- Sign up button -->
      <button class="btn btn-primary my-4 btn-block mt-mb-5" type="submit">CREATE AN ACCOUNT</button>
      <p>or</p>
      <button class="btn btn-primary my-4 btn-block mt-mb-5" type="submit">REGISTER WITH FACEBOOK</button>
    </form>
  </div>
</template>