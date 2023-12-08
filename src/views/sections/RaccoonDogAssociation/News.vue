<script setup lang="ts">
import Title from '@/components/RaccoonDogAssociation/Title.vue';
import PortalButton from '@/components/global/PortalButton.vue';
import { getImageUrl } from '@/utils/assets-url'

const newsList = [
  {
    date: "2023.12.02",
    title: "【狸貓之森辦公處】2023 年 12 月號徵信報告",
    content: "狸貓之森辦公處每月報告又來囉~2023年11月，我們一起完成了這些事~",
    imgSrc: "RaccoonDogAssociation/news/news_1.png"
  },
  {
    date: "2023.11.24",
    title: "【狸貓管理局】2023 年 11 月狸猫洗澡報告",
    content: "狸貓管理局每月報告又來囉~2023年11月，我們一起完成了這些事~",
    imgSrc: "RaccoonDogAssociation/news/news_2.png"
  },
  {
    date: "2023.11.23",
    title: "【狸猫聯邦】狸猫愛好者聚會下個月報名開跑!",
    content: "狸猫愛好者的天堂~很大機會遇到二狸猫本人!快來報名~",
    imgSrc: "RaccoonDogAssociation/news/news_3.png"
  }
]
</script>

<template>
  <div class="news_container">
    <div class="title_wrap">
      <Title :title="'最新消息 News'" />
    </div>
    <div class="whole_section">
      <div class="left_section">
        <div class="btn_block more_news">
          <PortalButton content="更多新聞" type="rda_more_news" routingLink="#" />
        </div>
        <div class="news_wrap">
          <div class="news" v-for="news in newsList" :key="news.title">
            <div class="img_wrap">
              <img :src="getImageUrl(news.imgSrc as string)" :alt="news.title">
            </div>
            <div class="text_wrap">
              <div class="date_wrap">
                <span class="date">{{ news.date }}</span>
              </div>
              <div class="content_wrap">
                <h3 class="title">{{ news.title }}</h3>
                <p class="content">{{ news.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61554073542224&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="300" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.news_container {
  position: relative;
  padding: 10vh 0;
}

div.title_wrap{
  position: relative;
  left: 15vw;
}

div.whole_section {
  @include flex_hm();
  gap: 3vw;
}

div.left_section {
  @include flex_vm_ae();
  gap: 2vh;
}

div.news_wrap {
  @include flex_hm_ae();
  gap: 2vw;

  div.news {
    width: 18vw;
    height: 60vh;
    @include flex_vm_js();
    box-shadow: 0.2vw 0.2vw 0.5vw grey;
    border-radius: $br_PC;

    div.img_wrap {
      @include flex_hm();
      width: 18vw;
      height: 30vh;
      border-radius: $br_PC $br_PC 0 0;
      overflow: hidden;

      img {
        height: 100%;
        filter: brightness(120%);
        object-fit: cover;
      }
    }

    div.text_wrap {
      padding: 1vh 1vw;
      @include flex_vm_as();
      gap: 2vh;

      div.date_wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;

        span.date {
          font-weight: $fwBold;
          display: block;
          font-size: 1.2vw;
          color: $rdaPrimary;
        }
      }

      div.content_wrap {

        h3.title {
          font-size: 1.2vw;
          font-weight: $fwBold;
          height: 10vh;
        }

        p {
          text-overflow: ellipsis;
          line-height: 1.5;
        }
      }

      div.btn_block {
        align-self: flex-end;
      }
    }
  }
}


</style>