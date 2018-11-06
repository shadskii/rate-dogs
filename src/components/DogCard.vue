<template>
  <v-card>
    <v-img
      aspect-ratio="1"
      :src="url"
    />
    <div class="text-xs-center mt-2">
      <v-rating v-model="rating" />
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      rating: 1,
    };
  },
  watch: {
    rating(nv) {
      this.$emit('rated', nv);
    },
  },
};
</script>

