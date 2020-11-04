<template>
  <div >
 <Carousel />
  </div>
</template>

<script>
// @ is an alias to /src

import Carousel from "../components/Carousel";
export default {
  name: "Inicio",
  components: {
    Carousel,
  },
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
