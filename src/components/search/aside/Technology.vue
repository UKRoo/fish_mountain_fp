<template>
    <div class="card z-depth-0 bordered">
    <div class="card-header" id="heading-7">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
          data-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
          TECHNOLOGY
        </button>
      </h5>
    </div>
    <div id="collapse-7" class="collapse" aria-labelledby="heading-7"
      data-parent="#accordionProductSearch">
      <div class="card-body">
               <div class="custom-control custom-checkbox" v-for="technology in technologys" :key="technology">
           <input class="custom-control-input" type="checkbox" :id="technology">
          <label class="custom-control-label" :for="technology">{{ technology }}</label>
  </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
   return {
        technologys: [
    "technology1",
    "technology2",
    "technology3",
    "technology4",
    "technology5",
  ]
   } 
  },
}
</script>