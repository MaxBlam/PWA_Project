<template>
  <v-container fluid fill-height class="d-flex justify-space-around flex-wrap">
    <Card v-for="recipe of recipes" :key="recipe.id" :recipe="recipe" />
  </v-container>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  props: {
    recipes: Array,
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped></style>
