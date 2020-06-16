<template>
  <div>
    <div class="progress-container it-is-fixed">
      <div class="progress-bar" id="myBar"></div>
    </div>
    <v-container>
      <!-- Navbar -->
      <navbar />
      <!-- Button phone-Tablet -->
      <v-btn
        color="pink"
        fab
        bottom
        right
        fixed
        medium
        dark
        class="margin-bottom hidden-md-and-up"
        :to="`/blog`"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <!-- Button Tablet-Desktop -->
      <v-btn
        depressed
        text
        large
        color="pink darken-1"
        dark
        class="my-btn m-r-70 it-is-fixed hidden-sm-and-down"
        :to="`/blog`"
      >
        <v-icon left small>mdi-arrow-left</v-icon>
        <span class="my-btn">Voltar</span>
      </v-btn>

      <v-row no-gutters align="center" justify="center" class="contact">
        <v-col cols="12" xs="12" sm="9" md="8" lg="5">
          <h1
            class="display-2 font-weight-regular small-title text-center"
            v-if="post"
          >{{ post.title }}</h1>
          <p class="my-p title font-weight-medium" v-if="post">{{ post.body }}</p>
          <p class="my-p title font-weight-medium" v-if="post">{{ post.body1 }}</p>
          <p class="my-p title font-weight-medium" v-if="post">{{ post.body2 }}</p>
          <p class="my-p title font-weight-medium" v-if="post">{{ post.body3 }}</p>
          <p class="my-p title font-weight-medium" v-if="post">{{ post.body4 }}</p>
        </v-col>
      </v-row>

      <v-row no-gutters align="center" justify="space-around" class="mt-4">
        <v-col cols="12" xs="12" sm="9" md="8" lg="5">
          <social-sharing url="https://julianamoraispt.herokuapp.com/" inline-template>
            <div>
              <network network="facebook">
                <v-btn depressed text small color="blue darken-2" dark>
                  <span class="my-btn">facebook</span>
                </v-btn>
              </network>
              <network network="linkedin">
                <v-btn depressed text small color="indigo darken-4" dark>
                  <span class="my-btn">linkedin</span>
                </v-btn>
              </network>

              <network network="twitter">
                <v-btn depressed text small color="blue darken-2" dark>
                  <span class="my-btn">twitter</span>
                </v-btn>
              </network>

              <network network="whatsapp">
                <v-btn depressed text small color="teal darken-1" dark>
                  <span class="my-btn">whatsapp</span>
                </v-btn>
              </network>
            </div>
          </social-sharing>
        </v-col>
      </v-row>
    </v-container>
    <Footer class="margin-top" />
    <BottomNav />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import navbar from '@/components/Navbar'
import BottomNav from '@/components/BottomNav'





// When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }




export default {
    head() {
      return {
        title: 'Blog Post'
      }
    },
    apollo: {
        post: {
            query: gql`query Post($slug: String!){
                post(filter: { slug: {
                    matches: { pattern: $slug }
                }}) {
                    title
                    body
                    body1
                    body2
                    body3
                    body4
                }
            }`,
            prefetch({route}) {
                return {
                    slug: route.params.slug
                }
            },
            variables() {
                return {
                    slug: this.$route.params.slug
                }
            }
        }
    },
  components: {
      navbar,
      Footer: () => import('@/components/Footer'),
      BottomNav
  }
}
</script>

<style scoped>
.contact{
    margin-top: 200px;
}
.small-title{
  font-family: 'Muli', sans-serif !important;
  line-height: 78px;
}

.my-p{
  font-family: 'Muli', sans-serif !important;
  line-height: 32px;
  margin-top: 110px;
  color: #455A64;
}
.m-r-70 {
    margin-left: 10px;
    margin-top: 150px;
}
.it-is-fixed {
    position: fixed;
    z-index: 1;
    top: 0;
}
.progress-container {
    width: 100%;
    height: 5px;
    background: #E3F2FD;
}
  
.progress-bar {
    height: 5px;
    background: #42A5F5;
    width: 0%;
}
.margin-top{
  margin-top: 150px;
}
.margin-bottom {
  margin-bottom: 60px;
}
</style>