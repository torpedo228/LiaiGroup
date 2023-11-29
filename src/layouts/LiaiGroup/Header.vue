<script setup lang="ts">
import NavList from '@/components/LiaiGroup/NavList.vue';

import { ref, onMounted, onUnmounted } from 'vue'

onMounted(() => {
  window.addEventListener("scroll", whenScroll);
})
onUnmounted(() => {
  window.removeEventListener('scroll', whenScroll);
})

const show = ref(false);
const showUnlock = ref(false);

function whenScroll() {
  let threshold = (window.innerHeight) * 0.9
  if (window.scrollY >= threshold && show.value == false) {
    show.value = true;
    showUnlock.value = true;
  } else if (window.scrollY < threshold && show.value) {
    show.value = false;
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


</script>

<template>
  <header class="header_container animate__animated" :class="show ? 'animate__fadeInDown' : 'animate__fadeOutUp'"
    v-show="showUnlock">
    <div class="logo_wrap" @click=scrollToTop>
      <div class="img_block">
        <img class="liai_group_logo" src="@/assets/images/LiaiGroup/liai_group_logo.svg" alt="LiaiGroup logo">
      </div>
      <div class="name_block liai_group_font">
        <p>狸愛集團 LIAI</p>
      </div>
    </div>
    <div class="nav_list">
      <NavList />
    </div>

  </header>
</template>

<style scoped lang="scss">
header.header_container {
  z-index: 999;
  width: 100%;
  height: 8vh;
  background-color: $liaiGroupPrimary;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


div.logo_wrap {
  margin-left: 3vw;
  cursor: pointer;
  color: $white;
  @include flex_hm();
  gap: 1vw;

  img.liai_group_logo {

    display: block;
    margin: auto;

    @include custom-responsive("xs sm") {
      width: 20vw;
    }


    @include custom-responsive("xl xxl") {
      width: 4vw;
    }
  }

  div.name_block p {

    @include custom-responsive("xs sm") {
      font-size: 6vw;
    }


    @include custom-responsive("xl xxl") {
      font-size: 1.8vw;
    }
  }
}

div.nav_list {
  @include custom-responsive("xs sm") {
    display: none;
  }

  @include custom-responsive("xl xxl") {
    display: block;
  }
}

div.side_menu {
  @include custom-responsive("xs sm") {
    display: block;
  }

  @include custom-responsive("xl xxl") {
    display: none;
  }
}
</style>
