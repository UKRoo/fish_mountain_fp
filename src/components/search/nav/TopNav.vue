<template>
  <div class="product-nav fs-container">
    <ol>
      <router-link :to="`/`">
        <li>Fish Mountain /</li>
      </router-link>
      <router-link
        tag="a"
        :to="`/ct/${link}`"
        v-for="link in catalogLinks"
        :key="link"
      >
        <li v-if="link.length > 0">{{ link }} /</li>
      </router-link>
    </ol>
    <div class="flex-sb">
      <div>
        <button type="button" class="btn btn-outline-primary">
          BESTSELLERS
        </button>
        <button type="button" class="btn btn-outline-primary">PREMIUM</button>
        <button type="button" class="btn btn-outline-primary">SALE</button>
      </div>
      <div>
        <p>SORT BY <i class="fas fa-chevron-down"></i></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    catalogLinks() {
      return this.$route.params.pathMatch.split("/");
    }
  }
};
</script>
<style lang="scss" scoped>
ol {
  padding: 0;
}
li {
  text-transform: capitalize;
}
a {
  li:last-child {
    font-weight: bold;
    text-decoration: none;
  }
}
button {
  margin: 35px 35px 35px 0;
}
p {
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.06em;
  color: #302640;
  cursor: pointer;
  margin-top: 35px;
  margin-bottom: 35px;
}
</style>
