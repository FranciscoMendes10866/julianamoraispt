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
          <span class="title font-weight-medium">A sua saúde</span>
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

                  <v-stepper-step :complete="e1 > 3" step="3"></v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 4" step="4"></v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="5"></v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <!-- First step -->
                  <v-stepper-content step="1">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3
                          class="font-weight-regular grey--text"
                        >Tem antecedentes familiares com problemas de saúde?</h3>
                        <v-radio-group
                          v-model="primeira"
                          @input="$v.primeira.$touch()"
                          :error-messages="primeiraErrors"
                        >
                          <v-radio label="Sim" value="Sim"></v-radio>
                          <v-radio label="Não" value="Não"></v-radio>
                        </v-radio-group>
                        <v-text-field
                          prepend-inner-icon="mdi-pencil"
                          label="Se sim, quais?"
                          type="text"
                          v-model="primeiraInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">
                          O seu médico alguma vez lhe disse que tinha complicações cardiovasculares,
                          recomendando-lhe apenas exercício físico mediante supervisão médica?
                        </h3>
                        <v-radio-group
                          v-model="segunda"
                          @input="$v.segunda.$touch()"
                          :error-messages="segundaErrors"
                        >
                          <v-radio label="Sim" value="Sim"></v-radio>
                          <v-radio label="Não" value="Não"></v-radio>
                        </v-radio-group>
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
                          class="font-weight-regular grey--text"
                        >Alguma vez sentiu dores no peito antes e durante a atividade física?</h3>
                        <v-radio-group
                          v-model="terceira"
                          @input="$v.terceira.$touch()"
                          :error-messages="terceiraErrors"
                        >
                          <v-radio label="Sim" value="Sim"></v-radio>
                          <v-radio label="Não" value="Não"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">
                          Durante o último mês, alguma vez teve dores no peito sem ser na
                          prática de atividade física?
                        </h3>
                        <v-radio-group
                          v-model="quarta"
                          @input="$v.quarta.$touch()"
                          :error-messages="quartaErrors"
                        >
                          <v-radio label="Sim" value="Sim"></v-radio>
                          <v-radio label="Não" value="Não"></v-radio>
                        </v-radio-group>
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

                  <!-- Third step -->
                  <v-stepper-content step="3">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">
                          Alguma vez perdeu o equilíbrio devido a tonturas ou alguma vez
                          perdeu a consciência?
                        </h3>
                        <v-radio-group
                          v-model="quinta"
                          @input="$v.quinta.$touch()"
                          :error-messages="quintaErrors"
                        >
                          <v-radio label="Sim" value="Sim"></v-radio>
                          <v-radio label="Não" value="Não"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">
                          Tem problemas ósseos ou articulares que possam piorar com
                          o início de um Programa de Atividade Física?
                        </h3>
                        <v-radio-group
                          v-model="sexta"
                          @input="$v.sexta.$touch()"
                          :error-messages="sextaErrors"
                        >
                          <v-radio label="Sim" value="Sim"></v-radio>
                          <v-radio label="Não" value="Não"></v-radio>
                        </v-radio-group>
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
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 4"
                    >Seguinte</v-btn>
                  </v-stepper-content>
                  <!-- End Third step -->

                  <!-- Fourth step -->
                  <v-stepper-content step="4">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3
                          class="font-weight-regular grey--text"
                        >Está a tomar algum medicamento para controlar a pressão arterial?</h3>
                        <v-radio-group
                          v-model="setima"
                          @input="$v.setima.$touch()"
                          :error-messages="setimaErrors"
                        >
                          <v-radio label="Sim" value="Sim"></v-radio>
                          <v-radio label="Não" value="Não"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3
                          class="font-weight-regular grey--text"
                        >Conhece alguma outra razão pela qual não deveria praticar exercício físico?</h3>
                        <v-radio-group
                          v-model="oitava"
                          @input="$v.oitava.$touch()"
                          :error-messages="oitavaErrors"
                        >
                          <v-radio label="Sim" value="Sim"></v-radio>
                          <v-radio label="Não" value="Não"></v-radio>
                        </v-radio-group>
                        <v-text-field
                          prepend-inner-icon="mdi-pencil"
                          label="Se sim, qual?"
                          type="text"
                          v-model="oitavaInput"
                        ></v-text-field>
                      </v-col>
                    </v-card>

                    <v-btn
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 3"
                    >Anterior</v-btn>
                    <v-btn
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 5"
                    >Seguinte</v-btn>
                  </v-stepper-content>
                  <!-- End Fourth step -->

                  <!-- Final step -->
                  <v-stepper-content step="5">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3
                          class="font-weight-regular grey--text"
                        >Qual o objetivo que o cliente pretende alcançar com a minha supersivão?</h3>
                        <v-select
                          v-model="objetivo"
                          :items="items"
                          :error-messages="objetivoErrors"
                          label="Objectivo:"
                          required
                          @input="$v.objetivo.$touch()"
                        ></v-select>
                        <v-text-field
                          :error-messages="clienteErrors"
                          prepend-inner-icon="mdi-clipboard-account"
                          label="Nome do cliente"
                          type="text"
                          v-model="cliente"
                          @input="$v.cliente.$touch()"
                        ></v-text-field>
                      </v-col>
                    </v-card>

                    <v-btn
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 4"
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
        primeira: '',
        primeiraInput: '',
        segunda: '',
        terceira: '',
        quarta: '',
        quinta: '',
        sexta: '',
        setima: '',
        oitava: '',
        oitavaInput: '',
        cliente:'',
        objetivo: null,
        items: [
        'Condição Física Geral',
        'Perda de Peso',
        'Hipertrofia',
        'Melhora na saúde'
        ],
        loading:false
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
            primeira: this.primeira,
            primeiraInput: this.primeiraInput,
            segunda: this.segunda,
            terceira: this.terceira,
            quarta: this.quarta,
            quinta: this.quinta,
            sexta: this.sexta,
            setima: this.setima,
            oitava: this.oitava,
            oitavaInput: this.oitavaInput,
            objetivo: this.objetivo,
            cliente: this.cliente
          }

          db.collection('health').add(stepper).then(() => {
            setTimeout(() => (this.dialog = false), 500)
            this.$emit('dataSent')
          } ),
            this.$v.$reset()
            this.primeira='',
            this.primeiraInput='',
            this.segunda='',
            this.terceira='',
            this.quarta='',
            this.quinta='',
            this.sexta='',
            this.setima='',
            this.oitava='',
            this.objetivo='',
            this.cliente='',
            this.oitavaInput=''
        }
        }
      },
      validations: {
        primeira: {
            required
        },
        segunda: {
            required
        },
        terceira: {
            required
        },
        quarta: {
            required
        },
        quinta: {
            required
        },
        sexta: {
            required
        },
        setima: {
            required
        },
        oitava: {
            required
        },
        objetivo: {
            required
        },
        cliente: {
          required
        }
      },
      computed: {
        primeiraErrors () {
        const errors = []
        if (!this.$v.primeira.$dirty) return errors
        !this.$v.primeira.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      segundaErrors () {
        const errors = []
        if (!this.$v.segunda.$dirty) return errors
        !this.$v.segunda.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      terceiraErrors () {
        const errors = []
        if (!this.$v.terceira.$dirty) return errors
        !this.$v.terceira.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      quartaErrors () {
        const errors = []
        if (!this.$v.quarta.$dirty) return errors
        !this.$v.quarta.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      quintaErrors () {
        const errors = []
        if (!this.$v.quinta.$dirty) return errors
        !this.$v.quinta.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      sextaErrors () {
        const errors = []
        if (!this.$v.sexta.$dirty) return errors
        !this.$v.sexta.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      setimaErrors () {
        const errors = []
        if (!this.$v.setima.$dirty) return errors
        !this.$v.setima.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      oitavaErrors () {
        const errors = []
        if (!this.$v.oitava.$dirty) return errors
        !this.$v.oitava.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      objetivoErrors () {
        const errors = []
        if (!this.$v.objetivo.$dirty) return errors
        !this.$v.objetivo.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      clienteErrors () {
        const errors = []
        if (!this.$v.cliente.$dirty) return errors
        !this.$v.cliente.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      }
}


</script>

<style scoped>

</style>