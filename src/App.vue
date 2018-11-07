<template>
  <v-app dark>
    <v-toolbar
      app
      color="primary"
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>We Rate Dogs</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-fade-transition>
        <dog-container
          v-if="activeBtn === 0"
        />
      </v-fade-transition>
      <dog-container
        v-if="activeBtn === 1"
        favorites
      />
      <profile-page v-if="activeBtn === 2" />
    </v-content>
    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      fixed
      height="75"
    >
      <v-btn
        flat
        color="secondary"
      >
        <span>Rate</span>
        <v-icon>mdi-paw</v-icon>
      </v-btn>
      <v-btn
        flat
        color="secondary"
      >
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn
        flat
        color="secondary"
      >
        <span>Profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import DogContainer from './components/DogContainer';
import ProfilePage from './components/ProfilePage';
import {mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
    DogContainer,
    ProfilePage,
  },
  data() {
    return {
      activeBtn: 0,
      showNav: true,
    };
  },
  mounted() {
    this.fetchDogs();
  },
  methods: {
    ...mapActions(['fetchDogs']),
  },
};
</script>
