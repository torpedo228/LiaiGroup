<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';



</script>

<template>
  <div class="restaurants_container" id="restaurants">
    <Title :title="'美饌佳餚 RESTAURANT'" :color="'white'" />


  </div>
</template>

<style scoped lang="scss">
div.restaurants_container {
  width: 100%;
  height: 100vh;
  @include flex_vm();
  gap: 3vw;
  padding: 10vh;
  background-color: $tanukattHotelDeco;
}
</style>