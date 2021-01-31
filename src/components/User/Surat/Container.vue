<template>
    <v-row>
        <v-col
            dense
            tile
            v-for="(item, i) in surats"
            :key="i"
            class="pa-4 card-hover"
            cols="12"
            md="4"
        >
            <v-card
                class="pa-4"
                elevation="4"
                outlined
                min-height="200px"
            >
                <v-card-text>
                    <p class="title text-center">{{item}}</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel libero sed arcu iaculis accumsan. In.
                </v-card-text>
                <v-card-actions>
                    <Modal :surat="item"></Modal>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
</template>

<script>
import Modal from "./Form";
export default {
    components: {
        Modal
    },
    data : () => ({
        surats : ["Surat-A", "Surat-B", "Surat-C", "Surat-D", "Surat-E", "Surat-F", "Surat-G", "Surat-H", "Surat-I"]
    })
}
</script>

<style>

.card-hover .v-card:hover {
    background-color: #f5f6fa;
}

</style>