<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  content: String,
  type: String,
  routingLink: String
})

enum TYPE {
  brand_block = "brand_block_btn_color"
}

</script>

<template>
  <div class="btn_container" :class="TYPE[props.type as keyof typeof TYPE]"
    @click="router.push({ path: props.routingLink })">

    <p>{{ props.content }}</p>

    <div class="icon_block">
      <i class="fa-solid fa-circle-arrow-right"></i>
    </div>

  </div>
</template>

<style scoped lang="scss">
div.btn_container {
  width: 10vw;
  height: 6vh;
  border-radius: $regularBtnBr;
  margin: 2vw 1vw 0.5vw;
  @include flex_hm();
  @include btnEffect($liaiGroupPrimary, $white);
}

p {
  margin: 0 1vw;
}

i {
  font-size: 1.5vw;
  display: block;
  width: 2vw;
  height: 2vw;
  position: relative;
  transform: translateY(5%);
  @include flex_hm();
}


// Liai Group
.brand_block_btn_color {
  background-color: $white;
  color: $liaiGroupPrimary;
  border: 1px solid $liaiGroupPrimary;
}
</style>
