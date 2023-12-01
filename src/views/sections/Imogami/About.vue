<script setup lang="ts">
import Title from '@/components/Imogami/Title.vue';
import PortalButton from '@/components/global/PortalButton.vue';
</script>

<template>
  <div class="about_container" id="about">
    <img src="@/assets/images/Imogami/about/tanukijr_osusume.png" alt="tanukijr_osusume">
    <div class="content_wrap">
      <Title :title="'About'" :color="'yellow'" :imgSrc="'Imogami/title/about.svg'" />
      <pre>自產自銷的有機地瓜農場
追求自然、用心耕耘
每一口，都有狸貓的加持
芋神，品味不僅是味蕾的享受
更是與大地共舞的情感</pre>
      <div class="btn_block">
        <PortalButton content="了解更多" type="imogami_about" routingLink="/" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.about_container {
  display: flex;
  gap: 3vw;
}

img {
  width: 65vw;
}

div.content_wrap {
  display: flex;
  flex-direction: column;
  margin-top: 15vh;

  pre {
    font-size: 1.5vw;
    color: $imogamiSlogan;
    font-weight: $fwBold;
    line-height: 8vh;
    margin-top: 5vh;
  }


  div.btn_block {
    position: relative;
    left: 10vw;
  }
}
</style>