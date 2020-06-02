<template>
  <div>
    <v-app-bar absolute color="transparent" elevation="0" class="px-12">
      <v-toolbar-title justify="center" align="center">
        <v-img :src="require('@/static/logo.webp')" class="menu-logo hidden-sm-and-down" />
        <v-img
          :src="require('@/static/logo-horizontal.webp')"
          class="menu-logo-horizontal hidden-md-and-up"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-item>
        <v-btn
          color="blue darken-1"
          text
          medium
          class="links caption hidden-sm-and-down"
          :to="$i18n.path('')"
          exact
        >{{ $t('links.home') }}</v-btn>
        <v-btn
          color="blue darken-1"
          text
          medium
          class="links caption hidden-sm-and-down"
          :to="$i18n.path('about')"
          exact
        >{{ $t('links.about') }}</v-btn>
        <v-btn
          color="blue darken-1"
          text
          medium
          class="links caption hidden-sm-and-down"
          :to="$i18n.path('services')"
          exact
        >{{ $t('links.services') }}</v-btn>
        <v-btn
          color="blue darken-1"
          text
          medium
          class="links caption hidden-sm-and-down"
          to="/blog"
        >Blog</v-btn>
        <v-btn
          color="blue darken-1"
          text
          medium
          class="links caption hidden-sm-and-down"
          :to="$i18n.path('contact')"
          exact
        >{{ $t('links.contact') }}</v-btn>
        <v-btn
          color="pink darken-1"
          outlined
          medium
          class="links caption hidden-sm-and-down"
          to="/login"
        >{{ $t('links.login') }}</v-btn>
        <v-btn
          color="pink darken-1"
          depressed
          dark
          medium
          class="links caption hidden-sm-and-down"
          v-if="$i18n.locale === 'pt'"
          :to="`/en` + $route.fullPath"
          active-class="none"
          exact
        >PT</v-btn>
        <v-btn
          color="pink darken-1"
          depressed
          dark
          medium
          class="links caption hidden-sm-and-down"
          v-else
          :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
          active-class="none"
          exact
        >EN</v-btn>
      </v-toolbar-item>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.main-title{
  font-weight: 600;
}
.links {
  font-weight: 700;
}
.menu-logo {
  width: 60%;
}
.menu-logo-horizontal {
  width: 70%;
}
</style>