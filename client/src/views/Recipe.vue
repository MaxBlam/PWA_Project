<template>
  <v-container fluid>
    <v-img
      :src="serverAddress + recipe.img"
      height="250"
      class="rounded-lg mb-5"
    ></v-img>
    <v-container>
      <p class="text-h4 warning--text">{{ recipe.title }}</p>
      <v-row align="center">
        <v-col cols="12" md="6" >
          <v-list class="rounded-lg">
            <v-subheader class="text-h6">Zutaten:</v-subheader>
            <v-list-item
              class="grey--text text--darken-2"
              dense
              v-for="(ingredient, index) of recipe.ingredients"
              :key="index"
            >
              <v-list-item-icon>
                <v-icon>mdi-minus </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ ingredient }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          class="orange lighten-2 rounded-lg my-3 mb-auto elevation-3"
          cols="12"
          md="6"
        >
          <p class="text-h6 grey--text text--darken-3">Zubereitung:</p>
          <p class="grey--text text--darken-3" v-html="recipe.prep"></p>
        </v-col>
      </v-row>
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
