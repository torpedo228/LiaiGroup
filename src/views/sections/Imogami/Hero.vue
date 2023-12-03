<script setup lang="ts">

</script>

<template>
  <div class="hero_container">
    <div class="text_wrap">
      <p class="line_1">Fresh. Nutritious. Eco-friendly.<br>The Best Sweet Potato in Taiwan.</p>
      <h2 class="line_2">Sweet Potato<br>&emsp;&emsp;&emsp;Sweet Life</h2>
      <p class="line_3">好芋，好幸福。</p>
    </div>
    <div class="img_wrap">
      <img class="hero_img" src="@/assets/images/Imogami/hero/hero_img.svg" alt="hero_img">
      <img class="hero_deco animate__animated animate__bounce animate__infinite animate__slow"
        src="@/assets/images/Imogami/hero/hero_deco.svg" alt="hero_img">
    </div>

    <div class="scroll_down_wrap">
      <p>芋此前行</p>
      <RouterLink to="#about">
        <div class="icon_wrap">
          <i class="fa-solid fa-angles-down animate__animated animate__shakeY animate__infinite animate__slow"></i>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.hero_container {
  width: 100%;
  height: 100vh;
  @include flex_hm();
  position: relative;
}

div.text_wrap {
  font-family: $regularFont;
  position: relative;
  left: 10vw;
  top: 5vh;
  z-index: 10;

  p,
  h2 {
    font-weight: $fwBold;
  }

  p.line_1 {
    color: $imogamiMidPurple;
    font-size: 1.5vw;
  }

  h2 {
    color: $imogamiPrimary;
    font-size: 5vw;
    text-indent: 5vw;
    margin: 2vh 0;
    font-style: italic;
  }

  p.line_3 {
    color: $imogamiPrimary;
    font-size: 2.5vw;
    text-indent: 5vw;
  }

}

div.img_wrap {
  padding-right: 5vw;
  position: relative;

  img.hero_img {
    width: 50vw;
  }

  img.hero_deco {
    position: absolute;
    bottom: 0;
    right: 5vw;
    width: 15vw;
  }
}

div.scroll_down_wrap {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 90vh;

  @include flex_vm();

  p {
    color: $imogamiSecondary;
    font-size: 1.5vw;
    font-weight: $fwBold;
  }

  div.icon_wrap {
    width: 3vw;
    height: 3vw;
    @include flex_hm();
    border-radius: $circle;
    border: 10px solid $imogamiSecondary;


    i {
      color: $imogamiSecondary;
      font-size: 2vw;
      animation-duration: 8s
    }
  }
}
</style>