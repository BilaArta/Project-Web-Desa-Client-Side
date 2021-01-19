<template>
  <div>
        <v-skeleton-loader
            type="article, card-image"
            :loading="loading"
        >
            <v-card
                elevation="4"
                outlined
                class="pa-4"
            >
                <v-card-title>
                    {{datasets.judulBerita}}
                </v-card-title>
                <v-card-subtitle>
                    {{getDate[0]}}
                </v-card-subtitle>
                <v-card-text>
                    {{datasets.deskripsi}}
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
        path: '/images/',
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