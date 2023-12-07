<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';
import { getImageUrl } from '@/utils/assets-url'
import { ref } from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

const currentRestaurantIndex = ref(0);
const restaurantList = [
  {
    name: '狸享高空餐酒館',
    imgSrc: 'TanukattHotel/restaurants/restaurant_01.png'
  },
  {
    name: 'LiMAO Bar',
    imgSrc: 'TanukattHotel/restaurants/restaurant_02.png'
  },
  {
    name: '狸光饗食',
    imgSrc: 'TanukattHotel/restaurants/restaurant_03.png'
  },
  {
    name: '咪咪狸小廚',
    imgSrc: 'TanukattHotel/restaurants/restaurant_04.png'
  }
]

const settings = {
  "dots": true,
  "infinite": true,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "vertical": true,
  "verticalSwiping": true
}

function switchRestaurant(i: any) {
  currentRestaurantIndex.value = i;
}
</script>

<template>
  <div class="restaurants_container" id="restaurants">
    <Title :title="'美饌佳餚 RESTAURANT'" :color="'white'" />
    <p class="slogan">狸悅酒店攜手米其林摘星主廚，結合美式風的極致餐飲體驗，各式主題餐廳提供日夜不間斷的美食饗宴。</p>

    <div class="restaurant_wrap">
      <div class="carousel">

        <!-- <VueSlickCarousel :arrows="true" :dots="true">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </VueSlickCarousel> -->
        <!-- <VueSlickCarousel v-bind="settings" :style="{ height: '372px' }">
          <div v-for="(restaurant, i) in restaurantList" :key="restaurant.name">{{ restaurant.name }}
          </div>

        </VueSlickCarousel> -->
      </div>
      <div class="restaurant">
        <img :src="getImageUrl(restaurantList[currentRestaurantIndex].imgSrc as string)" alt="">
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
div.restaurants_container {
  width: 100%;
  height: 100vh;
  @include flex_vm();
  gap: 3vh;
  padding: 3vh 0;
  background-color: $tanukattHotelDeco;
}

p.slogan {
  font-size: 1.2vw;
  color: white;
}

div.restaurant_wrap {
  width: 70vw;
  height: 60vh;
  background-color: white;
  display: flex;
  justify-content: space-between;

  div.carousel {}


  div.restaurant {
    height: 100%;

    img {
      width: 50vw;
      height: 100%;
      object-fit: cover;
      margin-left: auto;
    }
  }
}
</style>