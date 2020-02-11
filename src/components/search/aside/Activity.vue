<template>
     <div class="card z-depth-0 bordered">
    <div class="card-header" id="heading-2">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
          data-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
          ACTIVITY
        </button>
      </h5>
    </div>
    <div id="collapse-2" class="collapse" aria-labelledby="heading-2"
      data-parent="#accordionProductSearch">
      <div class="card-body">
                 <div class="custom-control custom-checkbox" v-for="activity in activitys" :key="activity">
           <input class="custom-control-input" type="checkbox" :id="activity">
          <label class="custom-control-label" :for="activity">{{ activity }}</label>
  </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
   return {
        activitys: [
    "activity1",
    "activity2",
    "activity3",
    "activity4",
    "activity5",
  ]
   } 
   

  },
}
</script>

