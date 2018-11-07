import Vue from 'vue';
import Vuex from 'vuex';
import Dog from './Dog';
import {RANDOM} from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    unRateddogs: [],
    ratedDogs: [],
  },
  getters: {
    unRatedDogs: (state) => (state.unRateddogs),
    favoriteDogs: (state) => (state.ratedDogs.filter((dog) => dog.rating === 5)),
    dogData: (state) => {
      const data = Array(5).fill(0);
      state.ratedDogs.forEach((dog) => data[(+dog.rating)-1]++);
      return data;
    },
  },
  mutations: {
    rateDog: (state, payload) => (state.unRateddogs = state.unRateddogs.map((dog) =>{
      if (payload.url === dog.url) {
        dog.rating = payload.rating;
        dog.rated = true;
        state.ratedDogs = [dog, ...state.ratedDogs];
      }
      return dog;
    }).filter((dog) => !dog.rated)
    ),
    addDogs: (state, dogs) => (state.unRateddogs = [...state.unRateddogs, ...dogs]),
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
