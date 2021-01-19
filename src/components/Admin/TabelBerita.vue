<template>
  <div>
    <v-card-title>
      Kelola Berita
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="dataset"
        :search="search"
        :loading="loading"
        loading-text="Loading..."
        :expanded.sync="expanded"
        item-key="id"
        show-expand
        class="elevation-1"
        item-class="text-truncate"
    >
        <template v-slot:item.deskripsi="{ item }">
            <span
                class="d-inline-block text-truncate"
                style="max-width: 150px;"
            >
                {{ item.deskripsi }}
            </span>
        </template>


        <template v-slot:item.actions="{ item }">
            <v-btn
                color="primary"
            >
                <v-icon
                    small
                    @click="editNews(item.id)"
                >
                    mdi-pencil
                </v-icon> 
            </v-btn>
            <v-btn
                color="red"
                dark
            >
                <v-icon
                    small
                    @click="deleteBerita(item.id)"
                >
                    mdi-delete
                </v-icon>          
            </v-btn>
        </template>

        <template v-slot:expanded-item="{ headers, item }">
        <div class="row" style="width:600px">
            <div class="col-md-6 pa-4">
                <h4 class="ml-2">Deskripsi</h4>
                <hr>
                <p class="ml-4">{{item.deskripsi}}</p>
            </div>
            <div class="col-md-6 pa-4">
                <div class="d-flex justify-content-center">
                    <img class="card-img-bottom" :src="path + item.file" style="width:200px" alt="Card image">
                </div>
            </div>
        </div>
        </template>
    </v-data-table>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="headline">Edit : {{editData}}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </div>
</template>
<script>

// import {deleteNews, getNewsTable  } from "../../plugins/api";
export default { 

    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    data: () => ({
        path: '/images/',
        editData: '',
        editedItem: {},
        dataset: [],
        dialog: false,
        expanded: [],
        headers : [
            {
                text : "Id",
                value : "id",
                filterable: false,
            },
            {
                text : "Judul Berita",
                value : "judulBerita"
            },
            {
                text : "Deskripsi",
                value : "deskripsi",
            },
            {
                text : "Image file",
                value : "file"
            },
            {
                text : "Created by",
                value : "created_by"
            },
            {
                text : "Created at",
                value : "created_at"
            },
            { 
                text: 'Actions', 
                value: 'actions', 
                sortable: false 
            },
            { text: '', value: 'data-table-expand' },


        ],
        search: '',
    }),
    created() {
        this.loading = true;
        //   getNewsTable().then((response) => {
        //       // console.log(response);
        //       this.dataset = response;
        //   }).catch((err) => console.log(err))
          this.loading = false;
    },
    methods: {
        editNews(item) {
            this.dialog = true;
            this.editData = item
            console.log(item);
        },
        deleteBerita(item) {
            console.log(item);
            // deleteNews(item);
            alert(`${item} telah dihapus`)
        },
        close(){
            this.dialog = false
        },
        
    },
    
}
</script>

<style>

</style>