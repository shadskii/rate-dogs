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
    favoriteDogs: (state) => (state.dogs.filter((dog) => dog.rating === 5)),
    dogData: (state) => {
      const data = Array(5).fill(0);
      state.dogs
          .filter((dog) => dog.rated)
          .forEach((dog) => data[(+dog.rating)-1]++);
      return data;
    },
  },
  mutations: {
    rateDog: (state, payload) => (state.dogs = state.dogs.map((dog) =>{
      if (payload.url === dog.url) {
        dog.rating = payload.rating;
        dog.rated = true;
      }
      return dog;
    })),
    addDogs: (state, dogs) => (state.dogs = [...state.dogs, ...dogs]),
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
});
