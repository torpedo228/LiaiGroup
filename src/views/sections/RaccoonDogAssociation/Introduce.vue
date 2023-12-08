<script setup lang="ts">
import PortalButton from '@/components/global/PortalButton.vue';


</script>

<template>
  <div class="introduce_container" id="introduce">
    <div class="content_wrap">
      <h2>認識狸猫</h2>
      <p>你對狸猫有多了解呢?<br>一起從狸猫的外觀、分布、食性等角度<br>來認識狸猫吧!</p>
      <div class="btn_block">
        <PortalButton content="狸猫揭密!" type="rda_intro" routingLink="/tanuki" />
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
div.introduce_container {
  width: 100%;
  height: 80vh;
  background-image: url('@/assets/images/RaccoonDogAssociation/introduce/introduce.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -10vh;
  @include flex_hm();
}


div.content_wrap {
  font-weight: $fwBold;
  color: $white;
  @include flex_vm();
  gap: 5vh;
  text-align: center;

  h2 {
    font-size: 3vw;
  }

  p{
    font-size: 1.5vw;
  }
}
</style>