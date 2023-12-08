<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';
import PortalButton from '@/components/global/PortalButton.vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { getImageUrl } from '@/utils/assets-url'

const facilityList = [
  {
    name: '熱帶風游泳池',
    imgSrc: 'TanukattHotel/facility/facility_01.png'
  },
  {
    name: '觀景SPA露臺',
    imgSrc: 'TanukattHotel/facility/facility_02.png'
  },
  {
    name: '六角露天池',
    imgSrc: 'TanukattHotel/facility/facility_03.svg'
  },
  {
    name: '庭院游泳池',
    imgSrc: 'TanukattHotel/facility/facility_04.svg'
  }
]



</script>

<template>
  <div class="facility_container" id="facility">
    <Title :title="'服務設施 FACILITY'" :color="'black'" />
    <p class="slogan">狸悅酒店擁有全球唯一高空懸挑透明無邊際泳池、狸王高空健身房俱樂部以及頂級高空SPA芳療室。</p>

    <div class="facility_wrap">
      <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" :autoplay="3000">
        <Slide v-for="facility in facilityList" :key="facility.name">
          <div class="carousel__item">
            <p>{{ facility.name }}</p>
            <img :src="getImageUrl(facility.imgSrc as string)" :alt="facility.name">
          </div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
      </Carousel>
    </div>

    <div class="btn_block">
      <PortalButton content="看更多" type="tanukatt_watch_more" routingLink="#" />
    </div>
  </div>
</template>

<style scoped lang="scss">
div.facility_container {
  width: 100%;
  height: 100vh;
  @include flex_vm();
  gap: 3vw;
  padding: 10vh 0;
}

p.slogan {
  font-size: 1.2vw;
}

div.facility_wrap {
  width: 100%;
  height: 70vh;
}

div.carousel__item {
  @include flex_vm();
  width: 20vw;
  height: 70vh;
  position: relative;


  p {
    color: white;
    font-size: 1.2vw;
    position: absolute;
    bottom: 5vh;
  }

  img {
    width: 100%;

  }
}
.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>