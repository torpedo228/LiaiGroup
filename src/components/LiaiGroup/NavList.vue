<script setup lang="ts">
const navList = [
  {
    title: '關於狸愛',
    route: '/',
  },
  {
    title: '狸愛品牌',
    route: '/',
  },
  {
    title: '新聞中心',
    route: '/',
  },
  {
    title: '企業責任',
    route: '/',
  },
  {
    title: '投資者關係',
    route: '/',
  },
  {
    title: '人才招募',
    route: '/',
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
  // border: 1px solid red;
  color: $white;
  @include flex_hm();


  @include custom-responsive("xs sm") {
    width: 100vw;
    flex-wrap: wrap;
    gap: 3vw;
  }


  @include custom-responsive("xl xxl") {
    flex-wrap: nowrap;
    width: 35vw;
    gap: 0;
  }

  li {
    text-align: center;
    width: 30%;
    list-style: none;

    @include custom-responsive("xs sm") {
      padding: 3vw;
      @include liaiGroupGradient();
      border-radius: $br_PC;
    }


    @include custom-responsive("xl xxl") {
      padding: 0;
      background: none;
    }


    a {
      color: white;

      @include custom-responsive("xs sm") {
        font-size: 5vw;
      }


      @include custom-responsive("xl xxl") {
        font-size: 1vw;
      }
    }

    a:hover {
      text-decoration: underline;
    }

    a:active {
      opacity: 0.7;
    }
  }
}
</style>
