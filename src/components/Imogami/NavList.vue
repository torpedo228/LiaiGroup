<script setup lang="ts">
const navList = [
  {
    title: 'ABOUT',
    route: '#about',
  },
  {
    title: 'NEWS',
    route: '#news',
  },
  {
    title: 'PRODUCTS',
    route: '#products',
  },
  {
    title: 'CONTACT',
    route: '#contact',
  }]
</script>

<template>
  <div>
    <nav class="nav">
      <li v-for="section in navList" :key="section.title">
        <RouterLink :to="section.route">{{ section.title }}</RouterLink>
      </li>
    </nav>
  </div>
</template>

<style scoped lang="scss">
nav {
  @include flex_hm();

  @include custom-responsive("xs sm") {
    flex-wrap: wrap;
    gap: 3vw;
  }


  @include custom-responsive("xl xxl") {
    flex-wrap: nowrap;
    gap: 2vw;
  }

  li {
    text-align: center;
    list-style: none;


    @include custom-responsive("xs sm") {
      padding: 3vw;
      border-radius: $br_PC;
    }


    @include custom-responsive("xl xxl") {
      padding: 0;
      background: none;
    }


    a {
      color: $imogamiSecondary;
      font-weight: $fwBold;

      @include custom-responsive("xs sm") {
        font-size: 5vw;
      }

      @include custom-responsive("xl xxl") {
        font-size: 1vw;
      }

      &:hover {
        color: $imogamiSlogan;
      }

      &:active {
        color: $imogamiDecoration;
      }

    }


  }
}
</style>
