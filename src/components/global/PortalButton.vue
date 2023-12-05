<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  content: String,
  type: String,
  routingLink: String
})

enum TYPE {
  liai_brand_block = "liai_brand_block_btn_color",
  liai_learn_more = "liai_learn_more_btn_color",
  imogami_more = "imogami_more_btn_color",
  imogami_all_products = "imogami_all_products_btn_color",
  imogami_full_news = "imogami_full_news_btn_color",
  kotanuki_park_all_news = "kotanuki_park_all_news_btn_color",
  tanuki_stage_order = "tanuki_stage_order_btn_color",
  tanuki_stage_learn_more = "tanuki_stage_learn_more_btn_color",
  tanuki_stage_invite = "tanuki_stage_invite_btn_color",
  tanuki_stage_tickets = "tanuki_stage_tickets_btn_color",
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
  box-sizing: border-box;
  border-radius: $regularBtnBr;
  margin: 0.5vw;
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
.liai_brand_block_btn_color {
  background-color: $white;
  color: $liaiGroupPrimary;
  border: 1px solid $liaiGroupPrimary;

  @include btnEffect($liaiGroupPrimary, $white, $liaiGroupPrimary);
}

.liai_learn_more_btn_color {
  background-color: $white;
  color: $liaiGroupPrimary;
  border: 1px solid $white;

  @include btnEffect(white, $liaiGroupPrimary, $white);
}

.imogami_more_btn_color {
  background-color: $imogamiSecondary;
  color: $imogamiPrimary;
  border: 1px solid $imogamiSecondary;

  @include btnEffect($imogamiPrimary, $imogamiSecondary, $imogamiPrimary);
}

.imogami_all_products_btn_color {
  background-color: $imogamiSecondary;
  color: $imogamiPrimary;
  border: 1px solid $imogamiSecondary;

  @include btnEffect($white, $imogamiSecondary, $white);
}
.imogami_full_news_btn_color {
  background-color: $white;
  color: $imogamiSecondary;
  border: 1px solid $white;

  @include btnEffect($imogamiSecondary, $white, $imogamiSecondary);
}
.kotanuki_park_all_news_btn_color {
  background-color: $kotanukiParkPrimary;
  color: $white;
  border: 1px solid $kotanukiParkPrimary;

  @include btnEffect($kotanukiParkPrimary, $white, $kotanukiParkPrimary);
}
.tanuki_stage_order_btn_color {
  background-color: $tanukiStagePrimary;
  color: $white;
  border: 1px solid $tanukiStagePrimary;

  @include btnEffect($white, $tanukiStagePrimary, $white);
}
.tanuki_stage_learn_more_btn_color {
  background-color: none;
  color: $white;
  border: 1px solid $white;

  @include btnEffect($tanukiStagePrimary, $white, $tanukiStagePrimary);
}

.tanuki_stage_tickets_btn_color {
  background-color: $tanukiStageSecondary;
  color: $white;
  border: 1px solid $tanukiStageSecondary;

  @include btnEffect($tanukiStagePrimary, $white, $tanukiStagePrimary);
}
.tanuki_stage_invite_btn_color {
  background-color: $white;
  color: $tanukiStageSecondary;
  border: 1px solid $white;

  @include btnEffect($tanukiStagePrimary, $white, $tanukiStagePrimary);
}
</style>
