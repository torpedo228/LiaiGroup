<script setup lang="ts">
import { getImageUrl } from '@/utils/assets-url'
import PortalButton from '@/components/global/PortalButton.vue';
const dramaList = [
  {
    title: "狸之起源",
    imgSrc: "TanukiStage/drama/drama_01.png"
  },
  {
    title: "尋龍記",
    imgSrc: "TanukiStage/drama/drama_02.png"
  },
  {
    title: "Dancing Beast",
    imgSrc: "TanukiStage/drama/drama_03.png"
  },
  {
    title: "Dancing Beast 2",
    imgSrc: "TanukiStage/drama/drama_04.png"
  },
  {
    title: "尋龍記",
    imgSrc: "TanukiStage/drama/drama_02.png"
  }
]
</script>

<template>
  <div class="drama_container" id="drama">
    <div class="title_block">
      <img src="@/assets/images/TanukiStage/title/title_drama.svg" alt="title_drama">
    </div>
    <p class="slogan">Discover our shows, book your tickets</p>
    <div class="drama_wrap">
      <div data-aos="zoom-in-down" data-aos-mirror="false" class="drama" v-for="drama in dramaList" :key="drama.title">
        <h3 class="title">{{ drama.title }}</h3>
        <div class="btn_block">
          <PortalButton content="了解更多" type="tanuki_stage_learn_more" routingLink="#" />
        </div>
        <img :src="getImageUrl(drama.imgSrc as string)" :alt="drama.title">
      </div>
    </div>

    <img class="deco up" src="@/assets/images/TanukiStage/deco.svg" alt="deco">
    <img class="deco bottom" src="@/assets/images/TanukiStage/deco.svg" alt="deco">
  </div>
</template>

<style scoped lang="scss">
div.drama_container {
  padding: 2vh 0 15vh;
  width: 80%;
  margin-left: auto;
  position: relative;
  background-color: $tanukiStageSecondary;
}

div.title_block {
  width: 20vw;
  transform: translateX(50vw);
  margin: 5vh 5vw 2vh;

  img {
    height: 12vh;
  }
}

p {
  margin-left: 10vw;
  color: white;
  font-size: 1.5vw;
}

div.drama_wrap {
  margin: auto;
  width: 60vw;
  @include flex_hm();
  flex-wrap: wrap;


  div.drama {
    margin: 1%;
    width: 48%;
    height: 30vh;
    overflow: hidden;
    border-radius: $br_PC;
    position: relative;

    img {
      width: 100%;

    }

    h3 {
      color: white;
      font-weight: $fwBold;
      font-size: 1.5vw;
      position: absolute;
      top: 5%;
      left: 5%;
    }

    div.btn_block {
      position: absolute;
      bottom: 1vh;
      right: 1vw;
    }
  }

  div.drama:first-child {
    background-color: aqua;
    width: 100%;
    height: 40vh;

    h3 {
      font-size: 2.5vw;
    }

    img {
      object-position: 0 -25vh;
    }
  }
}

img.deco {
  position: absolute;
  height: 30vh;
}

img.up {
  left: 0;
  top: -15vh;
  transform: rotate(180deg);
}

img.bottom {
  right: 0;
  bottom: -15vh;
}
</style>