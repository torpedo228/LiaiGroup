<script setup lang="ts">
import Title from '@/components/KotanukiPark/Title.vue';
import { getImageUrl } from '@/utils/assets-url'

const flowerList = [
  {
    title: "超級波斯",
    status: "滿開綻放中",
    location: "小狸花園廣場",
    date: "2023/12/2",
    imgSrc: "KotanukiPark/seasonal/flower_1.svg"
  },
  {
    title: "霸王菊花",
    status: "滿開綻放中",
    location: "幸福走廊",
    date: "2023/12/2",
    imgSrc: "KotanukiPark/seasonal/flower_2.svg"
  },
  {
    title: "極!繡球",
    status: "滿開綻放中",
    location: "小狸花園廣場",
    date: "2023/12/2",
    imgSrc: "KotanukiPark/seasonal/flower_3.svg"
  },
  {
    title: "霸王菊花",
    status: "滿開綻放中",
    location: "幸福走廊",
    date: "2023/12/2",
    imgSrc: "KotanukiPark/seasonal/flower_2.svg"
  },
  {
    title: "極!繡球",
    status: "滿開綻放中",
    location: "小狸花園廣場",
    date: "2023/12/2",
    imgSrc: "KotanukiPark/seasonal/flower_3.svg"
  },
  {
    title: "超級波斯",
    status: "滿開綻放中",
    location: "幸福走廊",
    date: "2023/12/2",
    imgSrc: "KotanukiPark/seasonal/flower_1.svg"
  }
]
</script>

<template>
  <div class="seasonal_container" id="seasonal">
    <div class="title_block">
      <Title :title="'當季花卉 (9月~12月)'" :color="'pink'" />
    </div>

    <div class="flower_wrap">
      <div class="flower" v-for="flower in  flowerList " :key="flower.title">
        <div class="img_block">
          <img :src="getImageUrl(flower.imgSrc as string)" alt="">
        </div>
        <div class="content_wrap">
          <h4 class="title">{{ flower.title }}</h4>
          <p class="status"><i class="fa-solid fa-seedling"></i>{{ flower.status }}</p>
          <p class="location"><i class="fa-solid fa-location-dot"></i>{{ flower.location }}</p>
          <span class="date">{{ flower.date }}</span>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
div.seasonal_container {
  width: 100%;
  position: relative;
  @include flex_vm();
  padding: 25vh 0 10vh;
}

div.title_block {
  position: absolute;
  left: 25vw;
  top: 10vh;
}

div.flower_wrap {

  width: 80vw;
  @include flex_hm();
  flex-wrap: wrap;
  gap: 1vw;

  div.flower {
    box-sizing: border-box;
    width: 20vw;
    height: 50vh;
    border: 0.2vw solid $kotanukiParkPrimary;
    border-radius: $br_PC;
    padding: 1vw;

    display: flex;
    flex-direction: column;
    gap: 1vh;

    div.img_block {
      overflow: hidden;
      border-radius: $br_PC;

      img {
        width: 100%;
        object-fit: cover;

        &:hover {
          cursor: pointer;
          transform: scale(1.2);
          transition: 0.2s;
        }
      }
    }

    div.content_wrap {
      width: 100%;
      height: 40%;
      align-self: start;
      display: flex;
      flex-direction: column;
      gap: 2vh;

      h4 {
        color: $kotanukiParkPrimary;
        font-size: 1.5vw;
      }

      p {
        display: flex;
        align-items: center;

        i {
          width: 2vw;
          color: $kotanukiParkPrimary;
          font-size: 1.5vw;
        }
      }

      span.date {
        color: $kotanukiParkPrimary;
        margin-left: auto;
        font-size: 1.2vw;
      }
    }
  }
}
</style>