<template>
        <div>
            <v-form
                ref="form"
                lazy-validation
                @submit.prevent="addNews" 
                method="POST" 
                enctype="multipart/form-data"
            >

                <v-text-field
                    v-model="news.judul"
                    label="Judul Berita"
                    required
                    dense
                >
                </v-text-field>
            
                <v-textarea
                    filled
                    label="Deskripsi"
                    v-model="news.deskripsi"
                ></v-textarea>
                <p class="text-h5">Jenis Berita</p>

                <v-checkbox
                    v-model="news.jenis"
                    label="Sosial"
                    value="0"
                ></v-checkbox>
                <v-checkbox
                    v-model="news.jenis"
                    label="Organisasi"
                    value="1"
                ></v-checkbox>
                <v-checkbox
                    v-model="news.jenis"
                    label="Bansos"
                    value="2"
                ></v-checkbox>
                <hr>
                <v-file-input
                    accept="image/png, image/jpeg, image/jpg"
                    prepend-icon="mdi-camera"
                    label="Input Image png/jpeg/jpg"
                    ref="file"
                    v-on:change="onImageChange"
                ></v-file-input>
                <div class="d-flex justify-content-center" v-if="image">
                    <img :src="image" class="img-responsive" height="240px" width="320px">
                </div>

                <v-btn
                    color="primary"
                    class="mr-4"
                    @click="addNews()"
                >
                Submit
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                >
                Reset Form
                </v-btn>
            </v-form>
        </div>

</template>

<script>
export default {
    data : () => ({
        news: {
            file : "name_file_photo",
            jenis: []
        },
        image : "",
        image_name : "Choose file"
    }),
    methods: {
        addNews() {
            this.news.jenis = 1
            // console.log(this.image);
            // this.news.file = this.image
            console.table(this.news.file);
            let data = new FormData;
            data.append('file', this.news.file);
            data.append('judulBerita', this.news.judul);
            data.append('deskripsi', this.news.deskripsi);
            data.append('jenis', this.news.jenis);
            
            this.axios
                .post(`${process.env.MIX_APP_URL}:8000/api/news`, data)
                .then(response => (
                    // this.$router.push({name: 'home'})
                    console.log(response.data)
                ))
                .catch(error => console.log(error))
                // .finally(() => this.loading = false)
        },
        onImageChange(e) {
            // console.log(e);
            // let files = e.target.File || e.dataTransfer.file;
            this.news.file = e
            // if (!files.length)
            //     return;
            this.createImage(e);
        },
        createImage(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (file) => {
                vm.image = file.target.result;
                vm.image_name = file.name
            };
            reader.readAsDataURL(file);
        },
    }
}
</script>

<style>

.grey {
    background-color: #f1f2f6;
    padding: 24px;
}

.mt {
    margin-top: 24px;
}

div .label {
    margin-left: 8px;
}


.form-check label {
    margin-left: 12px;
}

</style>