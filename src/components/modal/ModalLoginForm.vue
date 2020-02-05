<template>
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
                    <router-link to="" style="font-size: 14px;">Forgotten your password?</router-link>
                  </div>
                </div>

                <!-- Sign in button -->
                <button class="btn btn-primary btn-block my-4" type="submit">Sign in</button>
                <button class="btn btn-primary btn-block my-4" type="submit">LOGIN
                  WITH FACEBOOK</button>

                <!-- Register -->
                <p>Not a member?
                  <router-link to="">Register</router-link>
                </p>

                <!-- Social login -->

              </form>
              <!-- Default form login -->
            </div>
</template>