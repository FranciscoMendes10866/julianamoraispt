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

    <!-- Navegação -->
    <Toolbar />

    <!-- Tabela de dados -->
    <v-content>
      <Table class="mt-12 mr-5 ml-5" @dataDeleted="warning = true" />
    </v-content>

    <!-- Formulário -->
    <clientsForms @dataSent="snackbar = true" />
  </div>
</template>

<script>
import clientsForms from '@/components/clientsForm'
import Toolbar from '@/components/Toolbar'
import Table from '@/components/clientsTable'

export default {
  data() {
    return {
      snackbar: false,
      warning: false
    }
  },
  components: {
    clientsForms,
    Toolbar,
    Table
  }
}
</script>

<style scoped>

</style>