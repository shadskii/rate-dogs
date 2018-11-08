import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import Dog from './Dog';
import {RANDOM} from './api';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ratedDogs: state.ratedDogs}),
});
export default new Vuex.Store({
  state: {
    unRatedDogs: [],
    ratedDogs: [],
  },
  getters: {
    unRatedDogs: (state) => (state.unRatedDogs),
    favoriteDogs: (state) => (state.ratedDogs.filter((dog) => dog.rating === 5)),
    dogData: (state) => {
      const data = Array(5).fill(0);
      state.ratedDogs.forEach((dog) => data[(+dog.rating)-1]++);
      return data;
    },
  },
  mutations: {
    rateDog: (state, payload) => (state.unRatedDogs = state.unRatedDogs.map((dog) =>{
      if (payload.url === dog.url) {
        dog.rating = payload.rating;
        dog.rated = true;
        state.ratedDogs = [dog, ...state.ratedDogs];
      }
      return dog;
    }).filter((dog) => !dog.rated)
    ),
    addDogs: (state, dogs) => (state.unRatedDogs = [...state.unRatedDogs, ...dogs]),
  },
  actions: {
    fetchDogs({commit, state}) {
      fetch(`${RANDOM}/25`, {
        method: 'get',
      })
          .then((resp) => resp.json())
          .then((json) => json.message)
          .then((json) => json.map((dj) => new Dog(dj)))
          .then((dogs) => commit('addDogs', dogs));
    },
  },
  plugins: [vuexLocal.plugin],
});
