<script setup lang="ts">
import Title from '@/components/Imogami/Title.vue';
import PortalButton from '@/components/global/PortalButton.vue';
import { getImageUrl } from '@/utils/assets-url'

const newsList = [
  {
    date: "2023.11.25",
    tag: "新品速報",
    title: "全新甜點系列震撼登場，品味夢幻口福",
    content: "香脆可口，地瓜脆片，一口咬下，甜蜜滿溢！健康零負擔，讓你愛上這份天然的美味誘惑...",
    imgSrc: "Imogami/news/news_1.png"
  },
  {
    date: "2023.11.24",
    tag: "健康資訊",
    title: "甜美健康，探索地瓜的營養奇蹟！",
    content: "地瓜是一種營養豐富的食物，富含維生素、礦物質和膳食纖維，不過烹飪方式和添加的調味料可能...",
    imgSrc: "Imogami/news/news_2.jpg"
  },
  {
    date: "2023.11.23",
    tag: "地瓜趣聞",
    title: "芋神蜜地瓜薯條，成功引來小狸貓一族",
    content: "芋神出品的蜜地瓜薯條竟然成功引來傳說中的小狸貓一族!?網友TOOTO表示...是真的!!...",
    imgSrc: "Imogami/news/news_3.png"
  }
]
</script>

<template>
  <div class="news_container">
    <div class="title_wrap">
      <Title :title="'News'" :color="'white'" :imgSrc="'Imogami/title/news.svg'" />
    </div>

    <div class="news_wrap">
      <div class="news" v-for="news in  newsList " :key="news.title">
        <div class="img_wrap">
          <img :src="getImageUrl(news.imgSrc as string)" alt="">
        </div>
        <div class="text_wrap">
          <div class="date_and_tag_wrap">
            <span class="date">{{ news.date }}</span>
            <div class="tag">{{ news.tag }}</div>
          </div>
          <div class="content_wrap">
            <h3 class="title">{{ news.title }}</h3>
            <p class="content">{{ news.content }}</p>
          </div>

          <div class="btn_block">
            <PortalButton content="完整文章" type="imogami_full_news" routingLink="#" />
          </div>
        </div>

      </div>
    </div>

    <div class="btn_block more_news">
      <PortalButton content="更多新聞" type="imogami_more" routingLink="#" />
    </div>
  </div>
</template>

<style scoped lang="scss">
div.news_container {
  position: relative;
  background-color: $imogamiDecoration;
  @include flex_vm();
}

div.title_wrap {
  transform: translate(-25%, -30%);
}


div.news_wrap {
  @include flex_vm();
  gap: 5vh;

  div.news {
    width: 60vw;
    border-bottom: 3px solid white;
 
    @include flex_hm_as();
    gap: 2vw;
    padding-bottom: 1vh;


    div.img_wrap {
      display: flex;
      align-items: end;
      width: 20vw;
      height: 28vh;
      border-radius: $br_PC;
      overflow: hidden;
      border: 0.6vw solid $white;
      background-color: $imogamiSecondary;

      img {
        width: 100%;
        filter: brightness(120%);

      }
    }

    div.text_wrap {
      width: 40%;
      @include flex_vm_as();
      gap: 2vh;

      div.date_and_tag_wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;

        span.date {
          font-weight: $fwBold;
          display: block;
          font-size: 1.5vw;
          color: $imogamiSecondary;
        }

        div.tag {
          @include flex_hm();
          padding: 0 0.5vw;

          border-radius: $br_tag_PC;
          background-color: $imogamiSecondary;
          color: $imogamiPrimary;
        }
      }

      div.content_wrap {
        width: 100%;

        h3.title {
          width: 100%;
          height: 10vh;
          font-weight: $fwMedium;
        }

        p {
          text-overflow: ellipsis;
        }
      }

      div.btn_block {
        align-self: flex-end;
      }
    }
  }
}

div.more_news {
  margin: 5vh;
}
</style>@/utils/assets-url