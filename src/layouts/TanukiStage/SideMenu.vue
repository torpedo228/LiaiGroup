<script setup lang="ts">
import SocialMedia from '@/components/global/SocialMedia.vue';

function reload() {
  location.replace(location.pathname);
}
const navList = [
  {
    title: '團隊簡介',
    route: '#group',
  },
  {
    title: '好戲一覽',
    route: '#drama',
  },
  {
    title: '購票資訊',
    route: '#info',
  },
  {
    title: '活動邀演',
    route: '#info',
  },
  {
    title: '狸友募集',
    route: '#info',
  },
  {
    title: '加入我們',
    route: '#info',
  }]

const socialMediaList = [
  {
    label: "facebook",
    url: "/"
  },
  {
    label: "line",
    url: "/"
  },
  {
    label: "youtube",
    url: "/"
  }
]
</script>

<template>
  <div class="side_menu_container">
    <div class="logo_wrap" @click=reload>
      <img class="TanukiStage_logo" src="@/assets/images/TanukiStage/logo/logo_side_menu.svg" alt="Imogami logo">
    </div>
    <nav class="nav">
      <li v-for="section in navList" :key="section.title">
        <RouterLink :to="section.route">{{ section.title }}</RouterLink>
      </li>
    </nav>
    <div class="social_media_wrap">
      <SocialMedia v-for="socialMedia in socialMediaList" :key="socialMedia.label" :label="socialMedia.label"
        :url="socialMedia.url" />
    </div>
  </div>
</template>

<style scoped lang="scss">
div.side_menu_container {
  width: 20vw;
  height: 200vh;
  background-color: $tanukiStagePrimary;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

div.logo_wrap {
  cursor: pointer;
  margin: 5vh 0;
  @include flex_vm();

  img.TanukiStage_logo {
    width: 15vw;
  }
}


nav {
  @include flex_vm();
  gap: 3vh;
  margin-bottom: 4vh;

  li {
    text-align: center;
    list-style: none;

    a {
      color: white;
      font-weight: $fwBold;

      @include custom-responsive("xs sm") {
        font-size: 5vw;
      }

      @include custom-responsive("xl xxl") {
        font-size: 1.5vw;
      }

      &:hover {
        color: $tanukiStageSecondary;
      }

      &:active {
        color: $tanukiStageSecondary;
      }
    }
  }
}

div.social_media_wrap{
  @include flex_hm();
  gap: 1vw;
}
</style>