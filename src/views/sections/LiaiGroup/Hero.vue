<script setup lang="ts">
import NavList from '@/components/LiaiGroup/NavList.vue';

</script>

<template>
  <div class="hero_container">
    <div class="left_section">
      <NavList />
      <div class="img_block">
        <a href="https://www.buymeacoffee.com/tanuki.jr">
          <img class="liai_group_logo" src="@/assets/images/LiaiGroup/liai_group_logo.svg" alt="LiaiGroup logo">
        </a>
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
  @include custom-responsive("xs sm") {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }


  @include custom-responsive("xl xxl") {
    position: static;
    transform: translate(0, 0);
    width: 40%;
    height: 100vh;
    @include liaiGroupGradient();
    @include flex_vm();
  }


  div.img_block {

    @include custom-responsive("xs sm") {
      margin: 8vh 0 1vh;
    }


    @include custom-responsive("xl xxl") {
      margin: 3vw 0 1vw;
    }

    img.liai_group_logo {

      display: block;
      margin: auto;

      @include custom-responsive("xs sm") {
        width: 70vw;
      }


      @include custom-responsive("xl xxl") {
        width: 16vw;
      }
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
  @include custom-responsive("xs sm") {
    width: 100%;
  }

  @include custom-responsive("xl xxl") {
    width: 60%;
  }

  img.hero_pic {
    height: 100vh;

    @include custom-responsive("xs sm") {
      width: 100vw;
      object-fit: cover;
      // object-position:-30vw;
    }


    @include custom-responsive("xl xxl") {}
  }
}
</style>
