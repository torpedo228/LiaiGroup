<script setup lang="ts">

</script>

<template>
  <RouterLink to="#">
    <div class="book_room_container">立即訂房<i class="fa-solid fa-bed"></i></div>
  </RouterLink>
</template>


<style scoped lang="scss">
div.book_room_container {
  position: fixed;
  right: 0;
  top: 40%;
  width: 4vw;
  height: 20vh;
  background-color: $tanukattHotelPrimary;
  border-radius: $br_PC 0 0 $br_PC;
  z-index: 999;
  color: white;
  writing-mode: tb-rl;
  @include flex_hm();
  gap: 1vh;
  font-size: 1.3vw;

  &:hover{
    background-color: $tanukattHotelSecondary;
  }
  &:active{
    transform: translate(2px, 2px);
  }
}
</style>