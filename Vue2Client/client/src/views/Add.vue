<template>
  <v-container fill-height fluid class="d-flex align-start">
    <v-easy-camera
      v-if="img == null"
      v-model="img"
      :fullscreen="true"
      :mustApprove="true"
    >
      <template v-slot:header>
        <NavBar />
      </template>
    </v-easy-camera>
    <v-container
      v-else
      class="d-flex justify-start align-center flex-column elevation-5 rounded-lg"
    >
      <v-img :src="img" max-width="70%" class="rounded-xl mt-3"></v-img>
      <v-btn
        color="grey darken-3 white--text"
        depressed
        class="ma-3"
        @click="img = null"
        >Re-take<v-icon class="ms-2">mdi-camera-flip-outline</v-icon></v-btn
      >
      <v-container>
        <v-form>
          <v-text-field
            v-model="title"
            :counter="40"
            :rules="titleRules"
            label="Title"
            class="mb-2"
            required
          ></v-text-field>
          <v-textarea
            label="Ingredients"
            v-model="ingredientsRaw"
            filled
            solo-inverted
            flat
            :persistent-placeholder="true"
            class="rounded-lg mb-2"
            auto-grow
            placeholder="List your ingredients seperated by a comma"
            required
          ></v-textarea>
          <v-textarea
            label="Preperation"
            v-model="prep"
            auto-grow
            filled
            solo-inverted
            flat
            :persistent-placeholder="true"
            class="rounded-lg mb-2"
            placeholder="How to cook your recipe"
            required
          ></v-textarea>
          <v-text-field
            v-model="desc"
            :counter="100"
            :rules="descRules"
            label="Short description"
            placeholder="Easy to cook recipe"
            required
          ></v-text-field>
          <v-container fluid>
            <p>Rating</p>
            <v-rating
              color="warning"
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              hover
              length="5"
              size="32"
              :value="3"
              v-model="rating"
            ></v-rating>
            <v-btn
              class="mt-3"
              :disabled="
                desc == '' ||
                title == '' ||
                prep == '' ||
                ingredients.length == 0 ||
                offline
              "
              @click="sendRecipe"
            >
              Share Recipe
            </v-btn>
          </v-container>
        </v-form>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import EasyCamera from 'easy-vue-camera';

//inside your vue options api
export default {
  components: {
    'v-easy-camera': EasyCamera,
    NavBar,
  },
  data: () => ({
    img: null,
    desc: '',
    title: '',
    prep: '',
    ingredientsRaw: '',
    rating: 0,
    descRules: [value => !value || value.length < 100 || 'Too many characters'],
    titleRules: [value => !value || value.length < 40 || 'Too many characters'],
  }),
  async created() {
    this.desc = await navigator.clipboard.readText();
  },
  props: {
    offline: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    close() {
      this.$router.push('/');
    },
    sendRecipe() {
      this.$emit('sendRecipe', {
        img: this.img,
        desc: this.desc,
        title: this.title,
        prep: this.prep,
        rating: this.rating,
        ingredients: this.normIngredients(),
      });
      this.$emit('getRecipes');
      this.$router.push('/library');
    },
    normIngredients() {
      let temp;
      temp = this.ingredients.map(ingredient => ingredient.trim()); // Trim String whitspaces
      temp = temp.filter(ingredient => ingredient != ''); //Remove empty ingredients
      return temp;
    },
  },
  computed: {
    ingredients: function () {
      return this.ingredientsRaw.split(',');
    },
  },
};
</script>
