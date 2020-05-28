<template>
  <div>
    <v-snackbar class="mt-6" v-model="snackbar" :timeout="8000" top color="success">
      <span>O evento foi criado com sucesso.</span>
      <v-btn text dark color="white" @click="snackbar = false">Fechar</v-btn>
    </v-snackbar>

    <v-snackbar class="mt-6" v-model="deleted" :timeout="8000" top color="success">
      <span>O evento foi eliminado com sucesso.</span>
      <v-btn text dark color="white" @click="deleted = false">Fechar</v-btn>
    </v-snackbar>

    <v-snackbar class="mt-6" v-model="updated" :timeout="8000" top color="success">
      <span>O evento foi atualizado com sucesso.</span>
      <v-btn text dark color="white" @click="updated = false">Fechar</v-btn>
    </v-snackbar>

    <Toolbar />
    <v-content>
      <Calendar
        class="mt-12 mr-5 ml-5"
        @dataSent="snackbar = true"
        @deleteSent="deleted = true"
        @updateSent="updated = true"
      />
    </v-content>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Calendar from '@/components/calendar'

export default {
    data() {
      return {
        snackbar: false,
        deleted: false,
        updated: false
    }
  },
        components: {
            Toolbar,
            Calendar
        }
    }
</script>

<style scoped>

</style>