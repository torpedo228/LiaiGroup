<script setup lang="ts">
import NavList from '@/components/Imogami/NavList.vue';
import SocialMedia from '@/components/global/SocialMedia.vue';


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
      <img class="imogami_logo" src="@/assets/images/Imogami/logo/logo_footer.svg" alt="Imogami logo">
    </div>

    <div class="info">
      <p>營業時間｜週二至週日 09:30-18:00 (週一公休) </p>
      <p>電話｜02-2222-2222</p>
      <p>信箱｜imokami@gmail.com </p>
      <p>地址｜222 狸愛市狸愛區地瓜路2號</p>
    </div>

    <div class="nav_list">
      <NavList :color="'white'" :direction="'vertical'"/>
    </div>

    <div class="social_media_wrap">
      <SocialMedia v-for="socialMedia in socialMediaList" :key="socialMedia.label" :label="socialMedia.label"
        :url="socialMedia.url" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer.footer_container {
  width: 100%;
  height: 40vh;
  background-color: $imogamiSecondary;
  @include flex_hm();
  gap: 10vw;
}

img.imogami_logo{
  cursor: pointer;
}

div.info {
  color: white;

  p {
    margin: 2vh 0;
  }
}

div.nav_list {
  flex-wrap: wrap;
  width: 10vw;
}

div.social_media_wrap{
  @include flex_vm();
  gap: 3vh;
}
</style>