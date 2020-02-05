<template>
  <div class="fs-container product-view-tab-info">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <router-link
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          to="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >DESCRIPTION</router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          id="profile-tab"
          data-toggle="tab"
          to="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >DETAILS</router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          id="contact-tab"
          data-toggle="tab"
          to="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >ADVANTAGES</router-link>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        Raw denim you
        probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master
        cleanse. Mustache cliche tempo
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        Food truck fixie
        locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,
        blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
        Qui photo booth letterpress, commodo enim craft beer mlkshk
      </div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        Etsy mixtape
        wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack
        lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy
      </div>
    </div>
  </div>
</template>