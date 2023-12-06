<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';



</script>

<template>
  <div class="transport_container" id="transport">
    <Title :title="'交通方式 TRANSPORTATION'" :color="'black'" />


  </div>
</template>

<style scoped lang="scss">
div.transport_container {
  width: 100%;
  height: 100vh;
  @include flex_vm();
  gap: 3vw;
  padding: 10vh;
  background-color: $tanukattHotelGrey;
}


</style>