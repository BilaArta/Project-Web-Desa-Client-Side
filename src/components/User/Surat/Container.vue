<template>
    <div
        class="ma-4"
    >
    <v-card
        dense
        tile
        v-for="(item, i) in surats"
        :key="i"
        class="pa-4"
    >
        <Modal :surat="item"></Modal>
    </v-card>
    </div>
</template>

<script>
import Modal from "./Form";
export default {
    components: {
        Modal
    },
    data : () => ({
        surats : ["Surat-A", "Surat-B", "Surat-C"]
    })
}
</script>

<style>

</style>