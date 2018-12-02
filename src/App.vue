<template>
  <v-app dark>
    <v-toolbar
      :extended="iosPwa"
      app
      :extension-height="iosPwa && iphoneX ? 44 : 20"
      color="primary"
    >
      <div
        v-if="iosPwa"
        slot="extension"
        class="pb-3"
      >
        <span
          class="headline text-uppercase font-weight-medium"
        >We Rate Dogs</span>
      </div>
      <v-toolbar-title
        v-else
        class="headline text-uppercase font-weight-medium"
      >
        We Rate Dogs
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
import {isIphoneX, isPwa, isIos} from './phoneDetection';


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
      iphoneX: isIphoneX(),
      iosPwa: isPwa() && isIos(),
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
<style>
body{
  background-color: #303030;
}
</style>
