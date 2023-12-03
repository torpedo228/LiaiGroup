<script setup lang="ts">
</script>

<template>
  <div class="container">
    <label for="">訂閱電子報</label>
    <input type="text" placeholder="請填寫您的Email"><i class="fa-solid fa-paper-plane send"></i>
  </div>
</template>

<style scoped lang="scss">
div.container {
  position: relative;
  @include flex_hm();
}

input {
  border: 1px solid $liaiGroupPrimary;
  border-radius: $regularBtnBr;
  background-color: $white;

  &:focus {
    transition: 0.2s;
    outline: none;
    background-color: $liaiGroupSecondary;
  }
}


i.send {
  position: absolute;
  top: 25%;
  color: $liaiGroupPrimary;
  @include sendEffect();

  @include custom-responsive("xs sm") {
    right: 5vw;
    font-size: 6vw;
  }

  @include custom-responsive("xl xxl") {
    right: 1vw;
    font-size: 1.2vw;
  }
}


input {
  @include p();

  @include custom-responsive("xs sm") {
    width: 50vw;
    height: 4vh;
    margin-left: 3vw;
    padding: 1vw 3vw;
  
  }

  @include custom-responsive("xl xxl") {
    width: 12vw;
    height: 3vh;
    margin-left: 1vw;
    padding: 0.5vw 1vw;
  
  }

}
</style>
