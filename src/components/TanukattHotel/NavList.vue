<script setup lang="ts">
const props = defineProps({
  color: String
})

const navList = [
  {
    title_CH: '關於狸悅',
    title_EN: 'ABOUT',
    route: '#about',
  },
  {
    title_CH: '房型介紹',
    title_EN: 'ROOMS',
    route: '#rooms',
  },
  {
    title_CH: '美饌佳餚',
    title_EN: 'RESTAURANTS',
    route: '#restaurants',
  },
  {
    title_CH: '服務設施',
    title_EN: 'FACILITY',
    route: '#facility',
  },
  {
    title_CH: '交通方式',
    title_EN: 'TRANSPORT',
    route: '#transport',
  }
]
</script>

<template>
  <div>
    <nav class="nav">
      <li v-for="section in navList" :key="section.title_CH">
        <RouterLink :to="section.route" :class="props.color">{{ section.title_CH }}&emsp;{{ section.title_EN }}
        </RouterLink>
      </li>
    </nav>
  </div>
</template>

<style scoped lang="scss">
nav {
  @include flex_vm_as();
  gap: 3vh;

  li {
    list-style: none;

    a {
      font-size: 1.1vw;

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.8;
      }
    }
  }
}

.black {
  color: $textColor;
  font-weight: $fwBold;
}

.white {
  color: $white;
  font-weight: $fwRegular;
}
</style>
