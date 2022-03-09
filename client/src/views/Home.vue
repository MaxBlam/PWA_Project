<template>
  <v-container
    class="d-flex justify-center align-center flex-column bg" fluid
    style=""
    fill-height
  >
    <h3 class="display-3 my-2 white--text text-center">Open Recipe Database</h3>
    <v-btn to="/add" rounded class="my-2 rounded-3" color="warning"
      >Add Recipe</v-btn
    >
    <v-btn to="/recipes" rounded class="my-2" dark>Recipes</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style>
.bg {
  background-image: url('../assets/bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
   background-attachment: fixed;
}
</style>
