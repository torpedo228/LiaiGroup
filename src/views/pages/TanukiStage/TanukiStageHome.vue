<script setup lang="ts">
import SideMenu from '@/layouts/TanukiStage/SideMenu.vue';
import Hero from '@/views/sections/TanukiStage/Hero.vue';
import Group from '@/views/sections/TanukiStage/Group.vue';
import Drama from '@/views/sections/TanukiStage/Drama.vue';
import Info from '@/views/sections/TanukiStage/Info.vue';
import Footer from '@/layouts/TanukiStage/Footer.vue';

import { onMounted } from 'vue'

var audio = new Audio('/src/assets/audio/tanuki_stage_bgm.mp3')

onMounted(() => {
  audio.play()
})

</script>

<template>
  <div>
    <audio autoplay controls loop src='/src/assets/audio/tanuki_stage_bgm.mp3'>
    </audio>
    <SideMenu />
    <Hero />
    <Group />
    <Drama />
    <Info />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
div.tanuki_stage_section_container {
  font-family: $regularFont;
}

audio {
  position: absolute;
  right: 20vw;
  z-index: 999;
}
</style>
