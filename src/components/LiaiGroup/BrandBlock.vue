<script setup lang="ts">
import { defineProps } from 'vue'
import { getImageUrl } from '@/utils/image-url'
import PortalButton from '@/components/global/PortalButton.vue';

const props = defineProps({
  title_CH: String,
  title_EN: String,
  description: String,
  imgSrc: String,
  routingLink: String
})

</script>

<template>
  <div class="brand_block_container">
    <div class="img_container">
      <img class="brand" :src="getImageUrl(props.imgSrc as string)" alt="Liai Group brand">
    </div>
    <div class="text_container">
      <h4>{{ props.title_CH }}</h4>
      <h4>{{ props.title_EN }}</h4>
      <br>
      <p>{{ props.description }}
      </p>
    </div>
    <div class="btn_container">
      <PortalButton content="前往官網" type="brand_block" :routingLink="props.routingLink" />
    </div>
  </div>
</template>

<style scoped lang="scss">
div.brand_block_container {
  width: 16vw;
  height: 55vh;
  border-radius: $br_PC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3vh;

  @include boxShadow_PC()
}

div.img_container {
  width: 100%;
  height: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 55% 80%;
  }
}

div.text_container {
  text-align: center;
}
</style>
