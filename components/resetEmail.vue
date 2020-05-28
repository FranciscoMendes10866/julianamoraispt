<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card class="mx-auto" max-width="700" elevation="0">
        <v-card-text>
          <div class="headline">Alterar Email</div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              :error-messages="newEmailErrors"
              @input="$v.newEmail.$touch()"
              class="mt-6"
              v-model="newEmail"
              type="email"
              label="Insira o seu novo Email"
              required
            ></v-text-field>

            <v-text-field
              :error-messages="repeatEmailErrors"
              @input="$v.repeatEmail.$touch()"
              class="mt-6"
              v-model="repeatEmail"
              type="email"
              label="Repita o seu novo Email"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            :loading="loading"
            large
            color="pink"
            dark
            class="ml-2 font-weight-bold mb-2"
            @click.prevent="resetIt"
          >
            <v-icon medium left>mdi-lock-reset</v-icon>Mudar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { auth } from '@/server/firebase'

export default {
  mixins: [validationMixin],
    data(){
        return{
            newEmail: '',
            repeatEmail: '',
            loading: false
        }
    },
    methods: {
        resetIt(){
           this.$v.$touch()
          if(this.$v.$invalid){
            this.submitstatus = 'FAIL'
          } else {
            this.submitstatus = 'OK',
            this.loading = true,
             setTimeout(() => (this.loading = false), 800)
            auth.currentUser.updateEmail(this.newEmail).then(() => {
            console.log('It works!')
            this.$emit('emailChanged')
            }).then(()=>{
              this.$v.$reset()
              this.newEmail='',
              this.repeatEmail=''
            }).catch(() => {
            console.log(error)
            });
          }
        }
    },
    validations: {
      newEmail: {
        required,
        email
      },
      repeatEmail: {
        required,
        email,
        sameAsEmail: sameAs('newEmail')
      }
    },
    computed: {
      newEmailErrors () {
        const errors = []
        if (!this.$v.newEmail.$dirty) return errors
        !this.$v.newEmail.email && errors.push('Tem de ser um email válido.')
        !this.$v.newEmail.required && errors.push('Este campo é obrigatório.')
        return errors
      },
      repeatEmailErrors () {
        const errors = []
        if (!this.$v.repeatEmail.$dirty) return errors
        !this.$v.repeatEmail.sameAsEmail && errors.push('Os emails não coincidem.')
        !this.$v.newEmail.email && errors.push('Tem de ser um email válido.')
        !this.$v.repeatEmail.required && errors.push('Este campo é obrigatório.')
        return errors
      }
    }
}
</script>