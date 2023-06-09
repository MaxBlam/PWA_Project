<template>
  <div class="bg-neutral min-h-screen max-h-full">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import NavBar from "@/components/NavBar.vue";
import data from "@/assets/dummy.json";

export default defineComponent({
  components: {
    NavBar,
  },
  created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      const store = useStore();
      store.state.recipes = data;
    },
  },
});
</script>

<style scoped></style>
