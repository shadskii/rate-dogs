<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="dog in unRatedDogs"
        :key="`flex-${dog.url}`"
        xs12
      >
        <dog-card
          :key="dog.url"
          :url="dog.url"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import DogCard from './DogCard.vue';
import {mapActions, mapGetters} from 'vuex';
export default {
  components: {
    DogCard,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['unRatedDogs']),
    dogs() {
      return this.$store.state.dogs;
    },
  },
  mounted() {
    this.fetchDogs();
  },
  methods: {
    ...mapActions([
      'fetchDogs',
    ]),
  },


};
</script>
