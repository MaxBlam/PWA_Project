<template>
  <div class="relative inline-block text-left">
    <button
      type="button"
      class="bg-emerald-800 p-3 rounded-md text-white space-y-1"
      @click="dropdown = !dropdown"
    >
      <span class="block w-5 h-0.5 bg-white"></span>
      <span class="block w-5 h-0.5 bg-white"></span>
      <span class="block w-5 h-0.5 bg-white"></span>
    </button>
    <div
      class="absolute transition-all right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-4 ring-emerald-800 ring-opacity-5"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
      v-bind:class="{
        visible: dropdown,
        'opacity-100': dropdown,
        invisible: !dropdown,
        'opacity-0': !dropdown,
      }"
    >
      <div class="py-1" role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <p href="#" class="text-gray-700 block px-4 py-2">Navigation</p>
      </div>
      <div class="py-1" role="none">
        <!-- Enumerate through custom list to ensure reusabilty -->
        <router-link
          v-for="(route, index) in routes"
          :key="route.path"
          :to="route.path"
          class="text-gray-700 block px-4 py-2 text-sm hover:bg-emerald-600 hover:bg-opacity-25"
          role="menuitem"
          tabindex="-1"
          :id="`menu-item-${index}`"
          @click="dropdown = !dropdown"
          >{{ route.name }}</router-link
        >
      </div>
      <div class="py-1" role="none">
        <router-link
          to="/"
          class="text-gray-700 block px-4 py-2 text-sm hover:bg-emerald-600 hover:bg-opacity-25"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
          @click="dropdown = !dropdown"
          >Home</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      dropdown: false,
    };
  },
  props: {
    routes: Array<{ path: string; name: string }>(),
  },
});
</script>

<style scoped></style>
