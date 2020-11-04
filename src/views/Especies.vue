<template>
  <v-container class="grey lighten-5">
    <v-row :align="align" style="height: 200px;">
      <v-col v-for="(dino, i) in dinosaurios" :key="i" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img :src="dino.imagen" height="200px"></v-img>
          <v-card-title>{{ dino.nombre }}</v-card-title>

          <v-card-text class="text--primary">
            <div>{{ dino.nombre }}</div>

            <div>info por definir</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>
              Compartir
            </v-btn>

            <v-btn color="orange" text v-bind="attrs" v-on="on">
              Quieres Saber Mas?
            </v-btn>

           
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Modal from "../components/Modal";
export default {
  name: "Especies",

  components: {
    Modal,
  },

  data: () => ({
    alignments: ["start", "center", "end"],
    dinosaurios: [
      {
        id: 1,
        nombre: "Chilesaurus",
        imagen:
          "https://images.dinosaurpictures.org/Chilesaurus/image_2739_1e-Chilesaurus-diegosuarezi_26b4.jpg",
      },
      {
        id: 2,
        nombre: "Carnotaurus",
        imagen:
          "https://images.dinosaurpictures.org/Carnotaurus-Brett-Booth-2_5861.jpg",
      },
      {
        id: 3,
        nombre: "Austroraptor",
        imagen:
          "https://images.dinosaurpictures.org/Austroraptor_by_dyingquasar-d4h8gwg_057b.jpg",
      },
      {
        id: 4,
        nombre: "atacamatitan",
        imagen:
          "https://images.dinosaurpictures.org/atacamatitan_2_by_highdarktemplar-d6ntup6_14ad.jpg",
      },
      {
        id: 5,
        nombre: "Pamparaptor",
        imagen:
          "https://images.dinosaurpictures.org/Pamparaptor_micros_4eb4.jpg",
      },
      {
        id: 6,
        nombre: "Patagosaurus",
        imagen:
          "https://images.dinosaurpictures.org/Patagosaurus-like_6e4e.jpg",
      },
      {
        id: 7,
        nombre: "Herrerasaurus",
        imagen: "https://images.dinosaurpictures.org/Herrerasaurus_8f9a.jpg",
      },
      {
        id: 8,
        nombre: "Giganotosaurus",
        imagen: "https://images.dinosaurpictures.org/Giganotosaurus2_53aa.jpg",
      },
      {
        id: 9,
        nombre: "Abelisaurus",
        imagen:
          "https://images.dinosaurpictures.org/Abelisaurus-unknown-source_a352.jpg",
      },
    ],
  }),
};
</script>
