<template>
    <div>
        <v-row
            v-for="(item, i) in news"
            :key="i"
        >
            <v-col cols="3">

            </v-col>
            <v-col cols="6"  >
                <News :datasets="item" :loading="loading" ></News>
            </v-col>
            <v-col cols="3">

            </v-col>
        </v-row>
            <div class="text-center">
                <v-pagination
                    v-model="pagination.current"
                    :length="pagination.total"
                    @input="onPageChange"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                ></v-pagination>
            </div>
    </div>
</template>

<script>
// import {getNews  } from "../../plugins/api";
import News from "./GetBerita";
export default {
    data : () => ({
        news: [],
        loading: true,
        pagination: {
            current: 1,
            total: 0,
        },
    }),
    methods : {
        onPageChange(){
            this.loading = true
            console.log(this.pagination.current);
            // getNews(this.pagination.current)
            //     .then(data => {
            //         this.pagination.current = data.current_page
            //         this.pagination.total = data.last_page
            //         this.news =  data.data  
            //         this.loading = false
            //     })
            window.scrollTo(0,0);

        }
    },
    created() {
        // getNews(this.pagination.current)
        //     .then(data => {
        //         this.pagination.current = data.current_page
        //         this.pagination.total = data.last_page
        //         this.news =  data.data  
        //         this.loading = false
        //     })
    },
    
    components: {
        News
    },
}
</script>

<style>
.mt {
    margin-top: 12px;
    background-color: #dcdde1;
}

</style>