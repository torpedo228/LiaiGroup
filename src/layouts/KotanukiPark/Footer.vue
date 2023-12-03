<script setup lang="ts">
import NavList from '@/components/Imogami/NavList.vue';
import SocialMedia from '@/components/global/SocialMedia.vue';
import CopyRight from '@/components/global/CopyRight.vue';
import Statement from '@/components/global/Statement.vue';


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
  <footer class="footer_container">

    <div class="logo_wrap" @click=scrollToTop>
      <img class="imogami_logo" src="@/assets/images/KotanukiPark/logo/logo.svg" alt="Imogami logo">
    </div>
    <div class="info">
      <p>小狸記念公園管理中心</p>
      <p>〒222-2222 狸愛都 狸愛市狸町 2222</p>
      <p>TEL 022-222-2222</p>
    </div>
    <div class="social_media_wrap">
      <SocialMedia v-for="socialMedia in socialMediaList" :key="socialMedia.label" :label="socialMedia.label"
        :url="socialMedia.url" />
    </div>
    <div class="statement">
      <Statement />
    </div>
    <div class="copyright">
      <CopyRight :content="'KoTanuki Park All Rights Reserved.'" />
    </div>


  </footer>
</template>

<style scoped lang="scss">
footer.footer_container {
  width: 100%;
  height: 40vh;
  background-color: $kotanukiParkPrimary;
  position: relative;
  @include flex_hm();
  gap: 10vw;
}

img.imogami_logo {
  cursor: pointer;
}

div.info {
  color: white;

  p {
    margin: 4vh 0;
  }
}

div.social_media_wrap {
  @include flex_hm();
  gap: 3vh;
}

div.statement {
  position: absolute;
  color: white;
  bottom: 1vh;
  left: 1vw;
}

div.copyright {
  position: absolute;
  color: white;
  bottom: 1vh;
  right: 1vw;
}
</style>