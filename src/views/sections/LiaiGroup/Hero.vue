<script setup lang="ts">
import NavList from '@/components/LiaiGroup/NavList.vue';

</script>

<template>
  <div class="hero_container">
    <div class="left_section">
      <NavList />
      <div class="img_block">
        <img class="liai_group_logo" src="@/assets/images/LiaiGroup/liai_group_logo.svg" alt="LiaiGroup logo">
      </div>
      <div class="text_container liai_group_font">
        <h1>狸愛集團</h1>
        <h2>回歸本心 回歸大自然</h2>
        <h3>狸愛集團 幸福所在</h3>
      </div>
    </div>
    <div class="right_section">
      <img class="hero_pic" src="@/assets/images/LiaiGroup/hero.jpg" alt="LiaiGroup hero photo">
    </div>

  </div>
</template>

<style scoped lang="scss">
div.hero_container {
  width: 100vw;
  height: 100vh;
  display: flex;
}

div.left_section {
  width: 40%;
  height: 100vh;
  @include liaiGroupGradient();
  @include flex_vm();

  div.img_block {
    margin: 2vw;

    img.liai_group_logo {
      width: 20vw;
      display: block;
      margin: auto;
    }
  }

  div.text_container {
    color: $white;
    text-align: center;

    h1 {
      display: block;
      margin-bottom: 2vh;
    }
  }

}

div.right_section {
  width: 60%;

  img.hero_pic {
    height: 100vh;
  }
}
</style>
