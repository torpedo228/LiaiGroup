<script setup lang="ts">
import Title from '@/components/KotanukiPark/Title.vue';

</script>

<template>
  <div class="transport_container">
    <div class="title_block">
      <Title :title="'交通資訊'" :color="'white'" />
    </div>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116173.223731807!2d120.66436311779137!3d24.50577924276691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469abf958c90623%3A0x9d5c692a649f575d!2z6LKT6LKN5bGx5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1701595919802!5m2!1szh-TW!2stw"
        width="900" height="500" style="border:0;" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.transport_container {
  position: relative;
  width: 100%;

  background-color: $kotanukiParkBg;
  @include flex_hm();
}


div.title_block {
  position: absolute;
  left: 25vw;
  top: 10vh;
}

div.map {
  margin: 25vh auto 10vh;
}
</style>