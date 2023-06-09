<template>
  <nav class="flex flex-row flex-nowrap py-2 px-4 items-center mb-4">
    <img src="@/assets/logo.png" alt="icon" class="w-10 h-10" />
    <span class="mx-2 text-text font-semibold">
      {{ $route.name }}
    </span>
    <!-- Spacer -->
    <div class="flex-1"></div>
    <DropDown :options="options" />
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
