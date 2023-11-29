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
  brand_block = "brand_block_btn_color",
  learn_more = "learn_more_btn_color"
}

</script>

<template>
  <div class="btn_container" :class="TYPE[props.type as keyof typeof TYPE]"
    @click="router.push({ path: props.routingLink as string })">

    <p>{{ props.content }}</p>
    <i class="fa-solid fa-circle-arrow-right"></i>
  </div>
</template>

<style scoped lang="scss">
div.btn_container {
  border-radius: $regularBtnBr;
  margin: 2vw 1vw 0.5vw;
  @include flex_hm();

  @include custom-responsive("xs sm") {
    width: 50vw;
    height: 6vh;
  }


  @include custom-responsive("xl xxl") {
    width: 10vw;
    height: 6vh;
  }

}

p {

  @include custom-responsive("xs sm") {
    margin: 0 4vw 0 10vw;
  }


  @include custom-responsive("xl xxl") {
    margin: 0 1vw;
  }
}


i {
  display: block;
  @include flex_hm();

  @include custom-responsive("xs sm") {
    width: 12vw;
    height: 12vw;
    font-size: 8vw;
  }


  @include custom-responsive("xl xxl") {
    width: 2vw;
    height: 2vw;
    font-size: 1.5vw
  }

}


// Liai Group
.brand_block_btn_color {
  background-color: $white;
  color: $liaiGroupPrimary;
  border: 1px solid $liaiGroupPrimary;

  @include btnEffect($liaiGroupPrimary, $white, $liaiGroupPrimary);
}

.learn_more_btn_color {
  background-color: $white;
  color: $liaiGroupPrimary;
  border: 1px solid $white;

  @include btnEffect($white, $liaiGroupPrimary, $white);
}
</style>
