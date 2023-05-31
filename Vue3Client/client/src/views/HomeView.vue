<template>
  <div class="container mx-auto">
    <FilterBar />
    <div class="flex flex-row flex-wrap space-x-4 items-center my-4">
      <RecipePreview v-for="recipe of recipes" :key="recipe.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FilterBar from "@/components/FilterBar.vue";
import RecipePreview from "@/components/RecipePreview.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    FilterBar,
    RecipePreview,
  },
  data: () => ({
    recipes: [{}] as Array<{
      src: string;
      rating: number;
      time: number;
      name: string;
      desc: string;
      id: string;
    }>,
  }),
});
</script>
