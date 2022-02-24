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
            <v-btn type="button" icon v-for="(r, i) of 5" :key="i" value="r" v-model="rating">
              <v-icon> mdi-star-outline </v-icon>
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
  methods: {
    close() {
      this.$router.push('/');
    },
  },
  computed: {
    ingredients: function () {
      return this.ingredientsRaw.replaceAll(', ', ',').split(',');
    },
  },
};
</script>
