<template>
  <v-container>
    <!-- Toolbar -->
    <Toolbar />
    <v-content>
      <v-row no-gutters align="center" justify="center" class="margin-in">
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-2">
          <v-card elevation="0" outlined rounded class="mx-auto" max-width="400">
            <v-card-text>
              <p class="display-1 text--primary">Ficha pessoal</p>
              <p>Tabela e formulário</p>
              <div class="text--primary">
                <p>Se pretenderes adicionar dados pessoais dos utentes, ou até mesmo visualizá-los, é nesta página.</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="font-weight-bold"
                text
                depressed
                color="pink darken-1"
                to="/dashboard/Clients"
              >Visitar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-2">
          <v-card elevation="0" outlined rounded class="mx-auto" max-width="400">
            <v-card-text>
              <p class="display-1 text--primary">Saúde</p>
              <p>Tabela e formulário</p>
              <div class="text--primary">
                <p>Nesta página adicionas dados relacionados com os objectivos das pessoas, assim como o historial de saúde ou até mesmo problemas de saúde.</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="font-weight-bold"
                text
                depressed
                color="pink darken-1"
                to="/dashboard/Health"
              >Visitar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-2">
          <v-card elevation="0" outlined rounded class="mx-auto" max-width="400">
            <v-card-text>
              <p class="display-1 text--primary">Avaliação Física</p>
              <p>Tabela e formulário</p>
              <div class="text--primary">
                <p>Aqui, estão todos os dados relacionados com a avaliação física individual.</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="font-weight-bold"
                text
                depressed
                color="pink darken-1"
                to="/dashboard/Evaluation"
              >Visitar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="start" class="margin-in">
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-2">
          <v-card elevation="0" outlined rounded class="mx-auto" max-width="400">
            <v-card-text>
              <p class="display-1 text--primary">Nutrição</p>
              <p>Tabela e formulário</p>
              <div class="text--primary">
                <p>Neste espaço terás acesso a um pequeno apontamento de como é a alimação individual dos teus clientes.</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="font-weight-bold"
                text
                depressed
                color="pink darken-1"
                to="/dashboard/nutrition"
              >Visitar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" class="px-2">
          <v-card elevation="0" outlined rounded class="mx-auto" max-width="400">
            <v-card-text>
              <p class="display-1 text--primary">Calendário</p>
              <p>Calendarização</p>
              <div class="text--primary">
                <p>Nesta página, tens um calendário onde poderás adicionar eventos(treinos, férias, etc). Tudo para te facilitar a gestão num espaço de tempo mensal, semanal e diário.</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="font-weight-bold"
                text
                depressed
                color="pink darken-1"
                to="/dashboard/Calendar"
              >Visitar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
import Toolbar from '@/components/Toolbar'
    export default {
        components:{
          Toolbar
        }
    }
</script>

<style scoped>
*{
  font-family: 'Muli', sans-serif !important;
}
.margin-in{
  margin-top: 40px;
}
</style>