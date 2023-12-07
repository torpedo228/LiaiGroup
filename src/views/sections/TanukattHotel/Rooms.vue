<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';

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

</script>

<template>
  <div class="rooms_container" id="rooms">
    <Title :title="'房型介紹 ROOMS'" :color="'black'" />
    <p class="slogan">狸悅酒店設有222間多樣化客房，獨具巧思的空間設計，極緻貼心的客房服務，令旅客的住宿體驗格外舒適。</p>

    <div class="rooms_wrap">
      
    </div>

  </div>
</template>

<style scoped lang="scss">
div.rooms_container {
  width: 100%;
  height: 100vh;
  @include flex_vm();
  gap: 3vw;
  padding: 10vh 0;
}

p.slogan {
  font-size: 1.2vw;
}
</style>