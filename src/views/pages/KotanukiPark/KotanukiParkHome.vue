<script setup lang="ts">
import Header from '@/layouts/KotanukiPark/Header.vue';
import Hero from '@/views/sections/KotanukiPark/Hero.vue';
import News from '@/views/sections/KotanukiPark/News.vue';
import Seasonal from '@/views/sections/KotanukiPark/Seasonal.vue';
import Transport from '@/views/sections/KotanukiPark/Transport.vue';
import Footer from '@/layouts/KotanukiPark/Footer.vue';
</script>

<template>
  <div class="kotanukiPark_section_container">
    <Header />
    <Hero />
    <News />
    <Seasonal />
    <Transport />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
div.kotanukiPark_section_container {
  font-family: $kotanukiFont;
}
</style>
