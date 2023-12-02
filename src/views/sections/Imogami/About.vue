<script setup lang="ts">
import Title from '@/components/Imogami/Title.vue';
import PortalButton from '@/components/global/PortalButton.vue';
</script>

<template>
  <div class="about_container" id="about">
    <a href="https://www.buymeacoffee.com/tanuki.jr">
      <img src="@/assets/images/Imogami/about/tanukijr_osusume.png" alt="tanukijr_osusume">
    </a>
    <div class="content_wrap">
      <Title :title="'About'" :color="'yellow'" :imgSrc="'Imogami/title/about.svg'" />
      <pre>自產自銷的有機地瓜農場
追求自然、用心耕耘
每一口，都有狸貓的祝福
芋神，品味不僅是味蕾的享受
更是與大地共舞的情感</pre>
      <div class="btn_block">
        <PortalButton content="了解更多" type="imogami_more" routingLink="#" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.about_container {
  overflow: hidden;
  display: flex;
  gap: 3vw;
  padding-bottom: 20vh;
}

img {
  width: 65vw;
  cursor: pointer;
}

div.content_wrap {
  display: flex;
  flex-direction: column;
  gap: 5vh;

  pre {
    font-size: 1.5vw;
    color: $imogamiMidPurple;
    font-weight: $fwBold;
    line-height: 8vh;
  }


  div.btn_block {
    position: relative;
    left: 10vw;
  }
}
</style>