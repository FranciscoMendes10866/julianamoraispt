<template>
  <v-card elevation="1">
    <v-card-title>
      Saúde
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
          { text: 'Cliente', value: 'cliente' },
          { text: 'Objetivo', value: 'objetivo' },
          { text: 'Antecedentes', value: 'primeira' },
          { text: 'Quais', value: 'primeiraInput' },
          { text: 'Cardiovasculares', value: 'segunda' },
          { text: 'Desconfortos', value: 'terceira' },
          { text: 'No último mês', value: 'quarta' },
          { text: 'Tonturas ou desmaios', value: 'quinta' },
          { text: 'Ósseos ou articulares', value: 'sexta' },
          { text: 'Pressão arterial', value: 'setima' },
          { text: 'Outra razão', value: 'oitava' },
          { text: 'Qual', value: 'oitavaInput' },
          { text: '', value: 'actions', sortable: false }
        ],
        dataDb: [],
      }
    },
    created() {
      db.collection('health').onSnapshot(res => {
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
         db.collection('health').doc(id).delete().then(()=> {
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