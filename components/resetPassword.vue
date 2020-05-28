<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card class="mx-auto" max-width="700" elevation="0">
        <v-card-text>
          <div class="headline">Alterar palavra passe</div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              @input="$v.newPassword.$touch()"
              :error-messages="newPasswordErrors"
              :counter="6"
              class="mt-6"
              v-model="newPassword"
              type="password"
              label="Insira a sua nova palavra passe"
              required
            ></v-text-field>

            <v-text-field
              :error-messages="repeatPasswordErrors"
              @input="$v.repeatPassword.$touch()"
              class="mt-6"
              v-model="repeatPassword"
              type="password"
              label="Repita a sua nova palavra passe"
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
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import { auth } from '@/server/firebase'

export default {
  mixins: [validationMixin],
    data(){
        return{
            newPassword: '',
            repeatPassword: '',
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
            auth.currentUser.updatePassword(this.newPassword).then(() => {
            console.log('It works!')
            this.$emit('passwordChanged')
            }).then(()=>{
              this.$v.$reset()
              this.newPassword='',
              this.repeatPassword=''
            }).catch(() => {
            console.log(error)
            })
            }
        }
    },
    validations: {
      newPassword: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs('newPassword')
      }
    },
    computed: {
      newPasswordErrors () {
        const errors = []
        if (!this.$v.newPassword.$dirty) return errors
        !this.$v.newPassword.minLength && errors.push('A palavra passe deve ter no mínimo 6 caracteres.')
        !this.$v.newPassword.maxLength && errors.push('A palavra passe deve ter no máximo 20 caracteres.')
        !this.$v.newPassword.required && errors.push('A palavra passe é obrigatória.')
        return errors
      },
      repeatPasswordErrors () {
        const errors = []
        if (!this.$v.repeatPassword.$dirty) return errors
        !this.$v.repeatPassword.sameAsPassword && errors.push('As palavra passes não coincidem.')
        !this.$v.repeatPassword.required && errors.push('Este campo é obrigatório.')
        return errors
      }
    }
}
</script>