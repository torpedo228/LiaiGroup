<script setup lang="ts">
import SideMenu from '@/layouts/TanukiStage/SideMenu.vue';
import Hero from '@/views/sections/TanukiStage/Hero.vue';
import Group from '@/views/sections/TanukiStage/Group.vue';
import Drama from '@/views/sections/TanukiStage/Drama.vue';
import Info from '@/views/sections/TanukiStage/Info.vue';
import Footer from '@/layouts/TanukiStage/Footer.vue';
</script>

<template>
  <div class="tanuki_stage_section_container">
    <SideMenu />
    <Hero />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Group />
    <Drama />
    <Info />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
div.kotanuki_park_section_container {
  font-family: $kotanukiFont;
}
</style>
