<template>
    <div class="card z-depth-0 bordered">
    <div class="card-header" id="heading-6">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
          data-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
          MATERIAL
        </button>
      </h5>
    </div>
    <div id="collapse-6" class="collapse" aria-labelledby="heading-6"
      data-parent="#accordionProductSearch">
      <div class="card-body">

          <div class="custom-control custom-checkbox" v-for="material in materials" :key="material">
           <input class="custom-control-input" type="checkbox" :id="material">
          <label class="custom-control-label" :for="material">{{ material }}</label>
  </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
   return {
        materials: [
    "Leather",
    "Caton",
    "Paper",
    "Straw",
    "Rubber",
  ]
   } 
  },
}
</script>