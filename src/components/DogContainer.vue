<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
      justify-center
    >
      <v-flex
        xs12
        md6
      >
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
              @rated="(value)=> rateOrNotify({url: dog.url,rating: value})"
            />
          </v-flex>
        </v-slide-y-transition>

        <br>&nbsp;
        <br> &nbsp;
      </v-flex>
      <div class="text-xs-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <v-card>
            <v-card-title primary-title>
              All dogs deserve at least 2 stars. Try again
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                flat
                @click="dialog = false"
              >
                I'll Try Again
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
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
      dialog: false,
    };
  },
  computed: {
    ...mapGetters([
      'unRatedDogs',
      'favoriteDogs',
    ]),
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
    rateOrNotify(payload) {
      if (payload.rating <2) {
        this.dialog = true;
      } else {
        this.rateDog(payload);
      }
    },
    ...mapActions([
      'fetchDogs',
    ]),
    ...mapMutations([
      'rateDog',
    ]),
  },
};
</script>
