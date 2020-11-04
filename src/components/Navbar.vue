<template>
  <div class="navbar">
    <v-toolbar dark prominent color="success">
      
      <v-toolbar-title>Animales Prehistoricos de Latinoamerica</v-toolbar-title>

      <v-spacer></v-spacer>

<div class="botones">
<router-link to="/"><v-btn>Inicio</v-btn></router-link>
      <router-link to="/Especies"><v-btn>Especies</v-btn></router-link>
      <router-link to="/Contacto"><v-btn>Contacto</v-btn></router-link>
      <router-link to="/Login"><v-btn>Login</v-btn></router-link>
</div>
      
     
    </v-toolbar>
  </div>
</template>

<script>
// @ is an alias to /src 

export default {
  name: "Navbar",
};
</script>


<style lang="scss">
.v-toolbar__content{

height: 100px !important ;
}

.botones{

display: flex;
}

</style>

