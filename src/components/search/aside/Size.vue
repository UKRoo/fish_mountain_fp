<template>
    <div class="card z-depth-0 bordered">
    <div class="card-header" id="heading-3">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
          data-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
          SIZE
        </button>
      </h5>
    </div>
    <div id="collapse-3" class="collapse" aria-labelledby="heading-3"
      data-parent="#accordionProductSearch">
      <div class="card-body">
               <div class="custom-control custom-checkbox" v-for="size in sizes" :key="size">
           <input class="custom-control-input" type="checkbox" :id="size">
          <label class="custom-control-label" :for="size">{{ size }}</label>
               </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
   return {
        sizes: [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ]
   } 
   

  },
}
</script>