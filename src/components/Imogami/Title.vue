<script setup lang="ts">
import { defineProps } from 'vue'
import { getImageUrl } from '@/utils/image-url'

const props = defineProps({
  title: String,
  color: String,
  imgSrc: String
})
</script>

<template>
  <div class="title_container">
    <img :src="getImageUrl(props.imgSrc as string)" alt="deco">
    <h2 :class="props.color">{{ props.title }}</h2>

  </div>
</template>

<style scoped lang="scss">
div.title_container {
  width: 20vw;
  padding-top: 8vh;
  position: relative;
}

h2 {
  font-size: 4vw;
  font-weight: $fwBold;
  font-style: italic;
  z-index: 1;
}

img {
  width: 6vw;
  position: absolute;
  bottom: 3vh;
  right: 4vw;
  z-index: -1;
}


.yellow {
  color: $imogamiPrimary;
}

.purple {
  color: $imogamiSecondary;
}

.white {
  color: white;
}
</style>