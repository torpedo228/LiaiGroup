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
  <div class="hero_container">
    <div class="left_section">
      <nav class="nav">
        <li v-for="section in navList" :key="section.title">
          <RouterLink :to="section.route" class="">{{ section.title }}</RouterLink>
        </li>
      </nav>
      <div class="img_container">
        <img class="liai_group_logo" src="@/assets/images/LiaiGroup/liai_group_logo.svg" alt="LiaiGroup logo">
      </div>
      <div class="text_container">
        <h1>狸愛集團</h1>
        <h2>回歸本心 回歸大自然</h2>
        <h3>狸愛集團 幸福所在</h3>
      </div>
    </div>
    <div class="right_section">
      <img class="hero_pic" src="@/assets/images/LiaiGroup/hero.jpg" alt="LiaiGroup hero photo">
    </div>

  </div>
</template>

<style scoped lang="scss">
div.hero_container {
  width: 100vw;
  height: 100vh;
  display: flex;
}

div.left_section {
  width: 40%;
  height: 100vh;
  @include liaiGroupGradient();
  @include flex_vm();

  nav {
    color: $white;
    display: flex;

    li {
      padding: 0.8vw;
      list-style: none;

      a {
        font-size: 1vw;
        color: white;
      }

      a:hover {
        text-decoration: underline;
      }

      a:active {
        opacity: 0.7;
      }
    }
  }

  div.img_container {
    margin: 2vw;

    img.liai_group_logo {
      width: 20vw;
      display: block;
      margin: auto;
    }
  }

  div.text_container {
    font-family: $liaiGroupFont;
    color: $white;
    text-align: center;

    h1{
      display: block;
      margin-bottom: 2vh;
    }
  }

}

div.right_section {
  width: 60%;

  img.hero_pic {
    height: 100vh;
  }
}
</style>
