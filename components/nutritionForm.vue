<template>
  <div>
    <!-- Button -->
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          elevation="24"
          bottom
          color="pink"
          dark
          fab
          fixed
          right
          x-large
          @click.stop="dialog = true"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Inserir dados</span>
    </v-tooltip>

    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="560px">
      <v-card>
        <v-card-title>
          <span class="title font-weight-medium"></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-stepper v-model="e1">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3"></v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <!-- First step -->
                  <v-stepper-content step="1">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3
                          class="font-weight-regular grey--text mb-6"
                        >Formulário de preenchimento de dados sobre as Refeições a serem tomadas durante a manhã:</h3>
                        <v-textarea
                          v-model="pequenoAlmoco"
                          @input="$v.pequenoAlmoco.$touch()"
                          :error-messages="pequenoAlmocoErrors"
                          clearable
                          clear-icon="mdi-delete-forever"
                          outlined
                          rows="6"
                          label="Pequeno Almoço"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <v-textarea
                          v-model="lancheManha"
                          @input="$v.lancheManha.$touch()"
                          :error-messages="lancheManhaErrors"
                          clearable
                          clear-icon="mdi-delete-forever"
                          outlined
                          rows="6"
                          label="Lanche da manhã"
                        ></v-textarea>
                      </v-col>
                    </v-card>

                    <v-btn
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 2"
                    >Seguinte</v-btn>
                  </v-stepper-content>
                  <!-- End First step -->

                  <!-- Second step -->
                  <v-stepper-content step="2">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3
                          class="font-weight-regular grey--text mb-6"
                        >Formulário de preenchimento de dados sobre as Refeições a serem tomadas durante a tarde:</h3>
                        <v-textarea
                          v-model="almoco"
                          @input="$v.almoco.$touch()"
                          :error-messages="almocoErrors"
                          clearable
                          clear-icon="mdi-delete-forever"
                          outlined
                          rows="6"
                          label="Almoço"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <v-textarea
                          v-model="lancheTarde"
                          @input="$v.lancheTarde.$touch()"
                          :error-messages="lancheTardeErrors"
                          clearable
                          clear-icon="mdi-delete-forever"
                          outlined
                          rows="6"
                          label="Lanche da tarde"
                        ></v-textarea>
                      </v-col>
                    </v-card>

                    <v-btn
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 1"
                    >Anterior</v-btn>
                    <v-btn
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 3"
                    >Seguinte</v-btn>
                  </v-stepper-content>
                  <!-- End Second step -->

                  <!-- Final step -->
                  <v-stepper-content step="3">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3
                          class="font-weight-regular grey--text mb-6"
                        >Formulário de preenchimento de dados sobre as Refeições a serem tomadas durante a noite:</h3>
                        <v-textarea
                          v-model="jantar"
                          @input="$v.jantar.$touch()"
                          :error-messages="jantarErrors"
                          clearable
                          clear-icon="mdi-delete-forever"
                          outlined
                          rows="6"
                          label="Jantar"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field
                          v-model="cliente"
                          @input="$v.cliente.$touch()"
                          :error-messages="clienteErrors"
                          prepend-inner-icon="mdi-pencil"
                          label="Nome do Cliente"
                          type="text"
                        ></v-text-field>
                      </v-col>
                    </v-card>

                    <v-btn
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 2"
                    >Anterior</v-btn>
                    <v-btn
                      :loading="loading"
                      medium
                      color="blue darken-1"
                      dark
                      class="font-weight-bold"
                      @click.prevent="submit"
                    >Guardar</v-btn>
                  </v-stepper-content>
                  <!-- End Final step -->
                </v-stepper-items>
              </v-stepper>
            </v-row>
          </v-container>
          <small>* Todos os campos são obrigatórios.</small>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { db } from '@/server/firebase'

export default {
    mixins: [validationMixin],
    data(){
        return {
            dialog: false,
            e1: 1,
            pequenoAlmoco: '',
            lancheManha: '',
            almoco: '',
            lancheTarde: '',
            jantar: '',
            cliente: '',
            loading: false
        }
    },
      methods: {
        submit() {
          this.$v.$touch()
         if(this.$v.$invalid){
        this.submitstatus = 'FAIL'
        } else {
          this.submitstatus = 'OK',
          this.loading = true,
          setTimeout(() => (this.loading = false), 500)
          const stepper = {
            pequenoAlmoco: this.pequenoAlmoco,
            lancheManha: this.lancheManha,
            almoco: this.almoco,
            lancheTarde: this.lancheTarde,
            jantar: this.jantar,
            cliente: this.cliente
          }

          db.collection('nutrition').add(stepper).then(() => {
            setTimeout(() => (this.dialog = false), 500)
            this.$emit('dataSent')
          } ),
            this.$v.$reset()
            this.pequenoAlmoco='',
            this.lancheManha='',
            this.almoco='',
            this.lancheTarde='',
            this.jantar='',
            this.cliente=''
        }
        }
      },
      validations: {
          pequenoAlmoco: {
              required
          },
          lancheManha: {
              required
          },
          almoco: {
              required
          },
          lancheTarde: {
              required
          },
          jantar:{
              required
          },
          cliente: {
              required
          }
      },
      computed: {
      pequenoAlmocoErrors () {
        const errors = []
        if (!this.$v.pequenoAlmoco.$dirty) return errors
        !this.$v.pequenoAlmoco.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      lancheManhaErrors () {
        const errors = []
        if (!this.$v.lancheManha.$dirty) return errors
        !this.$v.lancheManha.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      almocoErrors () {
        const errors = []
        if (!this.$v.almoco.$dirty) return errors
        !this.$v.almoco.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      lancheTardeErrors () {
        const errors = []
        if (!this.$v.lancheTarde.$dirty) return errors
        !this.$v.lancheTarde.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      jantarErrors () {
        const errors = []
        if (!this.$v.jantar.$dirty) return errors
        !this.$v.jantar.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      clienteErrors () {
        const errors = []
        if (!this.$v.cliente.$dirty) return errors
        !this.$v.cliente.required && errors.push('Este campo é obrigatório.')
        return errors
      }
    }
}
</script>