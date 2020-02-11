<template>
  <div class="fs-container product-view-tab-info">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="description-tab"
          data-toggle="tab"
          href="#description"
          role="tab"
          aria-controls="description"
          aria-selected="true"
          >DESCRIPTION</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="details-tab"
          data-toggle="tab"
          href="#details"
          role="tab"
          aria-controls="details"
          aria-selected="false"
          >DETAILS</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="advantages-tab"
          data-toggle="tab"
          href="#advantages"
          role="tab"
          aria-controls="advantages"
          aria-selected="false"
          >ADVANTAGES</a
        >
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="description"
        role="tabpanel"
        aria-labelledby="description-tab"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div
        class="tab-pane fade"
        id="details"
        role="tabpanel"
        aria-labelledby="details-tab"
      >
        <div class="fs-details-tab">
          <div>
            <p><b>Brand</b></p>
            <p><b>Fabric</b></p>
            <p><b>Care</b></p>
            <p><b>Guarantee</b></p>
          </div>
          <div>
            <p>The North Face</p>
            <p>100% Polyester Jacquard</p>
            <p>Machine Wash</p>
            <p>Lifetime Warranty</p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="advantages"
        role="tabpanel"
        aria-labelledby="advantages-tab"
      >
        <div class="fs-advantages-det">
          <div class="adv-det">
            <img :src="`/img/skiing.png`" />
            <p>Skiing</p>
          </div>
          <div class="adv-det">
            <img :src="`/img/snowboarding.png`" />
            <p>Snowboarding</p>
          </div>
          <div class="adv-det">
            <img :src="`/img/waterproof.png`" />
            <p>Waterproof</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>-
<style lang="scss" scoped>
.fs-advantages-det {
  display: flex;
  justify-content: center;
  .adv-det {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 19px;
    margin-bottom: 98px;
    p {
      margin-top: 26px;
      font-family: Muli;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      letter-spacing: 0.06em;
      text-transform: capitalize;
      color: #302640;
    }
  }
}
.fs-details-tab {
  display: flex;
  b {
    margin-right: 45px;
  }
  p {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-transform: capitalize;
    color: #302640;
  }
}
.tab-pane {
  margin-left: 15px;
  margin: 75px 15px 75px 15px;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.06em;

  color: #000000;
}

.product-view-tab-info {
  height: 392px;
  background-color: #f8f8f8;
  padding-bottom: 79px;
  margin-bottom: 84px;
  a {
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-transform: capitalize;
    color: #302640;
  }
}
</style>
