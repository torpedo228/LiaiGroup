<script setup lang="ts">
import Title from '@/components/RaccoonDogAssociation/Title.vue';
import PortalButton from '@/components/global/PortalButton.vue';

const newsList = [
  {
    date: "2023/12/2",
    label: "公告",
    title: "花園內發現野生狸貓，請遊客不要隨意餵食。",
    url: "kotanuki-park/news/news_001",
  },
  {
    date: "2023/12/1",
    label: "公告",
    title: "冬季夜間散步活動開催 !",
    url: "kotanuki-park/news/news_002",

  },
  {
    date: "2023/11/30",
    label: "休園情報",
    title: "下周一 12/4 因設備整修 ，故休園一日。",
    url: "kotanuki-park/news/news_003",
  }
]
</script>

<template>
  <div class="news_container" id="news">
    <div class="title_block">
      <Title :title="'最新消息 News'" />
    </div>

    <div class="news_wrap">
      <div class="label_wrap">
        <div class="label announcement">公告</div>
        <div class="label closed">休園情報</div>
      </div>
      <div class="news" v-for="news in  newsList " :key="news.title">
        <span class="date">{{ news.date }}</span>
        <div class="label">{{ news.label }}</div>
        <h4 class="title">{{ news.title }}</h4>
        <RouterLink :to="news.url">
          <i class="fa-solid fa-right-long"></i>
        </RouterLink>
      </div>
      <div class="btn_block">
        <PortalButton content="所有消息" type="kotanuki_park_all_news" routingLink="#" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.news_container {
  width: 100%;
  height: 100vh;
  position: relative;
  @include flex_vm();

}

div.title_block {
  position: absolute;
  left: 25vw;
  top: 10vh;
}

div.label_wrap {
  display: flex;
  gap: 1vw;
  align-self: start;

  div.label {
    background-color: $kotanukiParkPrimary;
    color: white;
    @include tagEffect();
  }
}

div.news_wrap {
  @include flex_vm();
  gap: 2vh;
  margin-top: 20vh;

  div.news {
    width: 45vw;
    padding: 1vw;
    @include flex_hm_js();
    gap: 2vw;
    border-bottom: 0.1vw solid $kotanukiParkPrimary;

    span.date {
      width: 10%;
      color: $kotanukiParkPrimary;
      font-weight: $fwBold;
    }

    div.label {
      width: 15%;
      border: 0.2vw solid $kotanukiParkPrimary;
      color: $kotanukiParkPrimary;
    }

    h4.title {
      width: 60%;
    }
  }

  i {
    color: $kotanukiParkPrimary;
    font-size: 1.5vw;

    @include goToEffect($kotanukiParkSecondary)
  }
}

div.label {
  box-sizing: border-box;
  @include flex_hm();
  width: 8vw;
  height: 5vh;
  border-radius: $br_PC;
}

div.btn_block {
  justify-content: end;
}
</style>