<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  content: String,
  type: String
})

enum TYPE {
  brand_block = "brand_block_btn_color"
}

</script>

<template>
  <div class="btn_container" :class="TYPE[props.type as keyof typeof TYPE]">
    <p>{{ props.content }}</p>
    <i class="fa-solid fa-circle-arrow-right"></i>
  </div>
</template>

<style scoped lang="scss">
div.btn_container {
  width: 10vw;
  height: 6vh;
  border-radius: $regularBtnBr;
  @include flex_hm();
  gap: 1vw;

  @include btnEffect();
}

i {
  font-size: 1.5vw;
  display: block;
  width: 2vw;
  height: 2vw;
  @include flex_hm();
}

// Liai Group
.brand_block_btn_color {
  background-color: $white;
  color: $liaiGroupPrimary;
  border: 1px solid $liaiGroupPrimary;
}
</style>
