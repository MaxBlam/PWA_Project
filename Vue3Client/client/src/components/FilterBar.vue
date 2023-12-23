<template>
  <div class="flex flex-row flex-wrap justify-center items-center mx-2">
    <div class="space-x-2 m-2">
      <i>Searchicon</i>
      <input
        class="bg-secondary p-2 rounded-xl flex-1 min-w-0"
        @keyup="filterName"
        placeholder="Search by Name"
        v-model="search"
      />
    </div>
    <button
      class="bg-accent text-secondary px-6 py-2 m-2 rounded-xl hover:shadow-xl"
      v-for="type of quickFilter"
      :key="type"
      @click="filterType(type)"
    >
      {{ type }}
    </button>
    <div class="flex-1"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { Recipe } from "@/global";

export default defineComponent({
  name: "FilterBar",
  data() {
    return {
      quickFilter: ["Main", "Side", "Dessert", "Beverage"] as Array<string>,
      search: "" as string,
      store: useStore(),
    };
  },
  methods: {
    filterType(type: string) {
      this.store.state.filteredRecipes = this.store.state.recipes.filter(
        (el: Recipe) => el.type == type
      );
    },
    filterName() {
      this.store.state.filteredRecipes = this.store.state.recipes.filter(
        (el: Recipe) =>
          el.name.toLowerCase().includes(this.search.toLowerCase())
      );
      console.log(this.search);
    },
  },
});
</script>

<style scoped></style>
