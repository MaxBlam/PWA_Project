<template>
  <v-card
    class="mx-3 my-12 rounded-xl"
    width="374"
    :to="`/recipes/` + recipe.id"
  >
    <v-img :src="recipe.img"></v-img>

    <v-card-title class="text-truncate">{{ recipe.title }}</v-card-title>

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
  </v-card>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
  data: () => ({
    serverAddress: process.env.VUE_APP_SERVER,
  }),
};
</script>
