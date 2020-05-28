<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" xs="12" sm="8" md="4" lg="4">
            <v-card class="elevation-24">
              <v-toolbar color="blue darken-1" dark flat>
                <v-toolbar-title>Entre na sua conta</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="account.email"
                    label="O seu email"
                    name="login"
                    prepend-icon="mdi-account-circle"
                    type="text"
                  />

                  <v-text-field
                    v-model="account.password"
                    label="A sua palavra passe"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn depressed text medium color="pink darken-1" dark to="/">
                  <v-icon medium>mdi-chevron-left</v-icon>
                  <span class="my-btn">Voltar</span>
                </v-btn>
                <v-spacer />
                <v-btn depressed outlined large color="blue darken-1" @click.prevent="login">
                  <span class="small-title my-btn">
                    Entrar
                    <v-icon small right>mdi-shield-check</v-icon>
                  </span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      account: {
        email: '',
        password: ''
      }
    }),
  methods: {
    login() {
      this.$store.dispatch('users/login', this.account)
      .then(() => {this.$router.push('/dashboard/Index')})
      .catch(err => error)
    }
  },
}
</script>


<style>
.my-btn{
  font-weight: 800;
}
.small-title{
  font-family: 'Muli', sans-serif !important;
}
</style>