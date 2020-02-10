<template>
  <div>
    <router-link to="#" data-toggle="modal" data-target="#basicRegModal">I have an Account/SIGN IN</router-link>
    <router-link to="#">I want continue as a GUEST</router-link>
  </div>
</template>
<style lang="css" scoped>
div {
  display: flex;
  flex-direction: column;
}
a:first-child {
  padding-top: 70px;
}
a {
  padding-bottom: 31px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.06em;
  text-decoration-line: underline;
  color: #ffa115;
}
</style>