<template>
    <div id="scene"></div>
</template>

<script lang="ts" setup>
  import {onMounted} from "vue";
  import {gameController} from "@/game/game-controller";

  let game;

  onMounted(() => {
    game = new gameController('scene')
    game.run()
  })
</script>

<style scoped>
  #scene {
    position: relative;
    height: 100%;
    width: 100%;
    border: solid darkred;
  }
</style>