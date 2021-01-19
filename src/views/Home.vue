<template>
    <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <div>
            <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-4" icons-and-text dark grow>
                <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                <v-tab v-for="(i, index) in tabs" :key="index">
                    <v-icon large>{{ i.icon }}</v-icon>
                    <div class="caption py-1">{{ i.name }}</div>
                </v-tab>
                <v-tab-item>
                    <Login></Login>
                </v-tab-item>
                <v-tab-item>
                    <Register></Register>
                </v-tab-item>
            </v-tabs>
        </div>
    </v-dialog>
</template>


<script>

import Login from "./Login";
import Register from "./Register";

export default {
  components: {
      Login, 
      Register,
  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
        {name:"Login", icon:"mdi-account"},
        {name:"Register", icon:"mdi-account-outline"}
    ],
  })
}
</script>