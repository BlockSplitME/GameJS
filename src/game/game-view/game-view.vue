<template>
  <v-container fluid class="h-100">
    <v-row class="h-100" justify="center" align="center">
      <v-col class="h-100" cols="6" >
        <gameField/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import gameField from './components/game-field.vue'
</script>

<style scoped>

</style>