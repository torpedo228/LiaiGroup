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
  color: $white;
  display: flex;

  li {
    padding-right: 1.6vw;
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
</style>
