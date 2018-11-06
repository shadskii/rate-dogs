import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/es5/util/colors';


Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.blue,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3,
  },
});
