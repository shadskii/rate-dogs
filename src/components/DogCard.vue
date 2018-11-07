<template>
  <v-card>
    <v-img
      :src="url"
      aspect-ratio="1"
    />
    <div class="text-xs-center mt-2">
      <v-rating
        v-if="!readonly"
        v-model="rating"
        :value="rate"
        medium
      />
      <v-rating
        v-if="readonly"
        :value="rate"
        readonly
        medium
      />
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
    rate: {
      type: Number,
      default: 0,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rating: 0,
    };
  },
  watch: {
    rating(nv) {
      setTimeout(()=> this.$emit('rated', nv), 500);
    },
  },
};
</script>

