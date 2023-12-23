<template>
  <div
    class="bg-secondary flex flex-col rounded-xl space-y-1 p-4 m-2 text-text w-52 box-content cursor-pointer"
    @click="$router.push(`/r/${recipe.id}`)"
  >
    <div class="rounded-xl bg-neutral overflow-hidden">
      <picture>
        <!-- Still needs to be optimized avif,webp,fallback -->
        <img class="object-cover h-52 w-full" :src="recipe.src" alt="" />
      </picture>
    </div>
    <p class="space-x-1">
      <i class="text-accent">Star</i>
      <span>{{ recipe.rating }}</span>
      <i class="text-accent">Clock</i>
      <span>{{ recipe.time }}</span>
    </p>
    <div class="w-full">
      <p class="font-bold">{{ recipe.name }}</p>
      <p class="line-clamp-3">
        {{ recipe.desc }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Recipe } from "@/global";

export default defineComponent({
  name: "RecipePreview",
  data() {
    return {};
  },
  props: {
    recipe: {
      type: Object as () => Recipe,
      required: true,
    },
  },
  computed: {},
});
</script>

<style scoped></style>
