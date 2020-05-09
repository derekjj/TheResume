import Vuex from "vuex";
import Vue from "vue";

import savedResume from "../assets/resumeTemplate.json";
Vue.use(Vuex);

// const routes: Array<RouteConfig> = [
const store = new Vuex.Store({
  strict: true,
  state: () => ({
    resume: savedResume,
  }),
  getters: {
    resume: (state) => state.resume,
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    setResume(state, payload) {
      state.resume = payload;
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1);
    },
    toggle(state, todo) {
      todo.done = !todo.done;
    },
  },
  actions: {
    setResume(context, payload) {
      context.commit("setResume", payload);
    },
    edit(context, payload) {
      context.commit("edit", payload);
    },
  },
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
