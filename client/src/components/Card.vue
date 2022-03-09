<template>
  <v-card class="mx-3 my-12 rounded-xl" width="374">
    <v-img
      :src="recipe.img"
      aspect-ratio="1"
      :to="`/r/` + recipe.id"
    ></v-img>

    <v-card-title class="text-truncate" :to="`/r/` + recipe.id">{{
      recipe.title
    }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="recipe.rating"
          color="warning"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-row>

      <div class="my-4">
        {{ recipe.desc }}
      </div>
    </v-card-text>
    <v-btn
      @click.stop="deleteRecipe"
      color="error"
      large
      width="100%"
      class="rounded-t-0 rounded-xl"
    >
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    recipe: Object,
  },
  data: () => ({
    serverAddress: process.env.VUE_APP_SERVER,
  }),
  methods: {
    async deleteRecipe() {
      try {
        await axios({
          url: this.serverAddress + '/recipe/' + this.recipe.id,
          method: 'DELETE',
        });
        this.$emit('getRecipes');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
