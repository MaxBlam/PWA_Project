import { createStore } from "vuex";

export default createStore({
  state: {
    recipes: [] as Array<{
      id: string;
      src: string;
      rating: number;
      time: number;
      name: string;
      desc: string;
      directions: string;
      ingredients: number; //Array<string>;
    }>,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
