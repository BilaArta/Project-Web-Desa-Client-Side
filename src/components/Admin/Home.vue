<template>
    <div>
         <v-tabs vertical>
            <v-tab>
                Kelola Berita
            </v-tab>
            <v-tab>
                Input Berita
            </v-tab>
            <v-tab>
                Option 3
            </v-tab>

            <v-tab-item>
                <v-card 
                    flat   
                >
                    <Tableberita ></Tableberita>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card 
                    flat
                    class="pa-4"    
                >
                    <Form></Form>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <div> Option 3</div>
                </v-card>
            </v-tab-item>
         </v-tabs>
    
    </div>


</template>

<script>
import Form from "./InputBerita";
import Tableberita from "./TabelBerita";
import { getUser } from "../../plugins/api";

export default {
    components: {
        Form,
        Tableberita,
    },
    data: () => ({
        dataset: [],
        loading: false,
        admin: {},
    }),
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
.sidenav {
    height: 500px;
    width: 160px;
    position: static;
    padding-top: 20px;
    background-color: #f1f2f6;

}

.sidenav li a {
    text-decoration: none;
    font-size: 16px;
    color: #818181;
    display: block;
}
</style>