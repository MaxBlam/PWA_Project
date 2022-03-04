<template>
  <v-app>
    <NavBar :recipes="recipes" />
    <v-main>
      <router-view
        :recipes="recipes"
        @sendRecipe="sendRecipe"
        @getRecipes="getRecipes"
      />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    recipes: [],
  }),
  created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      const { data } = await axios({
        url: 'http://localhost:3000/recipes',
        method: 'GET',
      });
      this.recipes = data;
    },
    async sendRecipe(recipe) {
      await axios({
        url: 'http://localhost:3000/recipe',
        method: 'POST',
        contentType: 'application/json',
        data: recipe,
      });
      this.getRecipes();
    },
  },
};
</script>
