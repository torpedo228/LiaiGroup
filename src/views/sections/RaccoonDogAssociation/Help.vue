<script setup lang="ts">
import Title from '@/components/RaccoonDogAssociation/Title.vue';
import { getImageUrl } from '@/utils/assets-url'


const donateList = [
  {
    title: "單筆捐款",
    imgSrc: 'RaccoonDogAssociation/help/donate_01.png',
    url: 'https://www.buymeacoffee.com/tanuki.jr'
  },
  {
    title: "定期捐款",
    imgSrc: 'RaccoonDogAssociation/help/donate_02.png',
    url: 'https://www.buymeacoffee.com/tanuki.jr'
  },
  {
    title: "發票愛心捐",
    imgSrc: 'RaccoonDogAssociation/help/donate_03.png',
    url: 'https://www.buymeacoffee.com/tanuki.jr'
  },
  {
    title: "專案捐款",
    imgSrc: 'RaccoonDogAssociation/help/donate_04.png',
    url: 'https://www.buymeacoffee.com/tanuki.jr'
  },
  {
    title: "其他響應方式",
    imgSrc: 'RaccoonDogAssociation/help/donate_05.png',
    url: '/LiaiGroup/tanuki'
  }
]
</script>

<template>
  <div class="help_container" id="help">
    <div class="title_block">
      <Title :title="'幫助狸猫 What You Can Do'" :color="'white'" />
    </div>

    <div class="donate_wrap">
      <div class="donateMethod" v-for="donateMethod in  donateList " :key="donateMethod.title">
        <a :href="donateMethod.url">
          <img :src="getImageUrl(donateMethod.imgSrc as string)" :alt="donateMethod.title">
          <h3 class="">{{ donateMethod.title }}</h3>
        </a>
      </div>
    </div>



    <img class="help" src="@/assets/images/RaccoonDogAssociation/help/help.png" alt="help tanuki">

  </div>
</template>

<style scoped lang="scss">
div.help_container {
  width: 100%;
  height: 100vh;
  background-color: $rdaSecondary;
  position: relative;
  padding-top: 10vh;
}

div.title_block {
  @include flex_hm();
}

div.donate_wrap {
  position: relative;
  left: 10vw;
  top: 10vh;
  width: 40vw;
  @include flex_hm();
  flex-wrap: wrap;
  gap: 2vw;

  div.donateMethod {
    width: 12vw;
    height: 12vw;
    border-radius: $br_PC;
    background-color: white;



    &:hover {
      background-color: $rdaPrimary;

      img {
        transform: scale(1.1);
        transition: 0.2s;
      }



      h3 {
        color: white;
      }
    }

    &:active {
      transform: translate(2px, 2px);
    }

    a {
      width: 100%;
      height: 100%;
      @include flex_vm();

      img {
        height: 8vw;
        object-fit: cover;
      }

      h3 {
        color: $textColor;
      }
    }
  }

  div.donateMethod:first-child {
      img {
        filter: brightness(120%);
      }
    }

  div.donateMethod:last-child {
    width: 20vw;
    background-color: $rdaPrimary;

    h3 {
      color: white;
    }

    &:hover {
      opacity: 0.8;

      img {
        transform: scale(10);
        transition: 5s;
      }

      h3 {
        color: white;
      }
    }
  }

}


img.help {
  transform: rotate(10deg);
  position: absolute;
  right: -10vw;
  top: 0;
  width: 62vw;
}
</style>