<script setup lang="ts">
import PortalButton from '@/components/global/PortalButton.vue';

</script>

<template>
  <div class="hero_container" id="#hero">
    <div class="btn_block" data-aos="fade-in" data-aos-anchor-placement="#hero">
      <PortalButton content="立即訂票" type="tanuki_stage_order" routingLink="#" />
    </div>

    <img data-aos="flip-left" data-aos-mirror="false" data-aos-anchor-placement="#hero" class="slogan_1" src="@/assets/images/TanukiStage/hero/slogan_1.svg" alt="">
    <img data-aos="zoom-in-right" data-aos-anchor-placement="#hero"  class="slogan_2"
      src="@/assets/images/TanukiStage/hero/slogan_2.svg" alt="">
    <img class="hero" src="@/assets/images/TanukiStage/hero/hero_img.png" alt="">
  </div>
</template>

<style scoped lang="scss">
div.hero_container {
  z-index: 10;
  font-family: $regularFont;
  width: 80%;
  margin-left: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;

  div.btn_block {
    position: absolute;
    bottom: 2vh;
    right: 2vw;
  }

  p {
    font-size: 2vw;
    color: white;
    position: absolute;


  }

  img.hero {
    width: 100%;
    object-fit: cover;
  }

  img.slogan_1 {
    width: 50%;
    position: absolute;
    top: 15vh;
    right: 5vw;
    z-index: 999;
  }

  img.slogan_2 {
    width: 60%;
    position: absolute;
    top: 50vh;
    right: 5vw;
  }
}
</style>