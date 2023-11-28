<script setup lang="ts">
import NavList from '@/components/LiaiGroup/NavList.vue';
import SocialMedia from '@/components/global/SocialMedia.vue';
import CopyRight from '@/components/global/CopyRight.vue';
import NewsLetter from '@/components/global/NewsLetter.vue';

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
      <div class="logo_wrap">
        <div class="img_block">
          <img class="liai_group_logo" src="@/assets/images/LiaiGroup/liai_group_logo.svg" alt="LiaiGroup logo">
        </div>
        <div class="name_block liai_group_font">
          <h1>狸愛集團</h1>
          <h2>LIAI</h2>
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

      <CopyRight :content="'狸愛股份有限公司著作權所有'" />
    </div>
    <div class="vl"></div>
    <div class="right_section">
      <NavList />
      <NewsLetter />
    </div>


  </footer>
</template>

<style scoped lang="scss">
footer.footer_container {
  padding: 1vh 5vw;
  width: 100%;
  height: 60vh;
  background-color: $liaiGroupPrimary;
  display: flex;
  align-items: center;
  gap: 8vw;
  color: $white;
}

div.left_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2vw;

  div.logo_wrap {
    @include flex_hm();
    gap: 2vw;

    img.liai_group_logo {
      width: 15vw;
      display: block;
      margin: auto;

    }
  }

  div.info_wrap p {
    font-size: 1.2vw;
  }

  div.social_media_wrap {
    @include flex_hm();
    gap: 1vw;
  }
}

div.right_section {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 30vh;
}


.vl {
  border-left: 0.1vw solid $white;
  height: 40vh;
}
</style>
