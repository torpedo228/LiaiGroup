<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

onMounted(() => {
  window.addEventListener("scroll", whenScroll);
})
onUnmounted(() => {
  window.removeEventListener('scroll', whenScroll);
})

const scrollToDarkBg = ref(true);
const showUnlock = ref(false);

// let news = document.getElementById('news');
// let introduce = document.getElementById('introduce');
// let actions = document.getElementById('actions');
// let help = document.getElementById('help');

function whenScroll() {
  if (window.scrollY >= 700 && window.scrollY < 1400 || window.scrollY >= 1900) {
    scrollToDarkBg.value = false
    showUnlock.value = true;
  } else {
    scrollToDarkBg.value = true
  }
}

function reload() {
  location.replace(location.pathname);
}
</script>

<template>
  <div class="header_container">
    <div class="logo_wrap" @click=reload>
      <img v-if="scrollToDarkBg" class="RaccoonDogAssociation_logo"
        src="@/assets/images/RaccoonDogAssociation/logo/logo_white.svg" alt="RaccoonDogAssociation_logo">
      <img v-else-if="!scrollToDarkBg" class="RaccoonDogAssociation_logo"
        src="@/assets/images/RaccoonDogAssociation/logo/logo_green.svg" alt="RaccoonDogAssociation_logo">
    </div>
    <a href="https://www.buymeacoffee.com/tanuki.jr">
      <div class="donate">
        <p>立即捐款幫助牠</p>
        <img class="RaccoonDogAssociation_logo" src="@/assets/images/RaccoonDogAssociation/donate.png" alt="donate">
      </div>
    </a>
    <div class="shadow"></div>
  </div>
</template> 

<style scoped lang="scss">
div.logo_wrap {
  position: fixed;
  top: 3vh;
  left: 2vw;
  z-index: 999;

  img {
    width: 25vw;
    cursor: pointer;
    filter: brightness(120%);
  }
}

div.donate {
  width: 13vw;
  height: 15vh;
  background-color: white;
  border-radius: 0 0 $br_PC $br_PC;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 3vw;
  @include flex_hm();
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  &:active {
    opacity: 0.8;
  }


  p {
    width: 8vw;
    position: relative;
    left: 1vw;
    color: $rdaPrimary;
    font-weight: $fwBold;
    font-size: 1.5vw;
  }

  img {
    margin-top: auto;
    width: 7vw;
  }
}

div.shadow {
  position: fixed;
  width: 13vw;
  height: 16vh;
  background-color: $rdaSecondary;
  border-radius: 0 0 $br_PC $br_PC;
  z-index: 998;
  top: 0;
  right: 2.5vw;
}
</style>