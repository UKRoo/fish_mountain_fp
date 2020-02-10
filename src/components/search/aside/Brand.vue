<template>
    <div class="card z-depth-0 bordered">
    <div class="card-header" id="heading-8">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
          data-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
          BRAND
        </button>
      </h5>
    </div>
    <div id="collapse-8" class="collapse" aria-labelledby="heading-8"
      data-parent="#accordionProductSearch">
      <div class="card-body">
               <div class="custom-control custom-checkbox" v-for="brand in brands" :key="brand">
           <input class="custom-control-input" type="checkbox" :id="brand">
          <label class="custom-control-label" :for="brand">{{ brand }}</label>
  </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data: function() {
   return {
        brands: [
    "Nike",
    "Alias",
    "Paper",
    "Same",
    "Red",
  ]
   } 
  },
}
</script>