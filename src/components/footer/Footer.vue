<template>
    <footer>
    <div class="fs-footer-left">
      <div class="flex-sb footer-content">
        <ul>
          <h3>LINKS</h3>
          <router-link to="/">
            <li>Home</li>
          </router-link>
          <router-link to="/ct/">
            <li>Categories</li>
          </router-link>
          <router-link to="#">
            <li>Viewed & liked</li>
          </router-link>
          <router-link to="#">
            <li>About us</li>
          </router-link>
          <router-link to="/contact/">
            <li>Contacts</li>
          </router-link>
        </ul>
        <ul>
          <h3>CONTACTS</h3>
          <li>26 Soborna Street<br>Vinnytsia</li>
          <li>+38 (063) 000 00 00</li>
          <li>+38 (063) 000 00 00</li>
        </ul>
      </div>
    </div>
    <div class="fs-footer-right">
      <h3>SUBSCRIBE</h3>
      <p>Enter your e-mail adress to recive our news and keep youself updated</p>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control" type="subscribe" placeholder="mail@gmail.com" aria-label="Subscribe">
        <button class="btn btn-primary waves-effect waves-light" type="submit">SEND</button>
      </form>
    </div>
  </footer>
</template>