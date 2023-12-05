<script setup lang="ts">
import { getImageUrl } from '@/utils/assets-url'

function switchRole(role: any, i: any) {
  roleList.splice(i, 1);
  roleList.unshift(role);
}


const roleList = [
  {
    roleName: "白胖肥龍",
    act: "二狸貓",
    drama: "尋龍記",
    intro: "驚心動魄的一場冒險，一隻發現自己身世的狸貓...",
    imgSrc: "TanukiStage/group/white_fat_dragon.png"
  },
  {
    roleName: " 哈密瓜龍",
    act: "星龜",
    drama: "尋龍記",
    intro: "驚心動魄的一場冒險，一隻發現自己身世的狸貓...",
    imgSrc: "TanukiStage/group/star_turtle.png"
  },
  {
    roleName: "師父",
    act: "小狸貓",
    drama: "狸之起源",
    intro: "驚心動魄的一場冒險，一隻發現自己身世的狸貓...",
    imgSrc: "TanukiStage/group/master.png"
  },
  {
    roleName: "禿頭海豹",
    act: "二狸貓",
    drama: "狸之起源",
    intro: "驚心動魄的一場冒險，一隻發現自己身世的狸貓...",
    imgSrc: "TanukiStage/group/hage_seal.png"
  }
]
</script>

<template>
  <div class="group_container" id="group">
    <div class="title_block">
      <img src="@/assets/images/TanukiStage/title/title_group.svg" alt="">
    </div>
    <div class="introduce">

      <div class="focus_wrap">
        <img class="show" v-for="role in roleList" :key="role.roleName" :src="getImageUrl(role.imgSrc as string)"
          :alt="role.roleName">
        <img src="@/assets/images/TanukiStage/group/background_deco.svg" alt="">
      </div>

      <div class="role_container">
        <div class="role_wrap">
          <div class="role_block" v-for="role in roleList" :key="role.roleName" @click="switchRole(role, 0)">
            <img :src="getImageUrl(role.imgSrc as string)" :alt="role.roleName">
          </div>
        </div>

        <div class="content_wrap">
          <div class="content" v-for="role in roleList" :key="role.roleName">
            <div class="title_wrap">
              <h4 class="roleName">{{ role.roleName }}</h4>
              <span class="act">{{ role.act }} 飾</span>
              <RouterLink to="">

                <div class="drama" title="前往購票">{{ role.drama }}</div>
              </RouterLink>
            </div>
            <p>{{ role.intro }}</p>
          </div>
        </div>

      </div>
    </div>

    <img class="deco" src="@/assets/images/TanukiStage/deco.svg" alt="">

  </div>
</template>

<style scoped lang="scss">
div.group_container {

  width: 80%;
  margin-left: auto;
  position: relative;
}

div.introduce {
  margin: auto;
  width: 60vw;
  height: 60vh;
  display: flex;
  gap: 3vw;

  div.focus_wrap {
    position: relative;

    img.show {
      width: 20vw;
      position: absolute;
      display: none;
      right: 0;
    }

    img.show:first-child {
      display: block;
    }
  }

  div.role_container {
    @include flex_vm_js();
    gap: 10vh;


    div.role_wrap {
      @include flex_hm();
      gap: 1vw;

      div.role_block {
        width: 6vw;
        height: 6vw;
        border-radius: $circle;
        @include flex_hm();
        overflow: hidden;
        cursor: pointer;

        img {
          width: 80%;
        }
      }

      div.role_block:nth-child(odd) {
        background-color: $tanukiStagePrimary;
      }

      div.role_block:nth-child(even) {
        background-color: $tanukiStageSecondary;
      }
    }

    div.content_wrap {

      div.content {
        display: none;
      }

      div.content:first-child {
        display: block;

      }

      div.title_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.3vw solid $tanukiStageSecondary;
        padding-bottom: 2vh;

        h4 {
          color: $textColor;
          font-size: 2vw;
          font-weight: $fwBold;
        }

        span {
          font-size: 1.2vw;
        }

        div {
          font-size: 1.5vw;
          padding: 0.5vw;
          color: white;
          background-color: $tanukiStageSecondary;

          &:hover {
            background-color: $tanukiStagePrimary;
          }

          &:active {
            opacity: 0.7;
          }
        }
      }

      p {
        font-size: 1.2vw;
        padding-top: 2vh;
      }

    }


  }
}







div.title_block {
  margin: 5vh 5vw;

  img {
    height: 12vh;
  }
}

img.deco {
  position: absolute;
  height: 30vh;
  right: 0;
  top: -20vh;
}
</style>@/utils/assets-url