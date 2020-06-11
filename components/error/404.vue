<template>
  <v-app>
    <v-container>
      <v-row no-gutters align="center" justify="center" class="pt-12">
        <v-col cols="12" xs="12" sm="8" md="7" lg="5">
          <v-lazy-image
            alt="Imagem"
            src="https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif"
            src-placeholder="https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy-downsized.gif"
            max-width="450px"
            aspect-ratio="1"
          />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12 text-center">
          <h1 class="title font-weight-medium">{{ pageNotFound }}</h1>
          <v-btn depressed outlined medium color="pink darken-1" class="mt-12" dark to="/">
            <span class="my-btn">Voltar</span>
            <v-icon medium right>mdi-home</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import VLazyImage from 'v-lazy-image'

export default {
  name: 'error-404',
  data () {
    return {
      pageNotFound: 'Página não encontrada.'
    }
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  components: {
    VLazyImage
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
*{
  font-family: 'Muli', sans-serif;
}
</style>
