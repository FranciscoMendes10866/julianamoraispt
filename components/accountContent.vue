<template>
  <div>
    <v-snackbar class="mt-6" v-model="password" :timeout="8000" top color="success">
      <span>Palavra passe alterada com sucesso.</span>
      <v-btn text dark color="white" @click="password = false">Fechar</v-btn>
    </v-snackbar>

    <v-snackbar class="mt-6" v-model="email" :timeout="8000" top color="success">
      <span>Email alterado com sucesso.</span>
      <v-btn text dark color="white" @click="email = false">Fechar</v-btn>
    </v-snackbar>

    <!--  -->
    <v-content>
      <v-row justify="center" align="center" class="mb-12 mt-12">
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="mb-12 mt-12">
          <v-card class="mx-auto" max-width="700" outlined>
            <v-tabs >
              <v-tab>
                <v-icon left>mdi-lock</v-icon>
                <span class="font-weight-bold">Palavra Passe</span>
              </v-tab>
              <v-tab>
                <v-icon left>mdi-email</v-icon>
                <span class="font-weight-bold">Mudar Email</span>
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <!-- component -->
                    <resetPassword @passwordChanged="password = true" />
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <!-- component -->
                    <resetEmail @emailChanged="email = true" />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>

<script>
import resetPassword from '@/components/resetPassword'
import resetEmail from '@/components/resetEmail'

    export default {
          data() {
            return {
              password: false,
              email: false
            }
          },
        components:{
          resetPassword,
          resetEmail
        }
    }
</script>

<style scoped>
*{
  font-family: 'Muli', sans-serif !important;
}
</style>