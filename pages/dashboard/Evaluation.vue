<template>
  <div>
    <v-snackbar class="mt-6" v-model="snackbar" :timeout="8000" top color="success">
      <span>O seu formulário foi enviado com sucesso.</span>
      <v-btn text dark color="white" @click="snackbar = false">Fechar</v-btn>
    </v-snackbar>

    <v-snackbar class="mt-6" v-model="warning" :timeout="8000" top color="success">
      <span>Os dados foram eliminados com sucesso.</span>
      <v-btn text dark color="white" @click="warning = false">Fechar</v-btn>
    </v-snackbar>

    <Toolbar />
    <v-content>
      <tanitaTable class="mt-12 mr-5 ml-5" @dataDeleted="warning = true" />
    </v-content>
    <v-content>
      <measurementsTable class="mt-12 mr-5 ml-5" @dataDeleted="warning = true" />
    </v-content>
    <Form @dataSent="snackbar = true" />
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Form from '@/components/evaluationForm'
import tanitaTable from '@/components/tanitaTable'
import measurementsTable from '@/components/measurementsTable'

    export default {
      data() {
        return {
        snackbar: false,
        warning: false
        }
      },
        components:{
            Toolbar,
            Form,
            tanitaTable,
            measurementsTable
        }
    }
</script>

<style scoped>

</style>