<template>
  <v-footer color="grey lighten-5" padless>
    <v-row justify="center" no-gutters class="small-title">
      <v-btn
        small
        text
        class="my-2 font-weight-bold"
        exact
        :to="$i18n.path('')"
      >{{ $t('links.home') }}</v-btn>
      <v-btn
        small
        text
        class="my-2 font-weight-bold"
        exact
        :to="$i18n.path('about')"
      >{{ $t('links.about') }}</v-btn>
      <v-btn
        small
        text
        class="my-2 font-weight-bold"
        exact
        :to="$i18n.path('services')"
      >{{ $t('links.services') }}</v-btn>
      <v-btn small text class="my-2 font-weight-bold" to="/blog">BLOG</v-btn>
      <v-btn
        small
        text
        class="my-2 font-weight-bold"
        exact
        :to="$i18n.path('contact')"
      >{{ $t('links.contact') }}</v-btn>
      <v-col class="grey lighten-5 py-4 text-center caption font-weight-regular" cols="12">
        {{ new Date().getFullYear() }} —
        <span class="small-title font-weight-bold">Juliana Morais</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
  }
</script>

<style>
.small-title{
  font-family: 'Muli', sans-serif !important;
}
</style>