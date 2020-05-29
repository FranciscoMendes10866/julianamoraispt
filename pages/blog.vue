<template>
  <div>
    <v-container>
      <!-- Navbar -->
      <navbar />

      <v-row no-gutters align="center" justify="center" class="contact">
        <h1 class="display-2 font-weight-regular small-title">Blog</h1>
      </v-row>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12" xs="12" sm="6" md="6" lg="5">
          <v-card
            elevation="0"
            outlined
            rounded
            class="mx-auto mt-12"
            v-for="(post, index) in allPosts"
            :key="index"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="mt-2 display-1 font-weight-regular small-title"
                >{{ post.title }}</v-list-item-title>
                <v-list-item-title class="mt-8 my-p title font-weight-medium">
                  <span class="my-p title font-weight-bold">Tópico:&nbsp;</span>
                  {{ post.field }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn
                depressed
                text
                large
                color="pink darken-1"
                dark
                class="mt-2"
                :to="`/posts/${post.slug}`"
              >
                <span class="my-btn">Ler artigo</span>
                <v-icon right small>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer class="margin-top" />
    <BottomNav />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import navbar from '../components/Navbar'
import BottomNav from '@/components/BottomNav'

export default {
    head() {
      return {
        title: 'Blog'
      }
    },
  apollo: {
    allPosts: gql`{
      allPosts {
        title
        field
        body
        body1
        body2
        body3
        body4
        slug
      }
    }`
  },
  components: {
      navbar,
      BottomNav,
      Footer: () => import('@/components/Footer')
  }
}
</script>

<style scoped>
.contact{
    margin-top: 140px;
}
.small-title{
  font-family: 'Muli', sans-serif !important;
}

.my-p{
  font-family: 'Muli', sans-serif !important;
  line-height: 26px;
}
.margin-top{
  margin-top: 150px;
}
</style>