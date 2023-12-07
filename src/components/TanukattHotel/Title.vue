<script setup lang="ts">
const props = defineProps({
  title: String,
  color: String
})
</script>

<template>
  <div class="title_container">
    <div class="title">
      <img src="@/assets/images/TanukattHotel/logo/logo.svg" alt="deco">
      <h2 :class="props.color">{{ props.title }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.title_container {
  text-align: start;
  z-index: 10;
  position: relative;
}

div.title {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1vw;


  img {
    width: 4vw;
    z-index: -1;
  }

  h2 {
    font-size: 2.5vw;
    font-weight: $fwMedium;
  }
}


.black {
  color: $textColor;
}

.white {
  color: $white;
}
</style>