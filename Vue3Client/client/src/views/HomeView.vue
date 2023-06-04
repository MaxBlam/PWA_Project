<template>
  <div class="container mx-auto">
    <FilterBar />
    <div class="flex flex-row flex-wrap items-center justify-center my-4">
      <RecipePreview
        v-for="recipe of recipes"
        :recipe="recipe"
        :key="recipe.id"
      />
      <div class="md:flex-1"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FilterBar from "@/components/FilterBar.vue";
import RecipePreview from "@/components/RecipePreview.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    FilterBar,
    RecipePreview,
  },
  data: () => ({
    recipes: [
      {
        src: "http://dummyimage.com/250x100.png/5fa2dd/ffffff",
        rating: 3,
        time: 152,
        name: "Lion, australian sea",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "174394011-4",
      },
      {
        src: "http://dummyimage.com/151x100.png/ff4444/ffffff",
        rating: 2,
        time: 71,
        name: "Blue fox",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "525891455-0",
      },
      {
        src: "http://dummyimage.com/180x100.png/5fa2dd/ffffff",
        rating: 1,
        time: 8,
        name: "Puffin, horned",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "697744466-5",
      },
      {
        src: "http://dummyimage.com/201x100.png/dddddd/000000",
        rating: 1,
        time: 105,
        name: "Eastern indigo snake",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "574318284-1",
      },
      {
        src: "http://dummyimage.com/115x100.png/dddddd/000000",
        rating: 2,
        time: 22,
        name: "Hawk, galapagos",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "590616317-4",
      },
      {
        src: "http://dummyimage.com/103x100.png/ff4444/ffffff",
        rating: 2,
        time: 61,
        name: "Phalarope, northern",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "923730808-6",
      },
      {
        src: "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
        rating: 2,
        time: 59,
        name: "Seal, northern fur",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "106929455-1",
      },
      {
        src: "http://dummyimage.com/147x100.png/ff4444/ffffff",
        rating: 2,
        time: 29,
        name: "Russian dragonfly",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "454459196-1",
      },
      {
        src: "http://dummyimage.com/148x100.png/dddddd/000000",
        rating: 4,
        time: 44,
        name: "Lizard, mexican beaded",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "057938363-6",
      },
      {
        src: "http://dummyimage.com/232x100.png/5fa2dd/ffffff",
        rating: 5,
        time: 15,
        name: "Crab-eating raccoon",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.",
        id: "727587617-5",
      },
    ] as Array<{
      src: string;
      rating: number;
      time: number;
      name: string;
      desc: string;
      id: string;
    }>,
  }),
});
</script>
