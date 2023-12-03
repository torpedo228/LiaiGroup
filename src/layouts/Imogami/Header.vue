<script setup lang="ts">
import NavList from '@/components/Imogami/NavList.vue';

function reload() {
  location.replace(location.pathname);
}
</script>

<template>
  <div class="header_container">
    <div class="logo_wrap" @click=reload>
      <img class="imogami_logo" src="@/assets/images/Imogami/logo/logo_header.svg" alt="Imogami logo">
    </div>
    <div class="nav_list">
      <NavList :color="'purple'" :direction="'horizon'"/>
      <div class="icon_wrap">
        <i class="fa-solid fa-circle-user"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.logo_wrap {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  margin: 2vh 3vw;

  img {
    cursor: pointer;
    width: 15vw;
    filter: brightness(120%);
  }
}

div.nav_list {
  z-index: 999;
  position: fixed;
  top: 5vh;
  right: 0;

  margin-right: 5vw;
  @include flex_hm();
  justify-content: space-evenly;
  width: 35vw;
  height: 7vh;
  border-radius: $br_PC;
  background-color: $imogamiPrimary;
  box-shadow: 0.3vw 0.3vw 0 $imogamiSecondary;

  div.icon_wrap {
    @include flex_hm();
  }

  i {
    padding: 0.5vw;
    font-size: 1.5vw;
    cursor: pointer;
    color: $imogamiSecondary;

    &:hover {
      color: $imogamiMidPurple;
    }

    &:active {
      color: $imogamiDecoration;
    }
  }
}
</style>