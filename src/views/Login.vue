<template>
  <v-card class="px-4">
        <v-card-text>
            <v-form ref="loginForm" v-model="valid" lazy-validation>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="loginPassword" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 3 characters" counter @click:append="show1 = !show1"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6" xsm="12">
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                        <v-btn x-large block :disabled="!valid" color="success" @click="validate"> Login </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { login } from "../plugins/api";
export default {
    data: () => ({
        dialog: true,
        valid: true,
        password: "",
        verify: "",
        loginPassword: "",
        loginEmail: "",
        loginEmailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        show1: false,
        rules: {
            required: value => !!value || "Required.",
            min: v => (v && v.length >= 3) || "Min 3 characters"
        },
    }),
    methods: {
        validate() {
            if (this.$refs.loginForm.validate()) {
                console.log(this.loginEmail, this.loginPassword);
                login(this.loginEmail, this.loginPassword)
                    .then((res) => {
                        console.log(res);
                        this.$router.push({name: 'Admin', params: {id: res.id}})
                    })
                    .catch((err) => console.log(err))
            }   
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        }
    },
}
</script>

<style>

</style>