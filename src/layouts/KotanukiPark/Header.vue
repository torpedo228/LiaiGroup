<script setup lang="ts">
function reload() {
  location.replace(location.pathname);
}

const navList = [
  {
    title: '公園資訊',
    icon: 'circle-info',
    route: '#info',
  },
  {
    title: '設施介紹',
    icon: 'house-chimney-window',
    route: '#news',
  },
  {
    title: '季節花卉',
    icon: 'leaf',
    route: '#seasonal',
  },
  {
    title: '活動總覽',
    icon: 'calendar-day',
    route: '#event',
  },
  {
    title: '交通規劃',
    icon: 'car',
    route: '#transport',
  }
]
</script>

<template>
  <div class="header_container">
    <div class="logo_wrap" @click=reload>
      <img class="liai_group_logo" src="@/assets/images/KotanukiPark/logo/logo.svg" alt="Kotanuki-Park logo">
    </div>

    <nav class="nav_list">
      <div class="section" v-for="section in navList" :key="section.title">
        <div class="title_wrap">
          <RouterLink :to="section.route">
            <i class="fa-solid" :class="`fa-${section.icon}`"></i>
            <h3 class="title">{{ section.title }}</h3>
          </RouterLink>
        </div>
      </div>

      <div class="input_wrap">
        <div class="select">
          <i class="fa-solid fa-globe"></i>
          <select name="language" id="" placeholder="請選擇語言">
            <option value="choose_lang" disabled selected>請選擇語言</option>
            <option value="TS">繁體中文</option>
            <option value="EN">英文</option>
            <option value="JA">日文</option>
          </select>
        </div>
        <div class="input">
          <i class="fa-solid fa-magnifying-glass"></i><input class=" search" type="text" name="" id="" placeholder="搜尋">
        </div>
      </div>


    </nav>

  </div>
</template>

<style scoped lang="scss">
div.logo_wrap {
  width: 15vw;
  height: 20vh;
  background-color: $kotanukiParkPrimary;
  border-radius: 0 0 $br_PC $br_PC;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 10vw;
  @include flex_hm();

  img {
    cursor: pointer;
    width: 10vw;
  }
}

nav.nav_list {
  z-index: 999;
  position: fixed;
  top: 5vh;
  right: 5vw;
  width: 50vw;
  height: 18vh;
  border-radius: $br_PC;
  background-color: $kotanukiParkPrimary;
  @include flex_hm();
  gap: 1.5vw;

  div.title_wrap {
    @include flex_vm();

    &:hover {

      h3,
      i {
        color: $kotanukiParkSecondary;
      }
    }

    &:active {

      h3,
      i {
        color: $kotanukiParkSecondary;
        opacity: 0.9;
      }
    }

    h3.title {
      font-size: 1.2vw;
    }

    i {
      @include flex_hm();
      padding: 0.5vw;
      font-size: 3vw;
      margin-bottom: 1vh;
    }

    h3,
    i {
      cursor: pointer;
      color: $white;
    }
  }

}

div.input_wrap {
  @include flex_vm();
  gap: 2vh;

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size:  1.5vw;
  }

  select,
  input {
    box-sizing: border-box;
    border: none;
    width: 12vw;
    height: 5vh;
    border-radius: $br_PC;
    padding-left: 2.8vw;
  }

  i {
    font-size: 1.3vw;
    position: absolute;
    color: $kotanukiParkPrimary;
    transform: translate(1vw, 1.1vh);
  }
}




input.search {}
</style>