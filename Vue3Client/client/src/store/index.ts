import { createStore } from "vuex";
import { Recipe } from "@/global";

export default createStore({
  state: {
    recipes: [] as Array<Recipe>,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
