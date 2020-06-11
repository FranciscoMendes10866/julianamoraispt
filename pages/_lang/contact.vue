<template>
  <div>
    <v-container>
      <!-- Navbar -->
      <navbar />

      <!-- Form -->

      <v-row no-gutters align="center" justify="center" class="mt-mine">
        <h1 class="mt-1 display-1 font-weight-regular my-title">{{ $t('contact.title') }}</h1>
      </v-row>
      <v-row no-gutters align="center" justify="center">
        <p class="mt-5" v-html="$t('contact.body')"></p>
      </v-row>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12" xs="12" sm="8" md="7" lg="5">
          <v-form ref="form" class="px-12">
            <v-text-field
              :error-messages="emailErrors"
              prepend-icon="mdi-email-variant"
              class="mt-5"
              v-model="email"
              label="Email"
              required
              type="text"
              @input="$v.email.$touch()"
            ></v-text-field>

            <v-text-field
              :error-messages="subjectErrors"
              :counter="10"
              prepend-icon="mdi-text-subject"
              class="mt-5"
              v-model="subject"
              label="Assunto"
              required
              type="text"
              @input="$v.subject.$touch()"
            ></v-text-field>

            <v-textarea
              :error-messages="messageErrors"
              :counter="20"
              v-model="message"
              class="mt-5"
              prepend-icon="mdi-message-text-outline"
              label="Mensagem"
              required
              type="text"
              @input="$v.message.$touch()"
            ></v-textarea>

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
              <span class="my-btn">{{ $t('contact.button') }}</span>
              <v-icon right small>mdi-send</v-icon>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <Footer class="mt-mine" />
    <BottomNav/>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import navbar from '@/components/Navbar'
import BottomNav from '@/components/BottomNav'

const URL = process.env.SENDGRID

export default {
  mixins: [validationMixin],
  data () {
    return {
      email: '',
      subject: '',
      message: '',
      loading: false
    }
  },
    head() {
      return {
        title: this.$t('contact.pageName')
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
        to: 'avizinhadochico@gmail.com',
        from: this.email,
        subject: this.subject,
        text: this.message,
        html: `${this.message}`
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      }),
        this.$v.$reset()
        this.subject='',
        this.message='',
        this.email=''
    }
    }
  },
  validations: {
    subject: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(30),
    },
    message: {
      required,
      minLength: minLength(20),
      maxLength: maxLength(500),
    },
    email: {
      required,
      email
    }
  },
  computed: {
    subjectErrors () {
        const errors = []
        if (!this.$v.subject.$dirty) return errors
        !this.$v.subject.minLength && errors.push('O assunto deve ter no mínimo 10 caracteres.')
        !this.$v.subject.maxLength && errors.push('O assunto deve ter no máximo 30 caracteres.')
        !this.$v.subject.required && errors.push('O assunto é obrigatório.')
        return errors
      },
      messageErrors () {
        const errors = []
        if (!this.$v.message.$dirty) return errors
        !this.$v.message.minLength && errors.push('A mensagem deve ter no mínimo 20 caracteres.')
        !this.$v.message.maxLength && errors.push('A mensagem deve ter no máximo 500 caracteres.')
        !this.$v.message.required && errors.push('A mensagem é obrigatória.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Deve ser um email válido.')
        !this.$v.email.required && errors.push('O Email é obrigatório.')
        return errors
      }
  },
  components: {
      navbar,
      BottomNav,
      Footer: () => import('@/components/Footer')
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
.contact{
    margin-top: 140px;
}
.mt-mine{
  margin-top: 100px;
}
</style>