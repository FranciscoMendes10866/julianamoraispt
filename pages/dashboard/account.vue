<template>
  <div>
    <!-- Toolbar -->
    <Toolbar />

    <v-content>
      <accountContent />
    </v-content>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import accountContent from '@/components/accountContent'

    export default {
        components:{
          Toolbar,
          accountContent
        }
    }
</script>

<style scoped>
*{
  font-family: 'Muli', sans-serif !important;
}
</style>