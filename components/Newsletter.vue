<template>
  <v-container class="my-section">
    <v-row no-gutters align="center" justify="space-around">
      <v-col cols="12" xs="12" sm="12" md="6" lg="5">
        <h4
          class="subtitle-1 small-title font-weight-medium fourth"
        >{{ $t('newsletter.sub_title_01') }}</h4>
        <h1 class="mt-1 display-1 font-weight-regular my-title">{{ $t('newsletter.main_title_01') }}</h1>
        <p class="mt-6 title my-p font-weight-regular">{{ $t('newsletter.body_01') }}</p>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="5">
        <v-form refs="form">
          <v-text-field
            :error-messages="firstNameErrors"
            v-model="firstName"
            :counter="4"
            type="text"
            label="Primeiro Nome"
            @input="$v.firstName.$touch()"
            required
          ></v-text-field>
          <v-text-field
            :error-messages="lastNameErrors"
            v-model="lastName"
            :counter="4"
            type="text"
            label="Último nome"
            @input="$v.lastName.$touch()"
            required
          ></v-text-field>
          <v-text-field
            :error-messages="emailErrors"
            v-model="email"
            type="text"
            label="Email"
            @input="$v.email.$touch()"
            required
          ></v-text-field>
          <v-btn
            :loading="loading"
            depressed
            outlined
            large
            color="pink darken-1"
            dark
            class="mt-8"
            @click.prevent="submit"
          >
            <span class="my-btn">{{ $t('newsletter.button') }}</span>
            <v-icon right small>mdi-email-newsletter</v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

const URL = process.env.NEWSLETTER

export default {
  mixins: [validationMixin],
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      loading: false
    }
  },
    head() {
      return {
        title: this.$t('newsletter.pageName')
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
        setTimeout(() => (this.loading = false), 3000),
        this.$axios.post(URL, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email
          })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          }),
          this.$v.$reset()
          this.firstName='',
          this.lastName='',
          this.email=''
      }
    }
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(15),
    },
    lastName: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(15),
    },
    email: {
      required,
      email
    }
  },
  computed: {
    firstNameErrors () {
        const errors = []
        if (!this.$v.firstName.$dirty) return errors
        !this.$v.firstName.minLength && errors.push('O nome deve ter no mínimo 4 caracteres.')
        !this.$v.firstName.maxLength && errors.push('O nome deve ter no máximo 15 caracteres.')
        !this.$v.firstName.required && errors.push('O Primeiro Nome é obrigatório.')
        return errors
      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.lastName.minLength && errors.push('O nome deve ter no mínimo 4 caracteres.')
        !this.$v.lastName.maxLength && errors.push('O nome deve ter no máximo 15 caracteres.')
        !this.$v.lastName.required && errors.push('O último nome é obrigatório.')
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

<style scoped>
.small-title{
  font-family: 'Muli', sans-serif !important;
}
.my-title{
  font-family: 'Muli', sans-serif !important;
  line-height: 55px;
}
.my-p{
  font-family: 'Muli', sans-serif !important;
  line-height: 41px;
}
.fourth{
  color: #FF7A00;
}
</style>