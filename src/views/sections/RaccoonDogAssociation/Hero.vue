<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { getImageUrl } from '@/utils/assets-url'
import 'vue3-carousel/dist/carousel.css'

const heroList = [
  'RaccoonDogAssociation/hero/hero_01.png',
  'RaccoonDogAssociation/hero/hero_02.png',
  'RaccoonDogAssociation/hero/hero_03.png',
  'RaccoonDogAssociation/hero/hero_04.png',
  'RaccoonDogAssociation/hero/hero_05.png',
  'RaccoonDogAssociation/hero/hero_06.png',
  'RaccoonDogAssociation/hero/hero_07.png'
]

</script>

<template>
  <div class="hero_container">
    <a class="sponsor" href="https://www.buymeacoffee.com/tanuki.jr"></a>
    <Carousel :autoplay="3000" :wrap-around="true">
      <Slide v-for="slide in heroList" :key="slide">
        <div class="carousel__item"><img :src="getImageUrl(slide)" alt=""></div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>


    <div class="scroll_down_wrap">
      <p>幫助狸猫</p>
      <RouterLink to="#news">
        <div class="icon_wrap">
          <i class="fa-solid fa-handshake-angle animate__animated animate__shakeY animate__infinite"></i>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.hero_container {
  font-family: $kotanukiFont;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
}

div.today_info {
  box-sizing: border-box;
  width: 22vw;
  height: 40vh;
  border: 0.5vw solid $kotanukiParkPrimary;
  border-radius: $br_PC;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  right: 2vw;
  top: 57vh;
  padding: 1.5vw;
  @include flex_vm_as();
  justify-content: space-between;


  div.regular {
    @include flex_vm_as();
    gap: 3vh;

    h3 {
      font-weight: $fwMedium;
    }

    span {
      font-weight: $fwMedium;
      font-size: 1.2vw;
    }

    div.span_wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  div.event {
    color: $kotanukiParkPrimary;
    @include flex_vm_as();
    gap: 1.5vh;

    h4,
    p {
      font-weight: $fwMedium;
    }

    h4 {
      font-size: 1.5vw;
    }

    p {
      font-size: 1.2vw;
    }
  }


}

a.sponsor {
  width: 10vw;
  height: 10vw;
  position: absolute;
  right: 26vw;
  top: 65vh;
  z-index: 999;
}


.carousel__item {
  height: 100vh;
  width: 100%;
}

div.scroll_down_wrap {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 90vh;
  @include flex_vm();
  gap: 1vh;


  p {
    color: white;
    font-size: 1.5vw;

  }

  div.icon_wrap {
    width: 3vw;
    height: 3vw;
    @include flex_hm();
    border-radius: $circle;
    border: 0.5vw solid white;


    i {
      color: white;
      font-size: 1.5vw;
      animation-duration: 8s
    }
  }
}
</style>