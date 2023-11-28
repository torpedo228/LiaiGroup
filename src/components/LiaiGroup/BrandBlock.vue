<script setup lang="ts">
import { defineProps } from 'vue'
import PortalButton from '@/components/global/PortalButton.vue';

const props = defineProps({
  title_CH: String,
  title_EN: String,
  description: String,
  imgSrc: String
})
</script>

<template>
  <div class="brand_block_container">
    <div class="img_container">
      <img class="brand" :src="props.imgSrc" alt="LiaiGroup logo">
    </div>
    <div class="text_container">
      <h4>{{ props.title_CH }}</h4>
      <h4>{{ props.title_EN }}</h4>
      <br>
      <p>{{ props.description }}
      </p>
    </div>
    <div class="btn_container">
      <PortalButton content="前往官網" type="brand_block" />
    </div>
  </div>
</template>

<style scoped lang="scss">
div.brand_block_container {
  width: 16vw;
  height: 55vh;
  border: 1px solid $liaiGroupPrimary;
  border-radius: $br_PC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

}

div.img_container {
  width: 100%;
  height: 60%;

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

div.btn_container {
  margin-bottom: 1vh;
}
</style>
