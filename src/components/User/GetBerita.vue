<template>
  <div>
        <v-skeleton-loader
            type="article, card-image"
            :loading="loading"
            class="mb-4"
        >
            <v-card
                elevation="4"
                outlined
                class="pa-4"
            >
                <v-card-title>
                    {{datasets.judul}}
                </v-card-title>
                <v-card-subtitle>
                    {{datasets.jenis}}
                </v-card-subtitle>
                <hr class="mt-n3 mb-n2">
                <v-card-text>
                    <span>{{getDate[0]}} : {{getDate[1]}}</span>
                    <br>
                    <span class="black--text">
                        {{datasets.deskripsi}}
                    </span>
                </v-card-text>
                <v-img
                    height="auto"
                    width="auto"
                    :src="path + datasets.file"
                    alt="Card image"
                >
                </v-img>
            </v-card>
        </v-skeleton-loader>
  </div>
</template>

<script>
export default {
    props: ['datasets', 'loading'],
    data : () => ({
        path: process.env.VUE_APP_IMAGE,
    }),
    computed: {
        getDate:{
            get: function (){
                if(this.datasets.created_at != null){
                    let date = this.datasets.created_at.split('T')
                    let time = date[1].slice(3,8)
                    date = date[0]
                    return [date, time]
                }
                return [null]
            }
        }   
    },
}
</script>

<style>

</style>