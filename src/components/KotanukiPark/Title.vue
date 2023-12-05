<script setup lang="ts">
const props = defineProps({
  title: String,
  color: String
})
</script>

<template>
  <div class="title_container">
    <div class="title">
      <img src="@/assets/images/KotanukiPark/logo/title_logo.svg" alt="deco">
      <h2>{{ props.title }}</h2>
    </div>
    <div class="hl" :class="props.color"></div>
  </div>
</template>

<style scoped lang="scss">
div.title_container {
  text-align: start;
  z-index: 10;
  width: 30vw;
  position: relative;
}

div.title {
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 4vw;
    z-index: -1;
  }

  h2 {
    font-size: 2.5vw;
    font-weight: $fwMedium;
  }
}

div.hl {
  position: relative;
  left: 6vw;
  width: 10vw;
  height: 2vh;
}

.pink {
  background-color: $kotanukiParkSecondary;
}

.white {
  background-color: white;
}
</style>