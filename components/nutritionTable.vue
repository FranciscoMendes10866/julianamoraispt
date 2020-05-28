<template>
  <v-card elevation="1">
    <v-data-table
      :search="search"
      :headers="headers"
      :items="dataDb"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="cliente"
      show-expand
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Nutrição</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Procurar"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-switch v-model="singleExpand" label="Expandir individualmente" class="mt-2"></v-switch>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <p :colspan="headers.length">
          <strong>Pequeno Almoço:</strong>
          &nbsp;&nbsp;&nbsp;&nbsp;{{ item.pequenoAlmoco }}
        </p>
        <p :colspan="headers.length">
          <strong>Lanche da Manhã:</strong>
          &nbsp;&nbsp;&nbsp;&nbsp;{{ item.lancheManha }}
        </p>
        <p :colspan="headers.length">
          <strong>Almoço:</strong>
          &nbsp;&nbsp;&nbsp;&nbsp;{{ item.almoco }}
        </p>
        <p :colspan="headers.length">
          <strong>Lanche da Tarde:</strong>
          &nbsp;&nbsp;&nbsp;&nbsp;{{ item.lancheTarde }}
        </p>
        <p :colspan="headers.length">
          <strong>Jantar:</strong>
          &nbsp;&nbsp;&nbsp;&nbsp;{{ item.jantar }}
        </p>
      </template>
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
        expanded: [],
        singleExpand: false,
        headers: [
          { text: 'Cliente', value: 'cliente' },
          { text: '', value: 'data-table-expand' },
          { text: '', value: 'actions', sortable: false }
        ],
        dataDb: [],
      }
    },
    created() {
      db.collection('nutrition').onSnapshot(res => {
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
         db.collection('nutrition').doc(id).delete().then(()=> {
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