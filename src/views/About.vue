<template>
<div>

  <h1>about page</h1>
  <v-btn @click="checkUser">test</v-btn>
</div>
</template>

<script>

import { getUser } from "../plugins/api";
export default {
  data: () => ({
    isLoggedin : false,
  }),
  mounted() {
    // console.log(localStorage.getItem('token'));
  },
  created(){
    if(!localStorage.getItem('token')){
      this.$router.push({name: "Home"})
    }
  },
  methods: {
    checkUser(){
      getUser().then((res) => console.log(res))
    }
  }
}
</script>

<style>

</style>