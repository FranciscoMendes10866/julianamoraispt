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
          <span class="title font-weight-medium">Ficha Pessoal</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-stepper v-model="e1">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1">Info. Pessoal</v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 2" step="2">Localidade</v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 3" step="3">Info. Física</v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="4">Contacto</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <!-- First step -->
                  <v-stepper-content step="1">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="8">
                        <v-text-field
                          prepend-inner-icon="mdi-clipboard-account"
                          label="Nome completo"
                          :error-messages="nameErrors"
                          :counter="3"
                          type="text"
                          v-model="name"
                          required
                          @input="$v.name.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          max-width="290"
                          :close-on-content-click="false"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              prepend-inner-icon="mdi-calendar-range"
                              :value="formattedDate"
                              label="Data de nascimento"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date" no-title>
                            <v-spacer />
                            <v-btn text color="primary" @click="$refs.menu.save(date)">Guardar</v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          prepend-inner-icon="mdi-flag"
                          :error-messages="nationalityErrors"
                          label="Nacionalidade"
                          type="text"
                          v-model="nationality"
                          required
                          @input="$v.nationality.$touch()"
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
                      <v-col cols="12" sm="6" md="8">
                        <v-text-field
                          prepend-inner-icon="mdi-home-variant"
                          :error-messages="addressErrors"
                          label="Morada"
                          v-model="address"
                          required
                          @input="$v.address.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          prepend-inner-icon="mdi-home-group"
                          :error-messages="postCodeErrors"
                          label="Código Postal"
                          v-model="postCode"
                          required
                          @input="$v.postCode.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          prepend-inner-icon="mdi-image-album"
                          :error-messages="naturalErrors"
                          label="Naturalidade"
                          type="text"
                          v-model="natural"
                          required
                          @input="$v.natural.$touch()"
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
                      <v-col cols="12" sm="6" md="7">
                        <h3 class="font-weight-regular grey--text">Sexo</h3>
                        <v-radio-group
                          v-model="sex"
                          @input="$v.sex.$touch()"
                          :error-messages="sexErrors"
                        >
                          <v-radio label="Feminino" value="Feminino"></v-radio>
                          <v-radio label="Masculino" value="Masculino"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          prepend-inner-icon="mdi-arrow-expand-horizontal"
                          :error-messages="weightErrors"
                          suffix="kg"
                          label="Peso"
                          v-model="weight"
                          required
                          @input="$v.weight.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          prepend-inner-icon="mdi-arrow-expand-vertical"
                          :error-messages="heightErrors"
                          suffix="cm"
                          label="Altura"
                          v-model="height"
                          required
                          @input="$v.height.$touch()"
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

                  <!-- Final step -->
                  <v-stepper-content step="4">
                    <v-card class="mb-12" elevation="0">
                      <v-col cols="12" sm="6" md="7">
                        <v-text-field
                          prepend-inner-icon="mdi-cellphone"
                          :error-messages="phoneErrors"
                          label="Telemóvel"
                          type="number"
                          v-model="phone"
                          @input="$v.phone.$touch()"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="7">
                        <v-text-field
                          prepend-inner-icon="mdi-cellphone-information"
                          :error-messages="emergencyErrors"
                          label="Em caso de Emergência"
                          type="number"
                          v-model="emergency"
                          @input="$v.emergency.$touch()"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="8">
                        <v-text-field
                          prepend-inner-icon="mdi-at"
                          :error-messages="emailErrors"
                          label="Email"
                          type="email"
                          v-model="email"
                          @input="$v.email.$touch()"
                          required
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
import dateFormat from 'date-fns/format'
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email, numeric, alpha } from 'vuelidate/lib/validators'
import { db } from '@/server/firebase'

  export default {
    mixins: [validationMixin],
    data() {
        return {
        loading: false,
        dialog: false,
        e1: 1,
        name: '',
        date: null,
        nationality: '',
        address: '',
        postCode: '',
        natural: '',
        sex: '',
        weight: '',
        height: '',
        phone: '',
        emergency: '',
        email: '',
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
            name: this.name,
            date: this.date,
            nationality: this.nationality,
            address: this.address,
            postCode: this.postCode,
            natural: this.natural,
            sex: this.sex,
            weight: this.weight,
            height: this.height,
            phone: this.phone,
            emergency: this.emergency,
            email: this.email
          }

          db.collection('personal').add(stepper).then(() => {
            setTimeout(() => (this.dialog = false), 500)
            this.$emit('dataSent')
          } ),
            this.$v.$reset()
            this.name='',
            this.date='',
            this.nationality='',
            this.address='',
            this.postCode='',
            this.natural='',
            this.sex='',
            this.weight='',
            this.height='',
            this.phone='',
            this.emergency='',
            this.email=''
        }
        }
      },
      validations: {
        name: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(50),
        },
        date: {
          required
        },
        nationality: {
          required,
          alpha,
          minLength: minLength(5),
          maxLength: maxLength(20),
        },
        address: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(40),
        },
        postCode: {
          required
        },
        natural: {
          required,
          alpha,
          minLength: minLength(4),
          maxLength: maxLength(15),
        },
        sex: {
          required
        },
        weight: {
          required,
          numeric
        },
        height: {
          required,
          numeric
        },
        phone: {
          required,
          numeric
        },
        emergency: {
          required,
          numeric
        },
        email: {
          required,
          email
        },
      },
      computed: {
        formattedDate() {
    return this.date ? new Date(this.date).toUTCString().substring(0,16) : '' 
    },
    nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('O nome deve ter no mínimo 3 caracteres.')
        !this.$v.name.maxLength && errors.push('O nome deve ter no máximo 50 caracteres.')
        !this.$v.name.required && errors.push('O nome é obrigatório.')
        return errors
      },
      nationalityErrors () {
        const errors = []
        if (!this.$v.nationality.$dirty) return errors
        !this.$v.nationality.minLength && errors.push('A nacionalidade deve ter no mínimo 3 caracteres.')
        !this.$v.nationality.maxLength && errors.push('A nacionalidade deve ter no máximo 50 caracteres.')
        !this.$v.nationality.required && errors.push('A nacionalidade é obrigatória.')
        !this.$v.nationality.alpha && errors.push('Apenas são aceites letras.')
        return errors
      },
      addressErrors () {
        const errors = []
        if (!this.$v.address.$dirty) return errors
        !this.$v.address.minLength && errors.push('A morada deve ter no mínimo 3 caracteres.')
        !this.$v.address.maxLength && errors.push('A morada deve ter no máximo 50 caracteres.')
        !this.$v.address.required && errors.push('A morada é obrigatória.')
        return errors
      },
      naturalErrors () {
        const errors = []
        if (!this.$v.natural.$dirty) return errors
        !this.$v.natural.minLength && errors.push('A naturalidade deve ter no mínimo 3 caracteres.')
        !this.$v.natural.maxLength && errors.push('A naturalidade deve ter no máximo 50 caracteres.')
        !this.$v.natural.required && errors.push('A naturalidade é obrigatória.')
        !this.$v.natural.alpha && errors.push('Apenas são aceites letras.')
        return errors
      },
      dateErrors () {
        const errors = []
        if (!this.$v.date.$dirty) return errors
        !this.$v.date.required && errors.push('A data é obrigatória.')
        return errors
      },
      sexErrors () {
        const errors = []
        if (!this.$v.sex.$dirty) return errors
        !this.$v.sex.required && errors.push('A escolha do sexo é obrigatória.')
        return errors
      },
      weightErrors () {
        const errors = []
        if (!this.$v.weight.$dirty) return errors
        !this.$v.weight.required && errors.push('O peso é obrigatória.')
        !this.$v.weight.numeric && errors.push('Apenas números são aceites.')
        return errors
      },
      heightErrors () {
        const errors = []
        if (!this.$v.height.$dirty) return errors
        !this.$v.height.required && errors.push('A altura é obrigatória.')
        !this.$v.height.numeric && errors.push('Apenas números são aceites.')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.required && errors.push('O número de telemóvel é obrigatório.')
        !this.$v.phone.numeric && errors.push('Apenas números são aceites.')
        return errors
      },
      emergencyErrors () {
        const errors = []
        if (!this.$v.emergency.$dirty) return errors
        !this.$v.emergency.required && errors.push('Este campo é obrigatório.')
        !this.$v.emergency.numeric && errors.push('Apenas números são aceites.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Deve ser um email válido.')
        !this.$v.email.required && errors.push('O Email é obrigatório.')
        return errors
      },
      postCodeErrors () {
        const errors = []
        if (!this.$v.postCode.$dirty) return errors
        !this.$v.postCode.required && errors.push('O código postal é obrigatório.')
        return errors
      },
  },    
  }
</script>

<style scoped>

</style>