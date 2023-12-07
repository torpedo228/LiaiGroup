<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';



</script>

<template>
  <div class="transport_container" id="transport">
    <Title :title="'交通方式 TRANSPORTATION'" :color="'black'" />

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.92260426794326!2d144.80418579656572!3d13.512204691078479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x671f828c8641db49%3A0x4a56b83c55ce7778!2z6Zec5bO25Yex5oKF6YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1701928698213!5m2!1szh-TW!2stw"
      width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<style scoped lang="scss">
div.transport_container {
  width: 100%;
  height: 100vh;
  @include flex_vm();
  gap: 3vw;
  padding: 10vh 0;
  background-color: $tanukattHotelGrey;
}
</style>