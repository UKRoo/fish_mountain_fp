<template>
    <section>
    <div class="btn-group-vertical fs-social-btn" role="group" aria-label="Vertical button group">
      
      <router-link to="">&nbsp;</router-link>
      <router-link to=""><i class="fab fa-instagram"></i></router-link>
      <router-link to=""><i class="fab fa-facebook-f"></i></router-link>
      <router-link to=""><i class="fas fa-map-marker-alt"></i></router-link>
      <router-link to=""><i class="fab fa-telegram-plane"></i></router-link>
      <router-link to=""><i class="fab fa-youtube"></i></router-link>
    </div>
    <div id="first-screen"></div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/img/first-screen-bg-2.jpg" class="d-block w-100" alt="Banner">
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/first-screen-bg-1.jpg" class="d-block w-100" alt="Banner">
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/first-screen-bg-3.jpg" class="d-block w-100" alt="Banner">
        </div>
      </div>
    </div>
    <div class="flex-sa fs-container-btn"><button type="button" class="btn btn-primary">DISCOVER NOW</button></div>
  </section>
</template>