<template>
  <v-container>
    <v-layout>
      <v-flex
        v-for="dog in dogs"
        :key="`flex-${dog.url}`"
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
import {mapActions} from 'vuex';
export default {
  components: {
    DogCard,
  },
  data() {
    return {

    };
  },
  computed: {
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
