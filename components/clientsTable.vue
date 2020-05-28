<template>
  <v-card elevation="1">
    <v-card-title>
      Ficha Pessoal
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
          { text: 'Nome Completo', value: 'name' },
          { text: 'Nascimento', value: 'date' },
          { text: 'Nacionalidade', value: 'nationality' },
          { text: 'Morada', value: 'address' },
          { text: 'Código Postal', value: 'postCode' },
          { text: 'Naturalidade', value: 'natural' },
          { text: 'Sexo', value: 'sex' },
          { text: 'Peso (kg)', value: 'weight' },
          { text: 'Altura (cm)', value: 'height' },
          { text: 'Telemóvel', value: 'phone' },
          { text: 'Emergência', value: 'emergency' },
          { text: 'Email', value: 'email' },
          { text: '', value: 'actions', sortable: false },
        ],
        dataDb: [],
      }
    },
    created() {
      db.collection('personal').onSnapshot(res => {
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
         db.collection('personal').doc(id).delete().then(()=> {
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