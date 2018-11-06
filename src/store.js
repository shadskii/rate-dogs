import Vue from 'vue';
import Vuex from 'vuex';
import Dog from './Dog';
import {RANDOM} from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
  },
  getters: {
    unRatedDogs: (state) => (state.dogs.filter((dog) => !dog.rated)),
  },
  mutations: {
    rateDog: (state, payload) => (state.dogs = state.dogs.map((dog) =>{
      if (payload.url === dog.url) {
        dog.rating = payload.rating;
        dog.rated = true;
      }
    })),
    addDogs: (state, dogs) => (state.dogs = [...state.dogs, ...dogs]),
  },
  actions: {
    fetchDogs({commit, state}) {
      fetch(`${RANDOM}/5`, {
        method: 'get',
      })
          .then((resp) => resp.json())
          .then((json) => json.message)
          .then((json) => json.map((dj) => new Dog(dj)))
          .then((dogs) => commit('addDogs', dogs));
    },
  },
});
