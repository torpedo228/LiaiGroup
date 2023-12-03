<script setup lang="ts">
import NavList from '@/components/LiaiGroup/NavList.vue';
import SocialMedia from '@/components/global/SocialMedia.vue';
import CopyRight from '@/components/global/CopyRight.vue';
import NewsLetter from '@/components/global/NewsLetter.vue';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const socialMediaList = [
  {
    label: "facebook",
    url: "/"
  },
  {
    label: "linkedin",
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
  <footer class="footer_container">

    <div class="left_section">
      <div class="logo_wrap" @click=scrollToTop>
        <div class="img_block">
          <img class="liai_group_logo" src="@/assets/images/LiaiGroup/liai_group_logo.svg" alt="LiaiGroup logo">
        </div>
        <div class="name_block liai_group_font">
          <h1>狸愛集團 LIAI</h1>
        </div>
      </div>
      <div class="info_wrap">
        <p>222 狸愛市狸愛區愛狸一路2號</p>
        <p>+886-2-222-2222</p>
      </div>
      <div class="social_media_wrap">
        <SocialMedia v-for="socialMedia in socialMediaList" :key="socialMedia.label" :label="socialMedia.label"
          :url="socialMedia.url" />
      </div>
    </div>

    <div class="vl"></div>

    <div class="right_section">
      <div class="nav_list">
        <NavList />
      </div>
    </div>

    <div class="news_letter">
      <NewsLetter />
    </div>

    <div class="copyright">
      <CopyRight :content="'狸愛股份有限公司著作權所有'" />
    </div>

  </footer>
</template>

<style scoped lang="scss">
footer.footer_container {
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: $liaiGroupPrimary;
  display: flex;
  gap: 8vw;
  color: $white;

  @include custom-responsive("xs sm") {
    justify-content: center;
    align-items: flex-start;
  }

  @include custom-responsive("xl xxl") {
    justify-content: flex-start;
    align-items: center;
    padding: 1vh 5vw;
  }
}

div.left_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @include custom-responsive("xs sm") {
    gap: 3vw;
  }

  @include custom-responsive("xl xxl") {
    gap: 1vw;
  }

  div.logo_wrap {
    cursor: pointer;

    @include custom-responsive("xs sm") {
      @include flex_vm();
      margin: 5vh auto 1vh;
    }

    @include custom-responsive("xl xxl") {
      @include flex_hm();
      margin: 0;
    }

    img.liai_group_logo {
      display: block;
      margin: auto;

      @include custom-responsive("xs sm") {
        width: 40vw;
      }

      @include custom-responsive("xl xxl") {
        width: 15vw;
      }
    }
  }

  div.name_block h1 {
    @include custom-responsive("xs sm") {
      font-size: 8vw;
    }

    @include custom-responsive("xl xxl") {
      font-size: 2.5vw;
    }
  }

  div.info_wrap p {
    @include custom-responsive("xs sm") {
      font-size: 6vw;
    }

    @include custom-responsive("xl xxl") {
      font-size: 1.2vw;
    }
  }

  div.social_media_wrap {
    @include flex_hm();

    @include custom-responsive("xs sm") {
      gap: 3vw;
    }

    @include custom-responsive("xl xxl") {
      gap: 1vw;
    }
  }
}

div.right_section {
  @include custom-responsive("xs sm") {
    display: none;
  }

  @include custom-responsive("xl xxl") {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-top: 10vh;
    gap: 30vh;
  }
}

.vl {
  @include custom-responsive("xs sm") {
    display: none;
  }

  @include custom-responsive("xl xxl") {
    display: block;
    border-left: 0.1vw solid $white;
    height: 40vh;
  }
}

div.news_letter {
  position: absolute;

  @include custom-responsive("xs sm") {
    bottom: 20%;
    margin: auto;
  }

  @include custom-responsive("xl xxl") {
    bottom: 30%;
    right: 40%;
  }
}

div.copyright {
  position: absolute;


  @include custom-responsive("xs sm") {
    bottom: 0;
    width: 70%;
    left: 0;
  }

  @include custom-responsive("xl xxl") {
    width: 100%;
    bottom: 1vh;
    left: 1vw;
  }
}
</style>
