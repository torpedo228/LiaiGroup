<script setup lang="ts">
import BrandBlock from '@/components/LiaiGroup/BrandBlock.vue';

const brandList = [
  {
    title_CH: '芋神',
    title_EN: 'Imogami',
    description: '嚴選地瓜',
    imgSrc: '@/assets/images/LiaiGroup/brand/Imogami.jpg',
    routingLink: '/imogami'
  },
  {
    title_CH: '國營狸子記念公園',
    title_EN: 'Kotanuki Park',
    description: '旅憩首選',
    imgSrc: '@/assets/images/LiaiGroup/brand/KotanukiPark.jpg',
    routingLink: '/kotanuki-park'
  },
  {
    title_CH: '狸悅酒店',
    title_EN: 'Tanukatt Hotel',
    description: '至上服務',
    imgSrc: '/assets/images/LiaiGroup/brand/TanukattHotel.jpg',
    routingLink: '/tanukatt-hotel'
  },
  {
    title_CH: '狸貓保育協會',
    title_EN: 'Raccoon Dog Association',
    description: '自然愛護',
    imgSrc: '/src/assets/images/LiaiGroup/brand/RaccoonDogAssociation.jpg',
    routingLink: '/raccoon-dog-association'
  },
  {
    title_CH: '狸劇團',
    title_EN: 'Tanuki Stage',
    description: '精湛演出',
    imgSrc: '/src/assets/images/LiaiGroup/brand/TanukiStage.jpg',
    routingLink: '/tanuki-stage'
  }]
</script>

<template>
  <div class="brand_container">
    <div class="title_block">
      <h2 class="liai_group_font">狸愛品牌</h2>
      <div class="under_deco"></div>
    </div>
    <div class="brand_wrap">
      <BrandBlock v-for="brand in brandList" :key="brand.title_CH" :title_CH="brand.title_CH" :title_EN="brand.title_EN"
        :description="brand.description" :imgSrc="brand.imgSrc" :routingLink="brand.routingLink" />
    </div>

  </div>
</template>

<style scoped lang="scss">
div.brand_container {
  width: 100vw;
  height: 100vh;
  @include flex_vm();

}

div.title_block {
  @include flex_vm();

  div.under_deco {
    width: 9vw;
    height: 2.5vh;
    background-color: $liaiGroupPrimary;
  }
}

div.brand_wrap {
  margin-top: 5vh;
  padding: 1vw;
  @include flex_hm();
  gap: 1vw;
}
</style>
