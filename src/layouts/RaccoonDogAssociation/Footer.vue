<script setup lang="ts">
import CopyRight from '@/components/global/CopyRight.vue';
import SocialMedia from '@/components/global/SocialMedia.vue';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const navList = [
  {
    title: "最新消息",
    subTitle:
      [
        {
          name: "重要事件",
          url: "#"
        },
        {
          name: "徵信報告",
          url: "#"
        }
      ]
  },
  {
    title: "認識狸貓",
    subTitle:
      [
        {
          name: "狸猫習性",
          url: "#"
        },
        {
          name: "狸貓數據",
          url: "#"
        }
      ]
  },
  {
    title: "保育行動",
    subTitle:
      [
        {
          name: "動物資訊傳播",
          url: "https://www.buymeacoffee.com/tanuki.jr"
        },
        {
          name: "動物福利宣導",
          url: "https://www.buymeacoffee.com/tanuki.jr"
        },
        {
          name: "動保講師培訓",
          url: "https://www.buymeacoffee.com/tanuki.jr"
        },
        {
          name: "動物友善教育",
          url: "https://www.buymeacoffee.com/tanuki.jr"
        }
      ]
  },
  {
    title: "幫助狸貓",
    subTitle:
      [
        {
          name: "單筆捐款",
          url: "https://www.buymeacoffee.com/tanuki.jr"
        },
        {
          name: "定期捐款",
          url: "https://www.buymeacoffee.com/tanuki.jr"
        },
        {
          name: "專案捐款",
          url: "https://www.buymeacoffee.com/tanuki.jr"
        },
        {
          name: "發票愛心捐",
          url: "https://www.buymeacoffee.com/tanuki.jr"
        },
        {
          name: "其他響應方式",
          url: "/LiaiGroup/tanuki"
        }
      ]
  },
]


const socialMediaList = [
  {
    label: "facebook",
    url: "/"
  },
  {
    label: "instagram",
    url: "/"
  },
  {
    label: "twitter",
    url: "/"
  },
  {
    label: "youtube",
    url: "/"
  }
]
</script>

<template>
  <footer class="footer_container">

    <div class="left_section">
      <div class="logo_wrap" @click=scrollToTop>
        <img class="RaccoonDogAssociation_logo" src="@/assets/images/RaccoonDogAssociation/logo/logo_white.svg"
          alt="TanukiStage logo">
      </div>
      <div class="info_wrap">
        <p><i class="fa-solid fa-house"></i>222 狸愛市狸愛區保狸路一號</p>
        <p><i class="fa-solid fa-phone"></i>(02)-222-2222</p>
        <p><i class="fa-solid fa-envelope"></i>service@raccoondog.org</p>
      </div>
      <div class="social_media_wrap">
        <SocialMedia v-for="socialMedia in socialMediaList" :key="socialMedia.label" :label="socialMedia.label"
          :url="socialMedia.url" />
      </div>
    </div>

    <div class="navList_wrap">
      <div class="section" v-for="section in navList" :key="section.title">
        <h3 class="title">{{ section.title }}</h3>
        <h4 class="subTitle" v-for="subSection in section.subTitle" :key="subSection.name">
          <a :href="subSection.url">{{ subSection.name }}</a>
        </h4>
      </div>
    </div>

    <div class="bottom_section">
      <div class="copyright">
        <CopyRight :content="' Raccoon Dog Association ALL RIGHTS RESERVED'" />
      </div>
      <div class="statement">
        <a href="">關於我們 </a> | <a href="">隱私權政策</a> | <a href="">友站連結</a>
      </div>
    </div>

  </footer>
</template>

<style scoped lang="scss">
footer.footer_container {
  width: 100%;
  height: 60vh;
  position: relative;
  gap: 20vw;
  color: white;
  @include flex_hm_as();
  @include rdaGradient_footer();
  padding-top: 10vh;
}

img.RaccoonDogAssociation_logo {
  width: 25vw;
  cursor: pointer;
}

div.left_section {
  @include flex_vm_as();
  gap: 5vh;

}

div.info_wrap {
  @include flex_vm_as();
  gap: 4vh;

  p {
    font-size: 1.2vw;
    @include flex_hm();
    gap: 1vw;
  }
}

div.navList_wrap {
  @include flex_hm_as();
  gap: 3vw;
  text-align: center;

  h3.title {
    padding-bottom: 1vh;
    border-bottom: 1px solid white;
  }

  h4.subTitle {
    padding: 1vh 0;
  }
}


div.social_media_wrap {
  @include flex_hm();
  gap: 3vh;
}

div.bottom_section {
  position: absolute;
  bottom: 1vh;
  right: 2vw;
  @include flex_hm();
  gap: 5vw;
  color: white;
}

a {
  color: white;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }
}
</style>