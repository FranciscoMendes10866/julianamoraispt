<template>
  <div>
    <v-container>
      <!-- Navbar -->
      <navbar />

      <!-- Hero Landing -->

      <v-row no-gutters align="center" justify="space-around" class="my-mt">
        <v-col cols="12" xs="12" sm="12" md="6" lg="5">
          <h4
            class="subtitle-1 small-title font-weight-regular first"
          >{{ $t('about.sub_title_01') }}</h4>
          <h1 class="mt-1 display-1 font-weight-regular my-title">{{ $t('about.main_title_01') }}</h1>
          <p class="mt-6 title my-p font-weight-regular">{{ $t('about.body_01') }}</p>
          <v-btn depressed text large color="pink darken-1" dark class="mt-8" to="/contact">
            <span class="my-btn">{{ $t('about.button') }}</span>
            <v-icon right small>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="5">
          <v-lazy-image
           width="450" 
          alt="Imagem"
           :src="require('@/assets/img/4.webp')" 
           src-placeholder="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
           aspect-ratio="1" />
        </v-col>
      </v-row>

      <!-- First section -->

      <v-row no-gutters align="center" justify="space-around" class="my-section">
        <v-col cols="12" xs="12" sm="12" md="6" lg="5">
          <v-lazy-image 
          width="450" 
          alt="Imagem"
          :src="require('@/assets/img/5.webp')" 
          src-placeholder="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
          aspect-ratio="1" />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="5">
          <h4
            class="subtitle-1 small-title font-weight-regular second"
          >{{ $t('about.sub_title_02') }}</h4>
          <h1 class="mt-1 display-1 font-weight-regular my-title">{{ $t('about.main_title_02') }}</h1>
          <p class="mt-6 title my-p font-weight-regular" v-html="$t('about.body_02')"></p>
          <v-btn depressed text large color="pink darken-1" dark class="mt-8" to="/contact">
            <span class="my-btn">{{ $t('about.button') }}</span>
            <v-icon right small>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- Second section -->

      <v-row no-gutters align="center" justify="space-around" class="my-section">
        <v-col cols="12" xs="12" sm="12" md="6" lg="5">
          <h4
            class="subtitle-1 small-title font-weight-regular third"
          >{{ $t('about.sub_title_03') }}</h4>
          <h1 class="mt-1 display-1 font-weight-regular my-title">{{ $t('about.main_title_03') }}</h1>
          <p class="mt-6 title my-p font-weight-regular">{{ $t('about.body_03') }}</p>
          <v-btn depressed text large color="pink darken-1" dark class="mt-8" to="/contact">
            <span class="my-btn">{{ $t('about.button') }}</span>
            <v-icon right small>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="5">
          <v-lazy-image
           width="450" 
          alt="Imagem"
           :src="require('@/assets/img/6.webp')" 
           src-placeholder="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
           aspect-ratio="1" />
        </v-col>
      </v-row>

      <!-- FAQ -->
      <v-row no-gutters align="center" justify="space-around" class="my-section py-12 px-12">
        <v-col cols="12" xs="12" sm="12" md="6" lg="7">
          <h1
            class="mt-1 display-1 font-weight-regular my-title text-center"
          >{{ $t('about.title') }}</h1>
          <p class="mt-5 text-center" v-html="$t('about.body')"></p>
          <FAQ class="mt-12 mb-12" />
        </v-col>
      </v-row>
    </v-container>
    <Footer class="mt-12" />
    <BottomNav />
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import VLazyImage from 'v-lazy-image'
import BottomNav from '@/components/BottomNav'

export default {
    components: {
      navbar,
      VLazyImage,
      BottomNav,
      Footer: () => import('@/components/Footer'),
      FAQ: () => import('@/components/FAQ')
    },
    head() {
      return {
        title: this.$t('about.pageName')
      }
    }
  }
</script>

<style scoped>
.small-title{
  font-family: 'Muli', sans-serif !important;
}
.my-title{
  font-family: 'Muli', sans-serif !important;
  line-height: 55px;
}
.my-p{
  font-family: 'Muli', sans-serif !important;
  line-height: 41px;
}
.first{
  color: #00B9C5;
}
.second{
  color: #9100C5;
}
.third{
  color: #00C566;
}
.fourth{
  color: #FF7A00;
}
.percentagem{
  color: #D81B60;
}
</style>