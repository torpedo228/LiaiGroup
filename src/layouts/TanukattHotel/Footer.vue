<script setup lang="ts">
import NavList from '@/components/TanukattHotel/NavList.vue';
import CopyRight from '@/components/global/CopyRight.vue';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>

<template>
  <footer class="footer_container">

    <div class="logo_wrap" @click=scrollToTop>
      <img class="TanukattHotel_logo" src="@/assets/images/TanukattHotel/logo/logo_footer.svg" alt="TanukattHotel_logo">
    </div>
    <div class="info_wrap">
      <p>電話：02-2222222</p>
      <p>傳真：02-2222222</p>
      <p>地址：22222 狸愛市狸愛區幸福路一段2號</p>
      <p>聯絡：service@tanukatt.com</p>
      <p>統一編號：22222222</p>
    </div>
    <div class="navList_wrap">
      <NavList :color="'white'" />
    </div>
    <div class="bottom_section">
      <div class="copyright">
        <CopyRight :content="'狸悅酒店著作權所有'" />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer.footer_container {
  width: 100%;
  height: 40vh;
  position: relative;
  gap: 15vw;
  color: white;
  background-color: $tanukattHotelPrimary;
  @include flex_hm();
}

img.TanukattHotel_logo {
  width: 15vw;
  cursor: pointer;
}

div.info_wrap {
  @include flex_vm_as();
  gap: 2vh;

  p {
    font-size: 1w;
    @include flex_hm();
    gap: 1vw;
  }
}

div.bottom_section {
  position: absolute;
  left: 1vw;
  bottom: 1vh;
  color: white;
}
</style>