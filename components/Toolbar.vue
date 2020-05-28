<template>
  <nav>
    <v-app-bar text app color="blue darken-2" dark>
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase">
        <span class="font-weight-regular">Painel de Controlo</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- Button-LogOut -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text large @click="logout" v-on="on">
            <span class="font-weight-medium">Sair</span>
            <v-icon right>mdi-exit-to-app</v-icon>
          </v-btn>
        </template>
        <span>Terminar sessão</span>
      </v-tooltip>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" link :to="link.route">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-row>
        <v-btn
          depressed
          large
          block
          class="mt-5 mb-2 font-weight-bold"
          dark
          color="pink"
          v-on="on"
          to="/dashboard/account"
        >
          <v-icon medium left>mdi-badge-account-horizontal</v-icon>Perfil
        </v-btn>
      </v-row>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import {auth} from '@/server/firebase'
import Cookie from 'js-cookie'

    export default {
     data(){
         return {
             drawer: false,
             links: [
                 {icon: 'mdi-home', text: 'Inicial', route: '/dashboard/Index'},
                 {icon: 'mdi-account-multiple', text: 'Ficha Pessoal', route: '/dashboard/Clients'},
                 {icon: 'mdi-calendar-text', text: 'Saúde', route: '/dashboard/Health'},
                 {icon: 'mdi-message-draw', text: 'Avaliação Física', route: '/dashboard/Evaluation'},
                 {icon: 'mdi-food-fork-drink', text: 'Nutrição', route: '/dashboard/nutrition'},
                 {icon: 'mdi-calendar-range', text: 'Calendário', route: '/dashboard/Calendar'}
             ]
         }
     },
     methods: {
       async logout() {
         await auth.signOut()
         await Cookie.remove('access_token')

         location.href= '/'
       }
     }   
    }
</script>

<style>
*{
  font-family: 'Muli', sans-serif;
}
</style>