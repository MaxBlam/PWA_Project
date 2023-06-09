<template>
  <div class="container mx-auto flex flex-row flex-wrap justify-around">
    <div class="flex flex-col space-y-8 w-1/2 text-text">
      <div class="bg-secondary flex flex-col rounded-lg p-4 space-y-2">
        <div class="text-2xl flex flex-row">
          <h1 class="flex-1 font-bold">{{ recipe.name }}</h1>
          <button
            @click="editRecipe"
            class="bg-accent text-secondary rounded-lg"
          >
            <i>Pen</i>
          </button>
          <button
            @click="delRecipe"
            class="bg-accent text-secondary rounded-lg ml-2"
          >
            <i>Can</i>
          </button>
        </div>
        <p class="font-bold">Description:</p>
        <p>{{ recipe.desc }}</p>
      </div>
      <div
        class="bg-secondary flex flex-row rounded-lg p-4 space-y-2 justify-between items-start"
      >
        <div class="flex flex-col space-y-2">
          <p class="font-bold">Ingredients:</p>
          <ul class="list-disc ml-4">
            <li v-for="(ingredient, index) of ingredients" :key="index">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        <div>
          <picture>
            <!-- Still needs to be optimized avif,webp,fallback -->
            <img class="object-cover h-52 w-52" :src="recipe.src" alt="" />
          </picture>
          <p class="space-x-1">
            <i class="text-accent">Star</i>
            <span>{{ recipe.rating }}</span>
            <i class="text-accent">Clock</i>
            <span>{{ recipe.time }}</span>
          </p>
        </div>
      </div>
      <div class="bg-secondary flex flex-col rounded-lg p-4 space-y-2">
        <p>Directions:</p>
        <p>{{ recipe.directions }}</p>
      </div>
    </div>
    <div class="w-4/12 bg-secondary">test</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "RecipeView",
  data: () => ({
    //Dumm Data
    ingredients: ["a", "b", "c"] as Array<string>,
  }),
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    delRecipe() {
      console.log("del");
    },
    editRecipe() {
      console.log("edit");
    },
  },
  computed: {
    recipe(): {
      id: string;
      src: string;
      rating: number;
      time: number;
      name: string;
      desc: string;
      directions: string;
      ingredients: number; //Array<string>;
    } {
      const store = useStore();
      //If Id not exists
      return store.state.recipes.filter(
        (el: {
          id: string;
          src: string;
          rating: number;
          time: number;
          name: string;
          desc: string;
          directions: string;
          ingredients: number; //Array<string>;
        }) => el.id === this.id
      )[0];
    },
  },
});
</script>

<style scoped></style>
