<template>
  <div>
    <v-toolbar dark prominent color="success">
      
      <v-toolbar-title>Animales Prehistoricos de Latinoamerica</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/Inicio"><v-btn>Inicio</v-btn></router-link>
      <router-link to="/Especies"><v-btn>Especies</v-btn></router-link>
      <router-link to="/Contacto"><v-btn>Contacto</v-btn></router-link>
    </v-toolbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Navbar",
};
</script>
