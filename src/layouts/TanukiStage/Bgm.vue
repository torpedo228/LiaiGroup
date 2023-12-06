<script setup lang="ts">
import { ref } from 'vue';
import { getAudioUrl } from '@/utils/assets-url'

const pause = ref(true);
let audio = new Audio(getAudioUrl('tanuki_stage_bgm.mp3'))
function toggleBgm() {
  pause.value = !pause.value;
  if (pause.value == false) {
    audio.play();
  } else {
    audio.pause();
  }
}


</script>

<template>
  <div class="bgm_control" @click="toggleBgm">
    <i v-if="pause" class="fa-solid fa-volume-xmark"></i>
    <i v-else-if="!pause" class="fa-solid fa-volume-high"></i>
  </div>
</template>

<style scoped lang="scss">
div.bgm_control {
  position: fixed;
  top: 1vw;
  right: 1vw;
  width: 3vw;
  height: 3vw;
  border-radius: $circle;
  background-color: white;
  border: 0.2vw solid $tanukiStageSecondary;
  @include flex_hm();
  z-index: 999;

  @include tagEffect();

  i {
    @include flex_hm();
    color: $tanukiStageSecondary;
    font-size: 1.5vw;
  }

}


// audio {
//   position: absolute;
//   right: 20vw;
//   z-index: 999;
// }
</style>