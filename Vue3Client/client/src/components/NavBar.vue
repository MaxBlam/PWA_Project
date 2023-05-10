<template>
  <nav class="flex flex-row flex-nowrap items-center container mx-auto">
    <img src="../assets/logo.svg" alt="Logo" class="flex-initial w-10 h-10 m-2" />
    <span class="flex-grow">Title</span>
    <btn
      class="flex-initial rounded w-12 h-12 bg-emerald-800 text-white"
      type="button"
      @click="this.navState ? (this.navState = false) : (this.navState = true)"
      >test</btn
    >
  </nav>
  <div v-if="navState">{{ navState }}</div>
</template>

<script>
export default {
  data() {
    return {
      navState: false
    }
  },
}
</script>

<style lang="scss" scoped></style>