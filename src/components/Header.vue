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
                <router-link to="/berita">
                    <v-btn
                        elevation="4"
                        small
                        tile
                        class="mr-2 ml-2 black--text"
                        color="grey lighten-4"
                    >
                        Menu - 1
                    </v-btn>
                </router-link>

                <v-btn
                    elevation="4"
                    small
                    tile
                    class="mr-2 ml-2 black--text"
                    color="grey lighten-4"
                >
                    Menu - 2                
                </v-btn>
        </v-app-bar>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>