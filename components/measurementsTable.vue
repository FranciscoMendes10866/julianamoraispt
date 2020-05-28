<template>
  <v-card elevation="1">
    <v-card-title>
      Medições
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Procurar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="dataDb" :search="search">
      <template v-slot:item.actions="{ item }">
        <v-icon small color="red lighten-2" @click="deleteItem(item.id)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { db } from '@/server/firebase'

  export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'Cliente', value: 'clienteInput' },
          { text: 'Peitoral (cm)', value: 'peitoralInput' },
          { text: 'Quadril (cm)', value: 'quadrilInput' },
          { text: 'Cintura (cm)', value: 'cinturaInput' },
          { text: 'Coxa (cm)', value: 'coxaInput' },
          { text: 'Perna (cm)', value: 'pernaInput' },
          { text: 'Braço normal (cm)', value: 'normalInput' },
          { text: 'Braço contraído (cm)', value: 'contraidoInput' },
          { text: '', value: 'actions', sortable: false }
        ],
        dataDb: [],
      }
    },
    created() {
      db.collection('evaluation').onSnapshot(res => {
        const changes = res.docChanges()

        changes.forEach(change => {
          if(change.type === 'added') {
            this.dataDb.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    },
    methods: {
      deleteItem(id) {
        if(confirm('Tem a certeza que quer eliminar?')) {
          
         //delete the item from Firestore
         db.collection('evaluation').doc(id).delete().then(()=> {
               this.$emit('dataDeleted')
             }) 


          //delete item from the UI element
          const index = this.dataDb.findIndex(item => item.id === id)
          this.dataDb.splice(index, 1)
        }
      }
    }
  }
</script>