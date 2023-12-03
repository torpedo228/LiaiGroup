<script setup lang="ts">
import Title from '@/components/KotanukiPark/Title.vue';

</script>

<template>
  <div class="seasonal_container">
    <div class="title_block">
      <Title :title="'當季花卉 (9月~12月)'" :color="'pink'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
div.seasonal_container {
  width: 100%;
  height: 100vh;
  position: relative;
}

div.title_block {
  position: absolute;
  left: 25vw;
  top: 10vh;
}
</style>