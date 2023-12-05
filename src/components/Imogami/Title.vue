<script setup lang="ts">
import { getImageUrl } from '@/utils/assets-url'

const props = defineProps({
  title: String,
  color: String,
  imgSrc: String,
  content: String
})
</script>

<template>
  <div class="title_container">
    <img :src="getImageUrl(props.imgSrc as string)" alt="deco">
    <div class="title">
      <h2 :class="props.color">{{ props.title }}</h2>
    </div>
    <p>{{ props.content }}</p>
  </div>
</template>

<style scoped lang="scss">
div.title_container {
  width: 20vw;
  padding-top: 8vh;
  position: relative;
}

div.title {
  position: relative;
  width: 20vw;
  text-align: end;
  z-index: 1;

  h2 {
    font-size: 4vw;
    font-weight: $fwBold;
    font-style: italic;

  }
}


p {
  font-size: 1.5vw;
  color: $imogamiMidPurple;
  text-align: end;
}

img {
  width: 6vw;
  position: relative;
  top: 9vh;
  left: 18vw;
  z-index: 0;
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
</style>@/utils/assets-url