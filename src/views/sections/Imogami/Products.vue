<script setup lang="ts">
import Title from '@/components/Imogami/Title.vue';
import PortalButton from '@/components/global/PortalButton.vue';

import { getImageUrl } from '@/utils/assets-url'

const productList = [
  {
    title_CH: "幸福地瓜",
    title_EN: "Sweet Potato",
    weight: "120g",
    price: "50",
    imgSrc: "Imogami/products/sweet_potato.png",
  },
  {
    title_CH: "低鹽地瓜薯條",
    title_EN: "Low-Sodium Fries",
    weight: "300g",
    price: "200",
    imgSrc: "Imogami/products/low_sodium_fries.png",
  },
  {
    title_CH: "幸福地瓜",
    title_EN: "Sweet Potato",
    weight: "120g",
    price: "50",
    imgSrc: "Imogami/products/sweet_potato.png",
  },
  {
    title_CH: "低鹽地瓜薯條",
    title_EN: "Low-Sodium Fries",
    weight: "300g",
    price: "200",
    imgSrc: "Imogami/products/low_sodium_fries.png",
  },
  {
    title_CH: "幸福地瓜",
    title_EN: "Sweet Potato",
    weight: "120g",
    price: "50",
    imgSrc: "Imogami/products/sweet_potato.png",
  },
  {
    title_CH: "低鹽地瓜薯條",
    title_EN: "Low-Sodium Fries",
    weight: "300g",
    price: "200",
    imgSrc: "Imogami/products/low_sodium_fries.png",
  }
]

</script>

<template>
  <div class="products_container" id="products">
    <div class="title_wrap">
      <Title :title="'Products'" :color="'purple'" :imgSrc="'Imogami/title/products.svg'" :content="'感受自然之美，享受健康之味'" />
    </div>

    <div class="products_wrap">
      <div class="product" v-for="product in  productList " :key="product.title_CH">
        <div class="img_block">
          <img :src="getImageUrl(product.imgSrc as string)" :alt="product.title_CH" loading="lazy">
        </div>
        <div class="info">
          <h3 class="title_CH">{{ product.title_CH }}</h3>
          <h3 class="title_EN">{{ product.title_EN }}</h3>
          <span class="weight">{{ product.weight }}</span>
        </div>
        <div class="hl"></div>
        <div class="price_wrap">
          <span class="price">NT$ {{ product.price }}</span>
          <i class="fa-solid fa-circle-plus"></i>
        </div>
      </div>
    </div>

    <div class="btn_block">
      <PortalButton content="所有商品" type="imogami_all_products" routingLink="#" />
    </div>
  </div>
</template>

<style scoped lang="scss">
div.products_container {
  position: relative;
  background-color: $imogamiPrimary;
  width: 100%;
  padding: 20vh 0 10vh;
}

div.title_wrap {
  position: absolute;
  left: 20vw;
  top: -10vh;
}

div.products_wrap {
  width: 60vw;
  @include flex_hm();
  gap: 3vw;
  flex-wrap: wrap;
  margin: 20vh auto 5vh;

  div.product {
    @include flex_vm();
    gap: 2vh;

    div.img_block {
      width: 10vw;
      height: 10vw;
      border-radius: $br_PC;
      box-shadow: 0.5vw 0.5vw 0 $imogamiMidPurple;

      img {
        width: 100%;
        height: 100%;
        border-radius: $br_PC;
        object-fit: cover;
        @include imgEffect();
      }
    }

    div.info {

      h3 {
        font-size: 1.2vw;
        color: $imogamiSecondary;
        font-weight: $fwBold;
      }

      span.weight {
        color: $imogamiSecondary;
        font-weight: $fwBold;
        font-size: 1.1vw;
      }
    }


    div.hl {
      width: 15vw;
      border-bottom: 0.5vh solid white
    }

    div.price_wrap {
      display: flex;
      align-items: center;

      span.price {
        margin: 0 1.5vw;
        color: white;
        font-weight: $fwBold;
        font-size: 1.5vw;
      }

      i {
        width: 2vw;
        height: 2vw;
        @include flex_hm();
        font-size: 1.5vw;
        color: $imogamiSecondary;

        @include addEffect();
      }
    }
  }
}

div.btn_block {
  @include flex_hm();
}
</style>