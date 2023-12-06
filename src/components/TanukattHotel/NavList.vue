<script setup lang="ts">
const props = defineProps({
  color: String,
  direction: String
})

const navList = [
  {
    title: '關於狸悅 ABOUT',
    route: '#about',
  },
  {
    title: '房型介紹 ROOMS',
    route: '#rooms',
  },
  {
    title: '美饌佳餚 RESTAURANTS',
    route: '#restaurants',
  },
  {
    title: '服務設施 FACILITY',
    route: '#facility',
  },
  {
    title: '交通方式 TRANSPORT',
    route: '#transport',
  }
]
</script>

<template>
  <div>
    <nav class="nav" :class="props.direction">
      <li v-for="section in navList" :key="section.title">
        <RouterLink :to="section.route" :class="props.color">{{ section.title }}</RouterLink>
      </li>
    </nav>
  </div>
</template>

<style scoped lang="scss">
nav {


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
      font-weight: $fwBold;

      @include custom-responsive("xs sm") {
        font-size: 5vw;
      }

      @include custom-responsive("xl xxl") {
        font-size: 1vw;
      }

      &:hover {
        color: $imogamiMidPurple;
      }

      &:active {
        color: $imogamiDecoration;
      }
    }
  }
}

.purple {
  color: $imogamiSecondary;
}

.white {
  color: $white;
}

.horizon {
  @include flex_hm();
}

.vertical {
  @include flex_vm();
}
</style>
