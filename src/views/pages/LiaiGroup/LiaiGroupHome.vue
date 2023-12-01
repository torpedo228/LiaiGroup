<script setup lang="ts">
import Header from '@/layouts//LiaiGroup/Header.vue';
import Hero from '@/views/sections/LiaiGroup/Hero.vue';
import Brand from '@/views/sections/LiaiGroup/Brand.vue';
import JoinUs from '@/views/sections/LiaiGroup/JoinUs.vue';
import Footer from '@/layouts//LiaiGroup/Footer.vue';

</script>

<template>
  <div class="liai_group_section_container">
    <Header />
    <Hero />
    <Brand />
    <JoinUs />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
div.liai_group_section_container {
  width: 100%;
  overflow: hidden;
}
</style>
