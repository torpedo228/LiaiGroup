<script setup lang="ts">

</script>

<template>
  <div class="drama_container">
    <div class="title_block">
      <img src="@/assets/images/TanukiStage/title/title_tickets.svg" alt="">
    </div>

    <img class="deco" src="@/assets/images/TanukiStage/deco.svg" alt="">

  </div>
</template>

<style scoped lang="scss">
div.drama_container {
  height: 100vh;
  width: 80%;
  margin-left: auto;
  position: relative;
}

div.title_block {
  margin: 5vh 5vw;

  img {
    height: 12vh;
  }
}

img.deco {
  position: absolute;
  height: 30vh;
  right: 0;
  top: -20vh;
}
</style>