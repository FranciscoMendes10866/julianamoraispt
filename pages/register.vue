<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-24">
              <v-toolbar color="blue darken-1" dark flat>
                <v-toolbar-title>Crie a sua conta</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    :error-messages="emailErrors"
                    v-model="email"
                    label="O seu email"
                    prepend-icon="mdi-account-circle"
                    type="text"
                    @input="$v.email.$touch()"
                    required
                  />

                  <v-text-field
                    :error-messages="passwordErrors"
                    v-model="password"
                    :counter="6"
                    label="A sua palavra passe"
                    prepend-icon="mdi-lock"
                    type="password"
                    @input="$v.password.$touch()"
                    required
                  />

                  <v-text-field
                    :error-messages="repeatPasswordErrors"
                    v-model="repeatPassword"
                    :counter="6"
                    label="Repita a palavra passe"
                    prepend-icon="mdi-lock"
                    type="password"
                    @input="$v.repeatPassword.$touch()"
                    required
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn depressed text medium color="blue darken-1" dark to="/">
                  <v-icon medium>mdi-chevron-left</v-icon>
                  <span class="my-btn">Voltar</span>
                </v-btn>
                <v-spacer />
                <v-btn depressed outlined large color="blue darken-1" @click.prevent="register">
                  <span class="small-title my-btn">
                    Criar
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
import { auth } from '@/server/firebase'
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    register() {
      this.$v.$touch()
      if(this.$v.$invalid){
        this.submitstatus = 'FAIL'
      } else {
        this.submitstatus = 'OK',
        auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {this.$router.push('/login')})
        .catch(err => error)
          }
      }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password'),
      required
    }
  },
  computed: {
    passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('A palavra passe deve ter no mínimo 6 caracteres.')
        !this.$v.password.maxLength && errors.push('A palavra passe deve ter no máximo 20 caracteres.')
        !this.$v.password.required && errors.push('A palavra passe é obrigatória.')
        return errors
      },
      repeatPasswordErrors () {
        const errors = []
        if (!this.$v.repeatPassword.$dirty) return errors
        !this.$v.repeatPassword.sameAsPassword && errors.push('As palavra passes não coincidem.')
        !this.$v.repeatPassword.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Deve ser um email válido.')
        !this.$v.email.required && errors.push('O Email é obrigatório.')
        return errors
      }
  }
}
</script>