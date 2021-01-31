<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <!-- {{surat}} -->
          Cetak
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Cetak surat {{surat}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                      v-model="keterangan"
                      filled
                      outlined
                      label="Keterangan cetak surat"
                      type="text"
                      required
                    ></v-text-field>
                </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="error"
            text
            @click="dialog = false"
          >
            Batal
          </v-btn>
          <v-btn
            class="primary"
            button
            @click="sendMail(surat)"
          >
            Cetak
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { sendMail } from "../../../plugins/api";
export default {
    props: ["surat"],
    data : () => ({
        dialog: false,
        keterangan: '',
       
    }),
    methods : {
      sendMail(surat){
        let data = new FormData;
        data.append('keterangan', this.keterangan)
        data.append('id',this.$route.params.id)
        data.append('subjek',surat)
        sendMail(data).then(result => console.log(result))
          .catch(err => console.log(err))
      }
    },
}
</script>

<style>

</style>