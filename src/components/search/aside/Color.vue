<template>
     <div class="card z-depth-0 bordered">
    <div class="card-header" id="heading-4">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
          data-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
          COLOR
        </button>
      </h5>
    </div>
    <div id="collapse-4" class="collapse" aria-labelledby="heading-4"
      data-parent="#accordionProductSearch">
      <div class="card-body">
               <div class="custom-control custom-checkbox" v-for="color in colors" :key="color">
           <input class="custom-control-input" type="checkbox" :id="color">
          <label class="custom-control-label" :for="color">{{ color }}</label>
  </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
   return {
        colors: [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
  ]
   } 
  },
}
</script>