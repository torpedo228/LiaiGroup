<script setup lang="ts">

</script>

<template>
  <RouterLink to="#">
    <div class="reserve_restaurant_container">預定餐廳<i class="fa-solid fa-fish"></i></div>
  </RouterLink>
</template>


<style scoped lang="scss">
div.reserve_restaurant_container {
  position: fixed;
  right: 0;
  top: 60%;
  width: 4vw;
  height: 20vh;
  background-color: $tanukattHotelSecondary;
  border-radius: $br_PC 0 0 $br_PC;
  z-index: 999;
  color: white;
  writing-mode: tb-rl;
  @include flex_hm();
  gap: 1vh;
  font-size: 1.3vw;

  &:hover{
    background-color: $tanukattHotelPrimary;
  }

  &:active{
    transform: translate(2px, 2px);
  }
}
</style>