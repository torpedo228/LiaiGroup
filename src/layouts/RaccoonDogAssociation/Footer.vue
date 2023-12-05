<script setup lang="ts">
import CopyRight from '@/components/global/CopyRight.vue';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const branchList = [
  {
    location: "台北・TAIPEI",
    tel: "02-222-2222",
    fax: "02-222-2222",
    address: "22222 狸愛市狸愛區狸之星一路2號"
  },
  {
    location: "台南・TAINAN",
    tel: "02-222-2222",
    fax: "02-222-2222",
    address: "22222 狸愛市狸愛區狸之星二路22號"
  },
]
</script>

<template>
  <footer class="footer_container">

    <div class="logo_wrap" @click=scrollToTop>
      <img class="tanuki_stage_logo" src="@/assets/images/TanukiStage/logo/logo_footer.svg" alt="TanukiStage logo">
    </div>
    <div class="branch_wrap">
      <div class="branch" v-for="branch in branchList" :key="branch.location">
        <h4 class="location">{{ branch.location }}</h4>
        <div class="contact_wrap">
          <span class="tel">TEL {{ branch.tel }}</span>
          <span class="fax">FAX {{ branch.fax }}</span>
        </div>
        <p class="address">{{ branch.address }}</p>
        <a href="" class="map">Map</a>
      </div>
    </div>
    <div class="vl"></div>
    <div class="bottom_section">
      <div class="copyright">
        <CopyRight :content="'Tanuki Stage ALL RIGHTS RESERVED'" />
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
  height: 50vh;
  margin-left: auto;
  background-color: $tanukiStageDecoration;
  position: relative;
  @include flex_vm();
  gap: 3vh;
}

img.tanuki_stage_logo {
  width: 20vw;
  cursor: pointer;
}

div.branch_wrap {
  @include flex_hm();
  gap: 8vw;

  div.branch {
    @include flex_vm();
    gap: 1vh;


    h4.location {
      color: $tanukiStagePrimary;
      font-weight: $fwBold;
    }

    div.contact_wrap {
      display: flex;
      gap: 2vw;
    }

    a.map {
      text-decoration: underline;
    }
  }
}


div.vl {
  width: 0.2vw;
  height: 10vh;
  background-color: white;
  position: absolute;
  top: 50%;
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

div.bottom_section {
  width: 90%;
  padding-top: 2vh;
  @include flex_hm();
  gap: 5vw;
  border-top: 0.2vw solid white;

}

div.copyright {
  color: $textColor;
}

a {
  color: $textColor;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }
}
</style>