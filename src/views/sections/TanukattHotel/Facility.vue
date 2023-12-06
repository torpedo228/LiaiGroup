<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';



</script>

<template>
  <div class="facility_container" id="facility">
    <Title :title="'服務設施 FACILITY'" :color="'black'" />


  </div>
</template>

<style scoped lang="scss">
div.facility_container {
  width: 100%;
  height: 100vh;
  @include flex_vm();
  gap: 3vw;
  padding: 10vh;
}


</style>