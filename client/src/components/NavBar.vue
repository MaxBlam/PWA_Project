<template>
  <div>
    <v-app-bar color="grey darken-4" dark>
      <v-img
        src="../assets/logo.svg"
        max-height="50"
        max-width="50"
        class="mx-3"
        contain
      ></v-img>
      <v-toolbar-title>Nekotastic</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute right temporary dark>
      <v-list nav>
        <v-list-item-group active-class="warning white--text">
          <v-list-item to="/" exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/recipes" exact>
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Recipes</v-list-item-title>
          </v-list-item>

          <v-list-item to="/add" exact>
            <v-list-item-icon>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Add</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-magnify</v-icon>
            </v-list-item-icon>
            <v-autocomplete
              v-model="search"
              :items="mRecipes"
              flat
              filled rounded
              label="Recipes"
              @onChange="console.log(search)"
            ></v-autocomplete>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    search: '',
  }),
  props: {
    recipes: { type: Array, default: () => [] },
  },
  computed: {
    mRecipes: function () {
      return this.recipes.map(el => el.title);
    },
  },
};
</script>
