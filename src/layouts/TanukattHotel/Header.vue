<script setup lang="ts">
import NavList from '@/components/TanukattHotel/NavList.vue';
import { ref } from 'vue'

const sideMenuOpen = ref(false);

function reload() {
  location.replace(location.pathname);
}

function toggleSideMenu() {
  sideMenuOpen.value = !sideMenuOpen.value
}


</script>

<template>
  <div class="header_container">
    <div class="logo_wrap" @click=reload>
      <img class="TanukattHotel_logo" src="@/assets/images/TanukattHotel/logo/logo_header.svg" alt="TanukattHotel_logo">
    </div>
    <div class="side_menu_wrap">
      <i v-if="!sideMenuOpen" class="fa-solid fa-bars" @click="toggleSideMenu"></i>
      <i v-if="sideMenuOpen" class="fa-solid fa-xmark" @click="toggleSideMenu"></i>
    </div>
    <transition name="slide">
      <div class="side_menu" v-show="sideMenuOpen">
        <div class="content_wrap">
          <img class="TanukattHotel_logo" src="@/assets/images/TanukattHotel/logo/logo.svg" alt="TanukattHotel_logo">
          <div class="navList_wrap">
            <NavList :color="'black'" @click="toggleSideMenu" />
          </div>
          <div class="hl"></div>
          <div class="info_wrap">
            <p>電話：02-2222222</p>
            <p>傳真：02-2222222</p>
            <p>地址：22222 狸愛市狸愛區幸福路一段2號</p>
            <p>聯絡：service@tanukatt.com</p>
            <p>統一編號：22222222</p>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped lang="scss">
div.header_container {
  width: 100%;
  height: 10vh;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 2vw;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0.1vw 0.1vw 1vw grey;
}

div.logo_wrap {
  width: 20vw;

  img {
    width: 15vw;
    cursor: pointer;
  }
}


div.side_menu_wrap {
  position: absolute;
  right: 5%;

  i {
    font-size: 2vw;
    cursor: pointer;
    color: $tanukattHotelPrimary;
  }
}

div.side_menu {
  @include flex_vm();
  position: absolute;
  top: 10vh;
  right: 0;
  width: 28vw;
  height: 90vh;
  background-color: white;
  box-shadow: -5px 0px 5px -3px #616161;
  div.content_wrap {
    position: relative;
    right: 5%;
    width: 16vw;
    @include flex_vm();
    gap: 3vh;

    img {
      width: 8vw;
    }

    div.navList_wrap {
      font-size: 1.5vw;
    }

    div.hl {
      width: 10vw;
      height: 0.5vh;
      background-color: $textColor;
    }

    div.info_wrap {
      width: 90%;
      line-height: 2;
    }
  }

}

/* <transition name="slide"> */
.slide-leave-active,
.slide-enter-active {
  transition: all .5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>