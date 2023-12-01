<script setup lang="ts">
import Header from '@/layouts/Imogami/Header.vue';
import Hero from '@/views/sections/Imogami/Hero.vue';
import About from '@/views/sections/Imogami/About.vue';
import Products from '@/views/sections/Imogami/Products.vue';
import News from '@/views/sections/Imogami/News.vue';
import Footer from '@/layouts/Imogami/Footer.vue';
</script>

<template>
  <div class="imogami_section_container">
    <Header />
    <Hero />
    <About />
    <Products />
    <News />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
div.imogami_section_container {
  font-family: $regularFont;
  width: 100%;
}
</style>
