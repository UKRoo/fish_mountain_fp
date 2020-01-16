<template>
    <section class="modal-login">

    <!-- Modal-login -->
    <div class="modal fade" id="basicRegModal" tabindex="-1" role="dialog" aria-labelledby="basicRegModal"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <ul class="nav nav-tabs  nav-justified" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="sign-in-tab" data-toggle="tab" href="#sign-in" role="tab"
                aria-controls="sign-in" aria-selected="true">SIGN IN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="create-tab" data-toggle="tab" href="#create" role="tab" aria-controls="create"
                aria-selected="false">CREATE AN ACCOUNT</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="sign-in" role="tabpanel" aria-labelledby="sign-in-tab">
              <!-- Default form login -->
              <form class="text-center border border-light p-5" action="#!">

                <p class="h4 mb-4">Sign in</p>

                <!-- Email -->
                <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">

                <!-- Password -->
                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">

                <div class="d-flex justify-content-around">
                  <div>
                    <!-- Remember me -->
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                      <label class="custom-control-label fs-login-fon" for="defaultLoginFormRemember">Remember me</label>
                    </div>
                  </div>
                  <div>
                    <!-- Forgot password -->
                    <a href="" style="font-size: 14px;">Forgotten your password?</a>
                  </div>
                </div>

                <!-- Sign in button -->
                <button class="btn btn-primary btn-block my-4" type="submit">Sign in</button>
                <button class="btn btn-primary btn-block my-4" type="submit">LOGIN
                  WITH FACEBOOK</button>

                <!-- Register -->
                <p>Not a member?
                  <a href="">Register</a>
                </p>

                <!-- Social login -->

              </form>
              <!-- Default form login -->
            </div>
            <div class="tab-pane fade" id="create" role="tabpanel" aria-labelledby="create-tab">
              <!-- Default form register -->
              <form class="text-center border border-light p-5" action="#!">





                <!-- First name -->
                <input type="text" id="defaultRegisterFormFirstName" class="form-control mb-4" placeholder="First name">


                <!-- Last name -->
                <input type="text" id="defaultRegisterFormLastName" class="form-control mb-4" placeholder="Last name">





                <!-- E-mail -->
                <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">

                <!-- Password -->
                <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password"
                  aria-describedby="defaultRegisterFormPasswordHelpBlock">
                <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                  At least 8 characters and 1 digit
                </small>

                <!-- terms -->
                <div class="custom-control custom-checkbox text-left">
                  <input type="checkbox" class="custom-control-input" id="defaultPrivacyPolicy">
                  <label class="custom-control-label fs-custom-control-label" for="defaultPrivacyPolicy">I agree with Fish Mountain Terms and
                    Conditions
                    and <a href="#" target="_blank">Privacy Policy</a></label>
                </div>
                <!-- Newsletter -->
                <div class="custom-control custom-checkbox text-left">
                  <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
                  <label class="custom-control-label fs-custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our
                    newsletter</label>
                </div>

                <!-- Sign up button -->
                <button class="btn btn-primary my-4 btn-block mt-mb-5" type="submit">CREATE AN ACCOUNT</button>
                <p>or</p>
                <button class="btn btn-primary my-4 btn-block mt-mb-5" type="submit">REGISTER WITH FACEBOOK</button>


              </form>
              <!-- Default form register -->
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>