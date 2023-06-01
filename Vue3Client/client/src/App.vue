<template>
  <div class="bg-neutral min-h-screen max-h-full">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>

<style scoped></style>
