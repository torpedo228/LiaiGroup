<script setup lang="ts">
import Header from '@/layouts/TanukattHotel/Header.vue';
import Hero from '@/views/sections/TanukattHotel/Hero.vue';
import About from '@/views/sections/TanukattHotel/About.vue';
import Rooms from '@/views/sections/TanukattHotel/Rooms.vue';
import Restaurants from '@/views/sections/TanukattHotel/Restaurants.vue';
import Facility from '@/views/sections/TanukattHotel/Facility.vue';
import Transport from '@/views/sections/TanukattHotel/Transport.vue';
import Footer from '@/layouts/TanukattHotel/Footer.vue';
</script>

<template>
  <div class="tanukatt_hotel_section_container">
    <Header />
    <Hero />
    <About />
    <Rooms />
    <Restaurants />
    <Facility />
    <Transport />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
div.tanukatt_hotel_section_container {
  font-family: $kotanukiFont;
}
</style>
