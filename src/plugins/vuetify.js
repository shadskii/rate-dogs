import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/es5/util/colors';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.blue,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3,
  },
});
