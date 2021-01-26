<template>
<v-row>
    <v-col
        cols="3"
    >
    </v-col>
    <v-col
        cols="6"
    >
        <v-card class="pa-4" tile>
            <v-form>
                <p class="subtitle-1">Masukkan NIK sesuai dengan KTP anda :</p>
                <v-text-field 
                    v-model="nik" 
                    :rules="rules" 
                    label="NIK" 
                    required
                    maxlength=16
                >
                </v-text-field>
                <v-card-actions class="justify-center">
                    <v-btn 
                        large 
                        color="primary" 
                        @click="submit"
                    > Login </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-col>
    <v-col
        cols="3"
    >
    </v-col>
</v-row>
</template>

<script>
import { checkWarga } from "../../../plugins/api";
export default {
    data: () => ({
        nik : "",
        rules: [
            value => !!value || "Required.",
            v => (v && v.length == 16) || "Jumlah NIK 16 karakter"
        ],
    }),
    methods: {
        submit(){
            
            checkWarga({'nik' : this.nik})
                .then((res) => {
                    this.$router.push({name: "Cetak surat",params: {id: res.id, nama: res.name}})
                })
                .catch(err => {
                    alert("Status code ["+err.response.status+"] : "+err.response.data.msg)
                })
        }
    }

}
</script>

<style>

</style>