<template>
  <header class="sticky-top">
    <div class="header-top-menu">
      <div class="fs-container flex-sb">
        <div class="fs-search">
          <input class="fs-form-control" type="text" placeholder="Search" aria-label="Search" />
          <i class="fas fa-search active" aria-hidden="true"></i>
        </div>
        <div class="flex-sa top-right-menu">
          <div>+38 (063) 000 00 00</div>
          <div>EN</div>
        </div>
      </div>
    </div>
    <div class="fs-container">
      <div class="categories flex-sa">
        <div>
          <div class="_dropdown">
            <button class="_dropbtn">
              Clothing
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="_dropdown-content">
              <router-link
                v-for="clothing_link in clothing_links"
                :key="clothing_link.url"
                tag="a"
                :to="clothing_link.url"
              >{{clothing_link.title}}</router-link>
            </div>
          </div>
          <div class="_dropdown">
            <button class="_dropbtn">
              Footwear
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="_dropdown-content">
              <router-link
                v-for="footwear_link in footwear_links"
                :key="footwear_link.url"
                tag="a"
                :to="footwear_link.url"
              >{{footwear_link.title}}</router-link>
            </div>
          </div>

          <div class="_dropdown">
            <button class="_dropbtn">
              Equipment
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="_dropdown-content">
              <router-link
                v-for="equipment_link in equipment_links"
                :key="equipment_link.url"
                tag="a"
                :to="equipment_link.url"
              >{{equipment_link.title}}</router-link>
            </div>
          </div>
          <!-- <a href="#footwear">Equipment</a> -->
          <a href="/about-us">About us</a>
        </div>
        <a href="/" id="categories-img">
          <img src="@/assets/img/logo.png" alt="logo" />
          <br />in adventure we trust
        </a>
        <div>
          <a href="/women">Women</a>
          <a href="/man">Men</a>
          <a href="/kids">Kids</a>
          <a href="/sale">
            <b>Sale</b>
          </a>
          <a href="/contact">Contact us</a>
        </div>
      </div>
      <ModalBlock />
    </div>
  </header>
</template>

<script>
import ModalBlock from "@/components/modal/ModalBlock";

export default {
  components: {
    ModalBlock
  },
  data: () => ({
    clothing_links: [
      { title: "All clothing", url: "/clothing" },
      { title: "Coats & Jackets", url: "/clothing/coats-jackets" },
      { title: "T-Shirts & Singlets", url: "/clothing/t-shirts-singlets" },
      { title: "Tops", url: "/clothing/tops" },
      { title: "Bottoms", url: "/clothing/bottoms" },
      { title: "Swimwear", url: "/clothing/swimwear" },
      { title: "See More...", url: "/clothing" }
    ],
    footwear_links: [
      { title: "All footwear", url: "/footwear" },
      { title: "Trekking footwear", url: "/footwear/trekking" },
      { title: "Hiking shoes", url: "/footwear/hiking-shoes" },
      { title: "Winter boots", url: "/footwear/winter-boots" },
      { title: "Multifunctional shoes", url: "/footwear/multifunctional-shoes" },
      { title: "Leisure shoes", url: "/footwear/leisure-shoes" },
      { title: "See More...", url: "/footwear" },
    ],
    equipment_links: [
      { title: "All Equipment", url: "/equipment" },
      { title: "Camping & Fishing", url: "/equipment/camping-fishing" },
      { title: "Exercise & Fitness", url: "/equipment/exercise-fitness" },
      { title: "Swimming & Water Sports", url: "/equipment/swimming-water-sports" },
      { title: "Hiking & Trekking", url: "/equipment/hiking-trekking" },
      { title: "See More...", url: "/equipment" },
    ]
  })
};
</script>

