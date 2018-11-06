<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
    >
      <v-flex>
        <v-slide-y-transition
          group
        >
          <v-flex
            v-for="dog in dogs"
            :key="`flex-${dog.url}`"
            xs12
          >
            <dog-card
              :key="dog.url"
              :url="dog.url"
              :rate="dog.rating"
              :readonly="favorites"
              @rated="(value)=> rateDog({url: dog.url,rating: value})"
            />
          </v-flex>
        </v-slide-y-transition>

        <br>&nbsp;
        <br> &nbsp;
      </v-flex>

    </v-layout>
  </v-container>
</template>
<script>
import DogCard from './DogCard.vue';
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  components: {
    DogCard,
  },
  props: {
    favorites: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['unRatedDogs', 'favoriteDogs']),
    dogs() {
      return this.favorites ? this.favoriteDogs : this.unRatedDogs;
    },
  },
  watch: {
    unRatedDogs(nv, ov) {
      if (nv.length < 5) {
        this.fetchDogs();
      }
    },
  },
  methods: {
    ...mapActions([
      'fetchDogs',
    ]),
    ...mapMutations([
      'rateDog',
    ]),
  },


};
</script>
