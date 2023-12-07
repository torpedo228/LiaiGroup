<script setup lang="ts">

</script>

<template>
  <div class="hero_container">
    <div class="content_wrap">
      <img class="logo_footer" src="@/assets/images/TanukattHotel/logo/logo_footer.svg" alt="logo_footer">
      <p class="slogan">奢華之地，獨具匠心。我們期待為您締造一場奇妙的住宿體驗。
      </p>

      <div class="input_wrap">
        <input type="date" name="" id="">
        <input type="date" name="" id="">
        <div class="count_and_rooms">
          <i class="fa-solid fa-user"></i>1位成人 2位孩童 1間客房
        </div>
        <button class="search">搜尋空房<i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div class="count_and_rooms_wrap">
        <div class="wrap people">
          <p class="label">成人</p>
          <div class="count"><i class="fa-solid fa-plus"></i><span>1</span><i class="fa-solid fa-minus"></i></div>
        </div>
        <div class="wrap people">
          <p class="label">小孩</p>
          <div class="count"><i class="fa-solid fa-plus"></i><span>1</span><i class="fa-solid fa-minus"></i></div>
        </div>
        <div class="wrap rooms">
          <p class="label">客房</p>
          <div class="count"><i class="fa-solid fa-plus"></i><span>1</span><i class="fa-solid fa-minus"></i></div>
        </div>
        <button class="search">完成<i class="fa-solid fa-check"></i></button>

      </div>
    </div>

    <img class="hero_img" src="@/assets/images/TanukattHotel/hero/hero_img.png" alt="hero_img">

  </div>
</template>

<style scoped lang="scss">
div.hero_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  @include flex_vm();

  img.hero_img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}

div.content_wrap {
  border: 1px solid red;
  width: 100vw;
  @include flex_vm();
  position: absolute;

  img.logo_footer {
    width: 25vw;
    object-fit: cover;
  }

  p.slogan {
    font-size: 1.2vw;
    color: white;
  }

  div.input_wrap {
    @include flex_hm();
    border: 1px solid red;
    width: 50vw;

    div.count_and_rooms_wrap {
      width: 20vw;
      height: 20vh;
      background-color: white;
      border-radius: $br_PC;
      position: absolute;

      div.wrap {
        @include flex_hm();
      }
    }
  }



}
</style>