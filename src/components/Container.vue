<template>
  <v-app>
        <Header :token="token" @updateToken="checkToken"></Header>
        <main>
            <v-container fluid>
                <router-view  @updateToken="checkToken"></router-view>
            </v-container>
        </main>
        <Footer></Footer>
    </v-app>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import { getUser } from "../plugins/api";
export default {
    components: {
    Header, 
    Footer
  },
  data: () => ({
    token : false,
  }),
  methods: {
    checkToken(){
      if(localStorage.getItem('token')){
          getUser().then((res) => {
            console.log(res);
            if(!res.error){
              this.token = true
            }else{
              this.token = false
            }
            console.log(this.token);
          })
            .catch((err)=> {
              console.log(err);
              this.token = false
            })
      }
    }
  },
  watch: {
    token(){
      if(this.token == false){
        this.$router.push({name: 'Admin'})
      }
    }
  },
}
</script>

<style>

</style>