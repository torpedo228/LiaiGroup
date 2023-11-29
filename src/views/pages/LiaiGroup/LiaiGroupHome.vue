<script setup lang="ts">
import Header from '@/layouts//LiaiGroup/Header.vue';
import SideMenu from '@/components/global/SideMenu.vue';
import Hero from '@/views/sections/LiaiGroup/Hero.vue';
import Brand from '@/views/sections/LiaiGroup/Brand.vue';
import JoinUs from '@/views/sections/LiaiGroup/JoinUs.vue';
import Footer from '@/layouts//LiaiGroup/Footer.vue';

</script>

<template>
  <div class="section_container">
    <Header />
    <!-- <div class="side_menu">
      <SideMenu type="liai" />
    </div> -->
    <Hero />
    <Brand />
    <JoinUs />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
div.section_container {
  width: 100%;
  overflow: hidden;
}
</style>
