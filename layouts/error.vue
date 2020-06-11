<template>
  <v-app>
    <component :is="errorPage" :error="error" />
  </v-app>
</template>

<script>
import error400 from '~/components/error/400.vue';
import error404 from '~/components/error/404.vue';
import error500 from '~/components/error/500.vue';

export default {
  name: 'nuxt-error',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404;
      }  else if (this.error.statusCode === 500) {
        return error500;
      } else {
        return error400;
      }
    }
}
}
</script>
