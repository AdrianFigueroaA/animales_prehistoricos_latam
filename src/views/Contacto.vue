<template>
<v-container>
<v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Correo"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>


    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Enviar
    </v-btn>

  </v-form>
</v-container>

  
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "El Nombre debe Tener Menos de 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "Por Favor Ingrese su Correo",
    ],
    
    
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
   
  },
};
</script>
