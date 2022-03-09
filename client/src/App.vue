<template>
  <v-app>
    <NavBar :recipes="recipes" />
    <v-alert
      border="top"
      color="red"
      prominent
      type="info"
      elevation="3"
      tile
      v-if="updateAlert"
    >
      Update vorhanden, bitte neustarten!
      <v-btn light @click="window.location.reload()"> Reload </v-btn>
    </v-alert>
    <v-alert
      border="top"
      color="blue"
      prominent
      type="info"
      elevation="3"
      tile
      v-if="offline"
    >
      No internet connection found. App is running in offline mode.
    </v-alert>
    <v-main>
      <router-view
        :offline="offline"
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
    updateAlert: false,
    serverAddress: process.env.VUE_APP_SERVER,
    offline: false,
    window: null,
  }),
  created() {
    this.getRecipes();
    window.addEventListener('swUpdated', this.updateAvailable, {
      once: true,
    });
    window.addEventListener('offline', () => (this.offline = true));
    window.addEventListener('online', () => (this.offline = false));
    this.window = window;
  },
  methods: {
    async getRecipes() {
      const { data } = await axios({
        url: this.serverAddress + '/recipes',
        method: 'GET',
      });
      this.recipes = data;
    },
    async sendRecipe(recipe) {
      await axios({
        url: this.serverAddress + '/recipe',
        method: 'POST',
        contentType: 'application/json',
        data: recipe,
      });
      this.getRecipes();
    },
    updateAvailable() {
      this.updateAlert = true;
    },
  },
};
</script>
