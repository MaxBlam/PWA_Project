<template>
  <div
    class="bg-secondary flex flex-col rounded-xl space-y-1 p-4 text-text w-52 max-h-72 box-content"
  >
    <div class="rounded-xl bg-neutral w-full h-52 overflow-hidden">
      <picture class="object-cover">
        <img src="@/assets/ph.jpg" alt="" />
      </picture>
    </div>
    <p class="space-x-1">
      <i>Star</i>
      <span>Rating</span>
      <i>Clock</i>
      <span>Time</span>
    </p>
    <div class="w-full">
      <p class="font-bold">RecipeName</p>
      <p class="line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet
        porttitor lacus luctus accumsan tortor posuere ac.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecipePreview",
  data() {
    return {};
  },
  computed: {},
});
</script>

<style scoped></style>
