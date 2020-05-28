<template>
  <div>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('faq.firstQuestion') }}</v-expansion-panel-header>
          <v-expansion-panel-content>{{ $t('faq.firstAnswer') }}</v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('faq.secondQuestion') }}</v-expansion-panel-header>
          <v-expansion-panel-content>{{ $t('faq.secondAnswer') }}</v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('faq.thirdQuestion') }}</v-expansion-panel-header>
          <v-expansion-panel-content>{{ $t('faq.thirdAnswer') }}</v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('faq.fourthQuestion') }}</v-expansion-panel-header>
          <v-expansion-panel-content>{{ $t('faq.fourthAnswer') }}</v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('faq.fifthQuestion') }}</v-expansion-panel-header>
          <v-expansion-panel-content>{{ $t('faq.fifthAnswer') }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
    export default {
        head() {
      return {
        title: this.$t('faq.pageName')
      }
    }
    }
</script>

<style scoped>

</style>