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
    <v-dialog v-model="dialog" max-width="370px">
      <v-card>
        <v-card-title>
          <span class="title font-weight-medium">Avaliação Física</span>
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

                  <v-stepper-step :complete="e1 > 5" step="5"></v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="6"></v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <!-- First step -->
                  <v-stepper-content step="1">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Gordura corporal</h3>
                        <v-text-field
                          :error-messages="gorduraInputErrors"
                          @input="$v.gorduraInput.$touch()"
                          suffix="%"
                          type="text"
                          v-model="gorduraInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Massa muscular</h3>
                        <v-text-field
                          :error-messages="muscularInputErrors"
                          @input="$v.muscularInput.$touch()"
                          suffix="kg"
                          type="text"
                          v-model="muscularInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Massa óssea</h3>
                        <v-text-field
                          :error-messages="osseaInputErrors"
                          @input="$v.osseaInput.$touch()"
                          suffix="kg"
                          type="text"
                          v-model="osseaInput"
                        ></v-text-field>
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
                        <h3 class="font-weight-regular grey--text">IMC</h3>
                        <v-text-field
                          :error-messages="imcInputErrors"
                          @input="$v.imcInput.$touch()"
                          suffix="%"
                          type="text"
                          v-model="imcInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Metabolismo basal</h3>
                        <v-text-field
                          :error-messages="basalInputErrors"
                          @input="$v.basalInput.$touch()"
                          type="text"
                          v-model="basalInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Idade metabólica</h3>
                        <v-text-field
                          :error-messages="idadeInputErrors"
                          @input="$v.idadeInput.$touch()"
                          type="text"
                          v-model="idadeInput"
                        ></v-text-field>
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
                        <h3 class="font-weight-regular grey--text">Água</h3>
                        <v-text-field
                          :error-messages="aguaInputErrors"
                          @input="$v.aguaInput.$touch()"
                          suffix="%"
                          type="text"
                          v-model="aguaInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Nível de gordura visceral</h3>
                        <v-text-field
                          :error-messages="visceralInputErrors"
                          @input="$v.visceralInput.$touch()"
                          suffix="%"
                          type="text"
                          v-model="visceralInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Peitoral</h3>
                        <v-text-field
                          :error-messages="peitoralInputErrors"
                          @input="$v.peitoralInput.$touch()"
                          suffix="cm"
                          type="text"
                          v-model="peitoralInput"
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
                        <h3 class="font-weight-regular grey--text">Quadril</h3>
                        <v-text-field
                          :error-messages="quadrilInputErrors"
                          @input="$v.quadrilInput.$touch()"
                          suffix="cm"
                          type="text"
                          v-model="quadrilInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Cintura</h3>
                        <v-text-field
                          :error-messages="cinturaInputErrors"
                          @input="$v.cinturaInput.$touch()"
                          suffix="cm"
                          type="text"
                          v-model="cinturaInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Coxa</h3>
                        <v-text-field
                          :error-messages="coxaInputErrors"
                          @input="$v.coxaInput.$touch()"
                          suffix="cm"
                          type="text"
                          v-model="coxaInput"
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

                  <!-- Fifth step -->
                  <v-stepper-content step="5">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Perna</h3>
                        <v-text-field
                          :error-messages="pernaInputErrors"
                          @input="$v.pernaInput.$touch()"
                          suffix="cm"
                          type="text"
                          v-model="pernaInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Braço normal</h3>
                        <v-text-field
                          :error-messages="normalInputErrors"
                          @input="$v.normalInput.$touch()"
                          suffix="cm"
                          type="text"
                          v-model="normalInput"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Braço contraído</h3>
                        <v-text-field
                          :error-messages="contraidoInputErrors"
                          @input="$v.contraidoInput.$touch()"
                          suffix="cm"
                          type="text"
                          v-model="contraidoInput"
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
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 6"
                    >Seguinte</v-btn>
                  </v-stepper-content>
                  <!-- End fifth step -->

                  <!-- Final step -->
                  <v-stepper-content step="6">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="12">
                        <h3 class="font-weight-regular grey--text">Nome do Cliente</h3>
                        <v-text-field
                          :error-messages="clienteInputErrors"
                          @input="$v.clienteInput.$touch()"
                          type="text"
                          v-model="clienteInput"
                        ></v-text-field>
                      </v-col>
                    </v-card>

                    <v-btn
                      medium
                      color="pink darken-1"
                      outlined
                      class="font-weight-bold"
                      @click="e1 = 5"
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
            loading: false,
            dialog: false,
            e1: 1,
            gorduraInput: '',
            muscularInput: '',
            osseaInput: '',
            imcInput: '',
            basalInput: '',
            idadeInput: '',
            aguaInput: '',
            visceralInput: '',
            peitoralInput: '',
            quadrilInput: '',
            cinturaInput: '',
            coxaInput: '',
            pernaInput: '',
            normalInput: '',
            contraidoInput: '',
            clienteInput: ''
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
            gorduraInput: this.gorduraInput,
            muscularInput: this.muscularInput,
            osseaInput: this.osseaInput,
            imcInput: this.imcInput,
            basalInput: this.basalInput,
            idadeInput: this.idadeInput,
            aguaInput: this.aguaInput,
            visceralInput: this.visceralInput,
            peitoralInput: this.visceralInput,
            quadrilInput: this.quadrilInput,
            cinturaInput: this.cinturaInput,
            coxaInput: this.coxaInput,
            pernaInput: this.pernaInput,
            normalInput: this.normalInput,
            contraidoInput: this.contraidoInput,
            clienteInput: this.clienteInput
          }

          db.collection('evaluation').add(stepper).then(() => {
            setTimeout(() => (this.dialog = false), 500)
            this.$emit('dataSent')
          } ),
            this.$v.$reset()
            this.gorduraInput='',
            this.muscularInput='',
            this.osseaInput='',
            this.imcInput='',
            this.basalInput='',
            this.idadeInput='',
            this.aguaInput='',
            this.visceralInput='',
            this.peitoralInput='',
            this.quadrilInput='',
            this.cinturaInput='',
            this.coxaInput='',
            this.pernaInput='',
            this.normalInput='',
            this.contraidoInput='',
            this.clienteInput=''
        }
      }
    },
    validations: {
        gorduraInput: {
            required
        },
        muscularInput: {
            required
        },
        osseaInput: {
            required
        },
        imcInput: {
            required
        },
        basalInput: {
            required
        },
        idadeInput: {
            required
        },
        aguaInput: {
            required
        },
        visceralInput: {
            required
        },
        peitoralInput: {
            required
        },
        quadrilInput: {
            required
        },
        cinturaInput: {
            required
        },
        coxaInput: {
            required
        },
        pernaInput: {
            required
        },
        normalInput: {
            required
        },
        contraidoInput: {
            required
        },
        clienteInput: {
          required
        }
    },
    computed: {
        gorduraInputErrors () {
        const errors = []
        if (!this.$v.gorduraInput.$dirty) return errors
        !this.$v.gorduraInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      muscularInputErrors () {
        const errors = []
        if (!this.$v.muscularInput.$dirty) return errors
        !this.$v.muscularInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      osseaInputErrors () {
        const errors = []
        if (!this.$v.osseaInput.$dirty) return errors
        !this.$v.osseaInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      imcInputErrors () {
        const errors = []
        if (!this.$v.imcInput.$dirty) return errors
        !this.$v.imcInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      basalInputErrors () {
        const errors = []
        if (!this.$v.basalInput.$dirty) return errors
        !this.$v.basalInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      idadeInputErrors () {
        const errors = []
        if (!this.$v.idadeInput.$dirty) return errors
        !this.$v.idadeInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      aguaInputErrors () {
        const errors = []
        if (!this.$v.aguaInput.$dirty) return errors
        !this.$v.aguaInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      visceralInputErrors () {
        const errors = []
        if (!this.$v.visceralInput.$dirty) return errors
        !this.$v.visceralInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      peitoralInputErrors () {
        const errors = []
        if (!this.$v.peitoralInput.$dirty) return errors
        !this.$v.peitoralInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      quadrilInputErrors () {
        const errors = []
        if (!this.$v.quadrilInput.$dirty) return errors
        !this.$v.quadrilInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      cinturaInputErrors () {
        const errors = []
        if (!this.$v.cinturaInput.$dirty) return errors
        !this.$v.cinturaInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      coxaInputErrors () {
        const errors = []
        if (!this.$v.coxaInput.$dirty) return errors
        !this.$v.coxaInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      pernaInputErrors () {
        const errors = []
        if (!this.$v.pernaInput.$dirty) return errors
        !this.$v.pernaInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      normalInputErrors () {
        const errors = []
        if (!this.$v.normalInput.$dirty) return errors
        !this.$v.normalInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      contraidoInputErrors () {
        const errors = []
        if (!this.$v.contraidoInput.$dirty) return errors
        !this.$v.contraidoInput.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      clienteInputErrors () {
        const errors = []
        if (!this.$v.clienteInput.$dirty) return errors
        !this.$v.clienteInput.required && errors.push('Este campo é obrigatório.')
        return errors
      }
    }
}
</script>