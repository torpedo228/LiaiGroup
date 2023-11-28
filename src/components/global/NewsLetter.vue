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
}

label {
  font-size: 1vw;
}

input {
  font-size: 1vw;
  margin-left: 1vw;
  padding: 0.5vw 1vw;
  width: 12vw;
  height: 3vh;
  border: 1px solid $liaiGroupPrimary;
  border-radius: $regularBtnBr;
  background-color:$white;

  &:focus {
    transition: 0.2s;
    outline: none;
    background-color: $liaiGroupSecondary;
  }
}

i.send {
  font-size: 1vw;
  position: absolute;
  top: 1.4vh;
  left: 18vw;
  color: $liaiGroupPrimary;

  @include sendEffect();
}
</style>
