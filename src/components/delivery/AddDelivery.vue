<template>
  <div class="address-wrap">
    <div class="address-row">
      <div class="address-col">
        <label for="first_name">First Name *</label>
        <input type="text" id="first_name" class="form-control" />
      </div>
      <div class="address-col">
        <label for="last_name">Last Name *</label>
        <input type="text" id="last_name" class="form-control" />
      </div>
    </div>
    <div class="address-row">
      <div class="address-col">
        <label for="phone">Phone *</label>
        <input type="tel" id="phone" class="form-control" />
      </div>
      <div class="address-col"></div>
    </div>
    <div class="address-row">
      <div class="address-col">
        <label for="address">Address *</label>
        <input type="text" id="address" class="form-control" />
      </div>
    </div>
    <div class="address-row">
      <div class="address-col">
        <label for="city">City *</label>
        <input type="text" id="city" class="form-control" />
      </div>
      <div class="address-col">
        <label for="country">Country *</label>
        <input type="text" id="country" class="form-control" />
      </div>
    </div>
    <div class="address-row">
      <div class="address-col">
        <label for="zip">ZIP Code *</label>
        <input type="tel" id="zip" class="form-control" />
      </div>
      <div class="address-col"></div>
    </div>
    <div class="address-row">
      <div class="address-col"></div>
      <div class="address-row">
          <router-link to="/" tag="button" class="btn btn-outline-primary">CANCEL</router-link>
          <router-link tag="button" to="/payment"  class="btn btn-primary">GO TO PAYMENT</router-link>
          </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
button{
    margin: 8.5px;
}
.address-wrap {
  display: flex;
  flex-direction: column;
}
.address-row {
  display: flex;
  justify-content: space-between;
}
.address-col {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 50%;
  margin: 16px;
}
</style>
