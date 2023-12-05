<script setup lang="ts">
import { ref } from 'vue';
const play = ref(true);

</script>

<template>
  <div class="bgm_control">
    <i v-if="play" class="fa-solid fa-volume-high"></i>
    <i v-else-if="!play" class="fa-solid fa-volume-xmark"></i>
  </div>
</template>

<style scoped lang="scss">
div.bgm_control {
  width: 2vw;
  height: 2vw;
  border-radius: $circle;
  @include flex_hm();
}
</style>