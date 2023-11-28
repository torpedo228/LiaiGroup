<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Hero from '@/views/sections/LiaiGroup/Hero.vue';
import Brand from '@/views/sections/LiaiGroup/Brand.vue';

</script>

<template>
  <div class="section_container">
    <Hero/>
    <Brand/>
    <!-- 狸貓白胖肥龍
    <RouterLink to="/tanuki" class="">狸貓真相</RouterLink> -->
  </div>
</template>

<style scoped lang="scss">
div.section_container{
  width: 100%;
  overflow: hidden;
}
</style>
