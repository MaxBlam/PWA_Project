<template>
  <div class="container mx-auto">
    <FilterBar />
    <div class="flex flex-row flex-wrap items-center justify-center my-4">
      <RecipePreview
        v-for="recipe of $store.state.recipes"
        :recipe="recipe"
        :key="recipe.id"
      />
      <div class="md:flex-1"></div>
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
});
</script>
