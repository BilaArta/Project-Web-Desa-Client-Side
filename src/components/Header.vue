<template>
    <header>
        <v-app-bar
            color="red"
            dense
            dark
        >
            <v-app-bar-nav-icon>LOGO</v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title>WEBSITE DESA TIBUBIU</v-toolbar-title>

            <v-spacer></v-spacer>
                <router-link to="/surat">
                    <v-btn
                        v-if="!token"
                        elevation="4"
                        small
                        tile
                        class="mr-2 ml-2 black--text"
                        color="grey lighten-4"
                    >
                        Cetak Surat
                    </v-btn>
                </router-link>

                <v-btn
                    v-if="!token"
                    elevation="4"
                    small
                    tile
                    class="mr-2 ml-2 black--text"
                    color="grey lighten-4"
                >
                    Menu - 2                
                </v-btn>
                <v-btn
                    v-if="token"
                    elevation="4"
                    small
                    tile
                    class="mr-2 ml-2 black--text"
                    color="grey lighten-4"
                    @click="logout"
                >
                    Logout                
                </v-btn>
        </v-app-bar>
    </header>
</template>

<script>
import { logout } from "../plugins/api";
export default {
    props:['updateToken', 'token'],
    watch: {

    },
    data: () => ({

    }),
    methods: {
        logout(){
            logout()
            this.$emit('updateToken', false)
        }
    }
    
}
</script>

<style>

</style>