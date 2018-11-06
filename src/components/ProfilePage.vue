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
            Amazing
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
    ...mapGetters(['dogData']),
  },
};
</script>
