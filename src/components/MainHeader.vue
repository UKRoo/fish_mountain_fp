<template>
      <header class="sticky-top">
    <div class="header-top-menu">
      <div class="fs-container flex-sb">
        <div class="fs-search">
          <input class="fs-form-control" type="text" placeholder="Search" aria-label="Search">
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
            <button class="_dropbtn">Clothing
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="_dropdown-content">
              <a href="#">All clothing</a>
              <a href="#">Coats & Jackets</a>
              <a href="#">T-Shirts & Singlets</a>
              <a href="#">Tops</a>
              <a href="#">Bottoms</a>
              <a href="#">Swimwear</a>
              <a href="#">See More...</a>

            </div>
          </div>
          <div class="_dropdown">
            <button class="_dropbtn">Footwear
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="_dropdown-content">
              <a href="#">All footwear</a>
              <a href="#">Trekking footwear</a>
              <a href="#">Hiking shoes</a>
              <a href="#">Winter boots</a>
              <a href="#">Multifunctional shoes</a>
              <a href="#">Leisure shoes</a>
              <a href="#">See More...</a>

            </div>
          </div>

          <div class="_dropdown">
            <button class="_dropbtn">Equipment
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="_dropdown-content">
              <a href="#">All Equipment</a>
              <a href="#">Camping & Fishing</a>
              <a href="#">Exercise & Fitness</a>
              <a href="#">Swimming & Water Sports</a>
              <a href="#">Hiking & Trekking</a>
              <a href="#">See More...</a>

            </div>
          </div>
          <!-- <a href="#footwear">Equipment</a> -->
          <a href="#footwear">About us</a>
        </div>
        <a href="#" id="categories-img"><img src="@/assets/img/logo.png" alt="logo"><br>in adventure we trust</a>
        <div>
          <a href="#women">Women</a>
          <a href="#men">Men</a>
          <a href="#kids">Kids</a>
          <a href="#sale"><b>Sale</b></a>
          <!-- <a href="#"> </a> -->
          <!-- <a href="#footwear">us</a> -->
        </div>
      </div>
      <div class="flex-end icons">
        <a href="#" data-toggle="modal" data-target="#modalCart"><i class="fas fa-shopping-bag"></i></a>
        <a href="#" data-toggle="modal" data-target="#modalWish"><i class="far fa-heart"></i></a>
        <a href="#" data-toggle="modal" data-target="#basicRegModal"><i class="far fa-user"></i></a>
      </div>
    </div>
  </header>
</template>