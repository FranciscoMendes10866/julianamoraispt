<template>
  <div>
    <v-bottom-navigation
      shift
      color="pink"
      bottom
      fixed
      class="hidden-md-and-up"
      v-model="bottomNav"
    >
      <v-btn exact value="home" :to="$i18n.path('')">
        <span>{{ $t('links.home') }}</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn exact value="about" :to="$i18n.path('about')">
        <span>{{ $t('links.about') }}</span>
        <v-icon>mdi-account-box</v-icon>
      </v-btn>

      <v-btn exact value="services" :to="$i18n.path('services')">
        <span>{{ $t('links.services') }}</span>
        <v-icon>mdi-toolbox</v-icon>
      </v-btn>

      <v-menu top offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn exact v-on="on" value="menu">
            <span>{{ $t('links.menu') }}</span>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/blog">
            <v-list-item-title>
              <v-icon left>mdi-text-box</v-icon>Blog
            </v-list-item-title>
          </v-list-item>

          <v-list-item :to="$i18n.path('contact')">
            <v-list-item-title>
              <v-icon left>mdi-phone</v-icon>
              {{ $t('links.contact') }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item to="/login">
            <v-list-item-title>
              <v-icon left>mdi-account</v-icon>
              {{ $t('links.login') }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              depressed
              color="blue"
              v-if="$i18n.locale === 'pt'"
              :to="`/en` + $route.fullPath"
              active-class="none"
              exact
            ><v-icon left>mdi-translate</v-icon>PT</v-btn>
            <v-btn
              text
              depressed
              color="blue"
              v-else
              :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
              active-class="none"
              exact
            ><v-icon left>mdi-translate</v-icon>EN</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-bottom-navigation>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>