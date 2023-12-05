<script setup lang="ts">
import PortalButton from '@/components/global/PortalButton.vue';
</script>

<template>
  <div class="container">
    <div class="bg_image_wrap"></div>
    <div class="content_wrap">
      <div class="title_block">
        <h2 class="liai_group_font">人才招募</h2>
        <div class="under_deco"></div>
      </div>
      <p class="content">竭誠歡迎懷抱夢想與熱情的人才加入，在狸愛這個世界舞台上，創造價值、實現夢想</p>
      <div class="btn_block">
        <PortalButton content="了解更多" type="liai_learn_more" routingLink="/join-us" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.container {
  position: relative;
  width: 100%;
  height: 70vh;
  @include flex_vm();
}

div.bg_image_wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background-image: url('/src/assets/images/LiaiGroup/join_us_background.png');
  background-position: 25% 20%;
  background-size: cover;
  opacity: 0.4;
}

div.content_wrap {
  @include flex_vm();
  gap: 3vh;
}

div.title_block {
  @include flex_vm();

  div.under_deco {
    @include custom-responsive("xs sm") {
      width: 45vw;
      height: 2.5vh;
    }


    @include custom-responsive("xl xxl") {
      width: 9vw;
      height: 2.5vh;
    }

    border-radius: $br_PC;
    ;
    background-color: $liaiGroupPrimary;
  }
}

p.content {
  text-align: center;
  @include custom-responsive("xs sm") {
    width: 80%;
    font-size: 6vw;
  }


  @include custom-responsive("xl xxl") {
    width: 100%;
    font-size: 1.2vw;
  }
}
</style>
