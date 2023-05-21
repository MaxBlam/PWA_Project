<template>
  <nav
    class="container mx-auto flex flex-row flex-nowrap py-2 px-4 items-center"
  >
    <img src="@/assets/logo.png" alt="icon" class="w-10 h-10" />
    <span class="flex-auto mx-2">
      {{ this.$route.name }}
    </span>
    <DropDown :routes="routes" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DropDown from "@/components/DropDown.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    DropDown,
  },
  data() {
    return {};
  },
  computed: {
    routes() {
      return this.$router.options.routes.map((el) => ({
        path: el.path,
        name: el.name,
      }));
    },
  },
});
</script>

<style lang="scss" scoped></style>
