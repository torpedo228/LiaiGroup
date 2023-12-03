<script setup lang="ts">
import PortalButton from '@/components/global/PortalButton.vue';

</script>

<template>
  <div class="hero_container">
    <div class="btn_block">
      <PortalButton content="立即訂票" type="tanuki_stage_order" routingLink="#" />
    </div>
    <img src="@/assets/images/TanukiStage/hero/hero_img.svg" alt="">
  </div>
</template>

<style scoped lang="scss">
div.hero_container {
  font-family: $regularFont ;
  width: 80%;
  margin-left: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;

  div.btn_block {
    position: absolute;
    // bottom: 30vh;
    bottom: 2vh;
    right: 2vw;
  }

  p {
    font-size: 2vw;
    color: white;
    position: absolute;


  }

  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>