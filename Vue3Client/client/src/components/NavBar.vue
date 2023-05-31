<template>
  <nav class="flex flex-row flex-nowrap py-2 px-4 items-center">
    <img src="@/assets/logo.png" alt="icon" class="w-10 h-10" />
    <span
      class="flex-auto mx-2 text-text font-semibold cursor-pointer hover:drop-shadow-lg transition-all"
    >
      {{ $route.name }}
    </span>
    <!-- Spacer -->
    <span
      class="mx-2 text-text font-semibold cursor-pointer hover:drop-shadow-lg transition-all"
      @click="$router.push('/about')"
    >
      About
    </span>
    <DropDown :options="options" />
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
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
    options() {
      return {
        content: this.$router.options.routes.map((el) => ({
          path: el.path,
          name: el.name,
        })),
        color: "bg-accent",
        bgColor: "transparent",
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
