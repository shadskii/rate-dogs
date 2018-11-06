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
      <dog-container />
    </v-content>
  </v-app>
</template>

<script>
import DogContainer from './components/DogContainer';

export default {
  name: 'App',
  components: {
    DogContainer,
  },
  data() {
    return {
      //
    };
  },
};
</script>
