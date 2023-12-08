<script setup lang="ts">
import { getAudioUrl } from '@/utils/assets-url'
let audio = new Audio(getAudioUrl('chuchu.mp3'))

function PlayChu() {
  audio.play();
  const title = document.getElementById("title")!;
  title.innerHTML = "入侵!!";

  window.addEventListener('mouseup', function (e) {
    title.innerHTML = "給我地瓜!!";
  })
}

</script>

<template>
  <div class="tanuki_conatiner" @mousedown="PlayChu">
    <img id="tanurus" src="@/assets/images/tanuki.png" alt="狸貓機型貓嘴">
    <h1 id="title">狸貓病毒!!</h1>
    <div class="escape" @click="$router.go(-1)">
      交出地瓜然後逃掉🍠
    </div>

  </div>
</template>

<style scoped lang="scss">
div.tanuki_conatiner {
  width: 100%;
  height: 100vh;
  background-color: $imogamiPrimary;
  overflow: hidden;
  cursor: pointer;

  &:active {

    img {
      transform: scale(1.2);
    }
  }
}

img {
  width: 60vw;
  height: 100vh;
  float: right;
}

h1 {
  font-weight: $fwBold;
  color: $imogamiSecondary;
  font-size: 8vw;
  position: relative;
  top: 5vh;
  left: 5vw;
}


div.escape {
  font-size: 3vw;
  @include flex_hm();
  width: 30vw;
  height: 20vh;
  color: white;
  background-color: $imogamiSecondary;
  border-radius: 10vw;
  position: relative;
  top: 30vh;
  left: 5vw;
  box-shadow: 0.5vw 0.5vw 0 $imogamiMidPurple;

  @include tagEffect();
}
</style>