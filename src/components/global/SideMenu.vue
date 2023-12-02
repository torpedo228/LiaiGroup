<script setup lang="ts">
import NavList from '@/components/LiaiGroup/NavList.vue';

const props = defineProps({
  type: String
})

enum TYPE {
  liai = "liai_side_menu_color"
}
</script>

<template>
  <div class="icon_block"><i class="fa-solid fa-bars" :class="TYPE[props.type as keyof typeof TYPE]"></i></div>

  <div class="side_menu" :class="TYPE[props.type as keyof typeof TYPE]">
    <div class="nav_list">
      <NavList />
    </div>

  </div>
</template>

<style scoped lang="scss">
div.icon_block {
  cursor: pointer;
  padding: 0 5vw;
  @include flex_hm();

  i {
    @include custom-responsive("xs sm") {
      font-size: 10vw;
    }

    @include custom-responsive("xl xxl") {
      font-size: 2vw;
    }
  }
}


div.side_menu {
  position: absolute;
  right: 10%;
  width: 70vw;
  height: 100vh;
  z-index: 999;
  // display: none;

  div.nav_list {
    width: 50%;
  }
}



.liai_side_menu_color {
  border: 1px solid red;
  color: $white;
  background-color: $liaiGroupPrimary;
}
</style>
