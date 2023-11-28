<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Hero from '@/views/sections/LiaiGroup/Hero.vue';
import Brand from '@/views/sections/LiaiGroup/Brand.vue';
import JoinUs from '@/views/sections/LiaiGroup/JoinUs.vue';

</script>

<template>
  <div class="section_container">
    <Hero />
    <Brand />
    <JoinUs />
  </div>
</template>

<style scoped lang="scss">
div.section_container {
  width: 100%;
  overflow: hidden;
}
</style>
