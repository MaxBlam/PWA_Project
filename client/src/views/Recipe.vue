<template>
  <v-container fluid>
    <v-img
      :src="serverAddress + recipe.img"
      height="250"
      class="rounded-lg mb-5"
    ></v-img>
    <v-container>
      <p class="text-h4 warning--text">{{ recipe.title }}</p>
      <p class="text-h6">Zutaten:</p>
      <v-list>
        <v-list-item
          class="grey--text text--darken-2"
          dense
          v-for="(ingredient, index) of recipe.ingredients"
          :key="index"
        >
          <v-list-item-icon>
            <v-icon>mdi-circle-outline </v-icon>
          </v-list-item-icon>
          <v-list-title>
            {{ ingredient }}
          </v-list-title>
        </v-list-item>
      </v-list>
      <p class="text-h6">Zubereitung:</p>
      <p>{{ recipe.prep }}</p>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    serverAddress: process.env.VUE_APP_SERVER,
  }),
  props: {
    recipes: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      default: () => {},
    },
  },
  computed: {
    recipe: function () {
      return this.recipes.find(r => r.id == this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
