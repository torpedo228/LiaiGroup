<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';
import { getImageUrl } from '@/utils/assets-url'
import { ref } from 'vue'

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

setInterval(() => loopRestaurantList(), 2000)

function loopRestaurantList() {
  if (currentRestaurantIndex.value == restaurantList.length - 1) {
    currentRestaurantIndex.value = 0;
  } else {
    currentRestaurantIndex.value++
  }
}

function switchRestaurant(i: any) {
  currentRestaurantIndex.value = i;
}
function switchUp() {
  if (currentRestaurantIndex.value == 0) {
    currentRestaurantIndex.value = restaurantList.length - 1;
  } else {
    currentRestaurantIndex.value--;
  }
}

function switchDown() {
  if (currentRestaurantIndex.value == restaurantList.length - 1) {
    currentRestaurantIndex.value = 0;
  } else {
    currentRestaurantIndex.value++;
  }

  console.log(currentRestaurantIndex.value)
}
</script>

<template>
  <div class="restaurants_container" id="restaurants">
    <Title :title="'美饌佳餚 RESTAURANT'" :color="'white'" />
    <p class="slogan">狸悅酒店攜手米其林摘星主廚，結合美式風的極致餐飲體驗，各式主題餐廳提供日夜不間斷的美食饗宴。</p>

    <div class="restaurant_wrap">
      <div class="left_name_section">
        <i class="fa-solid fa-caret-up" @click='switchUp'></i>
        <p v-for="(restaurant, i) in restaurantList" :key="restaurant.name" class="name"
          :class="{ 'focus': currentRestaurantIndex === i }" @click="switchRestaurant(i)">
          {{ restaurant.name }}
        <div class="hl"></div>
        </p>

        <i class="fa-solid fa-caret-down" @click="switchDown"></i>
      </div>
      <div class="restaurant">
        <img :src="getImageUrl(restaurantList[currentRestaurantIndex].imgSrc as string)" :alt="restaurantList[currentRestaurantIndex].name">
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
  border-radius: $br_PC;

  div.left_name_section {
    width: 20vw;
    @include flex_vm();

    p.name {
      cursor: pointer;
      font-size: 1.2vw;
      @include flex_vm();
      color: $textColor;

      &:hover {
        color: $tanukattHotelSecondary
      }

      &:active {
        color: $tanukattHotelSecondary
      }

      div.hl {
        margin: 2vh 0;
        width: 8vw;
        height: 0.1vh;
        background-color: $textColor;
      }
    }

    p.name:last-of-type {
      div.hl {
        display: none;
      }
    }

    i {
      @include tagEffect();
      margin: 2vh;
      color: $tanukattHotelPrimary;
      font-size: 2vw;
    }


  }


  div.restaurant {
    height: 100%;
    border-radius: 0 $br_PC $br_PC 0;
    overflow: hidden;

    img {
      width: 50vw;
      height: 100%;
      object-fit: cover;
      margin-left: auto;
    }
  }
}

.focus {
  font-weight: $fwBold;
  color: $tanukattHotelSecondary;
}
</style>