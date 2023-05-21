<template>
  <nav
    class="container mx-auto flex flex-row flex-nowrap py-2 px-4 items-center"
  >
    <img src="@/assets/logo.png" alt="icon" class="w-10 h-10" />
    <span class="flex-auto mx-2">
      {{ this.$route.name }}
    </span>
    <button
      type="button"
      class="bg-emerald-800 p-3 rounded-md text-white space-y-1"
    >
      <span class="block w-5 h-0.5 bg-white"></span>
      <span class="block w-5 h-0.5 bg-white"></span>
      <span class="block w-5 h-0.5 bg-white"></span>
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>

<style lang="scss" scoped></style>
