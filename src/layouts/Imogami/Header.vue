<script setup lang="ts">
import NavList from '@/components/Imogami/NavList.vue';

function reload() {
  location.replace(location.pathname);
}
</script>

<template>
  <div class="header_container">
    <div class="logo_wrap" @click=reload>
      <img class="liai_group_logo" src="@/assets/images/Imogami/logo.svg" alt="Imogami logo">
    </div>
    <div class="nav_list">
      <NavList />
      <div class="icon_wrap">
        <i class="fa-solid fa-circle-user"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.header_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
}

div.logo_wrap {
  margin: 2vh 3vw;

  img {
    cursor: pointer;
    width: 15vw;
  }
}

div.nav_list {
  position: relative;
  top: -2vw;
  margin-right: 5vw;
  @include flex_hm();
  justify-content: space-evenly;
  width: 35vw;
  height: 7vh;
  border-radius: $br_PC;
  background-color: $imogamiPrimary;

  div.icon_wrap {
    @include flex_hm();
  }

  i {
    padding: 0.5vw;
    font-size: 1.5vw;
    cursor: pointer;
    color: $imogamiSecondary;

    &:hover {
      color: $imogamiSlogan;
    }

    &:active {
      color: $imogamiDecoration;
    }
  }
}
</style>