<script setup lang="ts">
function reload() {
  location.replace(location.pathname);
}

// const navList = [
//   {
//     title: '公園資訊',
//     icon: 'circle-info',
//     route: '#info',
//   },
//   {
//     title: '設施介紹',
//     icon: 'house-chimney-window',
//     route: '#facilty',
//   },
//   {
//     title: '當季花卉',
//     icon: 'leaf',
//     route: '#seasonal',
//   },
//   {
//     title: '活動總覽',
//     icon: 'calendar-day',
//     route: '#event',
//   },
//   {
//     title: '交通資訊',
//     icon: 'car',
//     route: '#transport',
//   }
// ]
</script>

<template>
  <div class="header_container">
    <div class="logo_wrap" @click=reload>
      <img class="RaccoonDogAssociation_logo" src="@/assets/images/RaccoonDogAssociation/logo/logo.svg"
        alt="RaccoonDogAssociation_logo">
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

  @include sendEffect();

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