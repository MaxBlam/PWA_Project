<template>
  <div class="flex flex-row flex-wrap justify-around">
    <div class="w-4/12 bg-secondary">test</div>
    <div class="w-4/12 bg-secondary">test</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "RecipeView",
  props: {
    recipe: {
      type: Object as PropType<{
        src: string;
        rating: number;
        time: number;
        name: string;
        desc: string;
        id: string;
      }>,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
