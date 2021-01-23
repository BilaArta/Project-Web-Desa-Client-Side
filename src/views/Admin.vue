<template>
    <Home></Home>
</template>

<script>
import  Home  from "../components/Admin/Home";
import { getUser } from "../plugins/api";
export default {
    props: ['updateToken'],
    components: {
        Home
    },
    mounted(){
        getUser().then((res) => {
            if(res.error == "Unauthorized"){
                this.$router.push({name: 'Admin'})
            }else{
                this.$emit('updateToken', true)
            }
        })
    }
}
</script>

<style>

</style>