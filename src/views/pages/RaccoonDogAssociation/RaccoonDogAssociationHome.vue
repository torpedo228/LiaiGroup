<script setup lang="ts">
import Header from '@/layouts/RaccoonDogAssociation/Header.vue';
import Hero from '@/views/sections/RaccoonDogAssociation/Hero.vue';
import News from '@/views/sections/RaccoonDogAssociation/News.vue';
import Introduce from '@/views/sections/RaccoonDogAssociation/Introduce.vue';
import Actions from '@/views/sections/RaccoonDogAssociation/Actions.vue';
import Help from '@/views/sections/RaccoonDogAssociation/Help.vue';
import Footer from '@/layouts/RaccoonDogAssociation/Footer.vue';
</script>

<template>
  <div class="raccoon_dog_association_section_container">
    <Header />
    <Hero />
    <News />
    <Introduce />
    <Introduce />
    <Actions />
    <Info />
    <Help />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
div.raccoon_dog_association_section_container {
  font-family: $regularFont;
  overflow-x: hidden;
}
</style>
