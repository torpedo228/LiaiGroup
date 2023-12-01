<script setup lang="ts">
import BrandBlock from '@/components/LiaiGroup/BrandBlock.vue';

const brandList = [
  {
    title_CH: '芋神',
    title_EN: 'Imogami',
    description: '嚴選地瓜',
    imgSrc: 'LiaiGroup/brand/Imogami.jpg',
    routingLink: '/imogami'
  },
  {
    title_CH: '國營狸子記念公園',
    title_EN: 'Kotanuki Park',
    description: '旅憩首選',
    imgSrc: 'LiaiGroup/brand/KotanukiPark.jpg',
    routingLink: '/kotanuki-park'
  },
  {
    title_CH: '狸悅酒店',
    title_EN: 'Tanukatt Hotel',
    description: '尊榮服務',
    imgSrc: 'LiaiGroup/brand/TanukattHotel.jpg',
    routingLink: '/tanukatt-hotel'
  },
  {
    title_CH: '狸貓保育協會',
    title_EN: 'Raccoon Dog Association',
    description: '自然愛護',
    imgSrc: 'LiaiGroup/brand/RaccoonDogAssociation.jpg',
    routingLink: '/raccoon-dog-association'
  },
  {
    title_CH: '狸劇團',
    title_EN: 'Tanuki Stage',
    description: '精湛演出',
    imgSrc: 'LiaiGroup/brand/TanukiStage.jpg',
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
  padding: 5vh 0;
  @include flex_vm();

  @include custom-responsive("xs sm") {
  }


  @include custom-responsive("xl xxl") {
    height: 100vh;
  }

}

div.title_block {
  
  @include flex_vm();

  div.under_deco {
    @include custom-responsive("xs sm") {
      width: 45vw;
      height: 2.5vh;
    }


    @include custom-responsive("xl xxl") {
      width: 9vw;
      height: 2.5vh;
    }

    border-radius: $br_PC;
    background-color: $liaiGroupPrimary;
  }
}

div.brand_wrap {
  margin-top: 5vh;
  padding: 1vw;
  @include flex_hm();


  @include custom-responsive("xs sm") {
    width: 80vw;
    flex-wrap: wrap;
    gap: 3vh;
  }


  @include custom-responsive("xl xxl") {
    flex-wrap: nowrap;
    gap: 1vw;
  }
}
</style>
