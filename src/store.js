import Vue from 'vue';
import Vuex from 'vuex';
import Dog from './Dog';
import {RANDOM} from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
  },
  mutations: {
    rateDog: (state, payload) => (state.dogs = state.dogs.map((dog) =>{
      if (payload.url === dog.url) {
        dog.rating = payload.rating;
      }
    })),
    addDog: (state, dog) => (state.dogs = [...state.dogs, dog]),
  },
  actions: {
    fetchDogs({commit, state}) {
      fetch(RANDOM, {
        method: 'get',
      })
          .then((resp) => resp.json())
          .then((json) => json.message)
          .then((json) => new Dog(json))
          .then((dog) => commit('addDog', dog));
    },
  },
});
