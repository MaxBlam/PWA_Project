<template>
  <div
    class="flex flex-row flex-wrap justify-center space-x-4 space-y-4 items-center my-4 mx-2"
  >
    <i>Searchicon</i>
    <input class="bg-secondary p-2 rounded-xl" />
    <button
      class="bg-accent text-secondary px-6 py-2 rounded-xl hover:shadow-xl"
      v-for="filter of quickFilter"
      :key="filter"
      @click="selected = filter"
    >
      {{ filter }}
    </button>
    <div class="flex-1"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterBar",
  data() {
    return {
      quickFilter: ["Main", "Side", "Sweets", "Beverages"] as Array<string>,
      selected: "" as string,
    };
  },
  computed: {},
});
</script>

<style scoped></style>
