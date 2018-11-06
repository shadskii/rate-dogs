<template>
  <v-container>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-avatar>
              <v-icon>mdi-account</v-icon>
            </v-avatar>
            Anonymous Dog Lover
          </v-card-title>
          <v-card-text>
            {{ rank }}
            <pie-chart :data="dogData" />
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import PieChart from './PieChart.vue';
import {mapGetters} from 'vuex';
export default {
  components: {
    PieChart,
  },
  computed: {
    rank() {
      const fiveStars = this.dogData[4];
      if (fiveStars < 1) {
        return 'Amatuer Patter';
      } else if (fiveStars < 5) {
        return 'Journeyman Patter';
      } else if ( fiveStars < 10) {
        return 'Expert Patter';
      } else if (fiveStars < 15) {
        return 'Supreme Patter';
      } else {
        return 'Heckin\' Awesome Patter';
      }
    },
    ...mapGetters(['dogData']),
  },
};
</script>
