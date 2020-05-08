import Vuex from "vuex";
import Vue from "vue";

import savedResume from "../assets/resumeTemplate.json";
Vue.use(Vuex);

// const routes: Array<RouteConfig> = [
const store = new Vuex.Store({
  state: () => ({
    resume: savedResume
  }),
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    add(state, text) {
      state.list.push({
        text,
        done: false
      });
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1);
    },
    toggle(state, todo) {
      todo.done = !todo.done;
    }
  },
  getters: {
    resume: (state) => state.resume,
  }
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
