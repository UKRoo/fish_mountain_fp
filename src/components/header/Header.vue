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
      <div class="categories fs-flex-center">
        <div>
          <div class="_dropdown">
            <button class="_dropbtn">
              Clothing
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="_dropdown-content">
              <router-link
                v-for="clothing_link in clothing_links"
                :key="clothing_link.title"
                tag="a"
                :to="`/ct/${clothing_link.cat}/${clothing_link.subcat}`"
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
                :key="footwear_link.title"
                tag="a"
                :to="`/ct/${footwear_link.cat}/${footwear_link.subcat}`"
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
                :key="equipment_link.title"
                tag="a"
                :to="`/ct/${equipment_link.cat}/${equipment_link.subcat}`"
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
          <a href="/ct/women/">Women</a>
          <a href="/ct/man/">Men</a>
          <a href="/ct/kids/">Kids</a>
          <a href="/ct/sale/">
            <b>Sale</b>
          </a>
          <a href="/contact/">Contact us</a>
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
      { title: "All clothing", cat: "clothing", subcat: "" },
      { title: "Coats & Jackets", cat: "clothing", subcat: "coats-jackets" },
      {
        title: "T-Shirts & Singlets",
        cat: "clothing",
        subcat: "t-shirts-singlets"
      },
      { title: "Tops", cat: "clothing", subcat: "tops" },
      { title: "Bottoms", cat: "clothing", subcat: "bottoms" },
      { title: "Swimwear", cat: "clothing", subcat: "swimwear" }
      // { title: "See More...", cat: "/clothing" }
    ],
    footwear_links: [
      { title: "All footwear", cat: "footwear", subcat: "" },
      { title: "Trekking footwear", cat: "footwear", subcat: "trekking" },
      { title: "Hiking shoes", cat: "footwear", subcat: "hiking-shoes" },
      { title: "Winter boots", cat: "footwear", subcat: "winter-boots" },
      {
        title: "Multifunctional shoes",
        cat: "footwear",
        subcat: "multifunctional-shoes"
      },
      { title: "Leisure shoes", cat: "footwear", subcat: "leisure-shoes" }
      // { title: "See More...", cat: "/footwear" },
    ],
    equipment_links: [
      { title: "All Equipment", cat: "equipment", subcat: "" },
      {
        title: "Camping & Fishing",
        cat: "equipment",
        subcat: "camping-fishing"
      },
      {
        title: "Exercise & Fitness",
        cat: "equipment",
        subcat: "exercise-fitness"
      },
      {
        title: "Swimming & Water Sports",
        cat: "equipment",
        subcat: "swimming-water-sports"
      },
      {
        title: "Hiking & Trekking",
        cat: "equipment",
        subcat: "hiking-trekking"
      }
      // { title: "See More...", cat: "/equipment" },
    ]
  })
};
</script>

