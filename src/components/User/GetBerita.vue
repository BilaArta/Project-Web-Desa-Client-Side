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
                <hr>
                <v-card-text>
                    {{getDate[0]}} - {{datasets.deskripsi}}
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
        created_at: '',
        time: '',
    }),

    created:  function() {

    },
    computed: {
        getDate:{
            get: function (){
                if(this.datasets.created_at != null){
                    return this.datasets.created_at.split('T')
                }
                return [null]
            }
        }
        
    }
}
</script>

<style>

</style>