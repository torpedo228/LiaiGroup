<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';



</script>

<template>
  <div class="rooms_container" id="rooms">
    <Title :title="'房型介紹 ROOMS'" :color="'black'" />


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


</style>