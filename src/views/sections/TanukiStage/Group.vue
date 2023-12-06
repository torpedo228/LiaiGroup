<script setup lang="ts">
import { getImageUrl } from '@/utils/assets-url'
import { ref } from 'vue'

const currentRoleIndex = ref(0);

const roleList = [
  {
    roleName: "白胖肥龍",
    act: "二狸貓",
    drama: "尋龍記",
    intro: "小狸貓一族的二狸貓，在某次的冒險中，發現了一個古老的巨大龍族寺廟，寺廟中保存著龍族的歷史和記錄。當二狸貓靠近時，一股強大的力量將其吸引進寺廟深處，啟動了龍族的神秘基因，在神秘的轉變中，二狸貓的身體逐漸展現出龍族的特徵，身上的毛皮逐漸轉為逆鱗，漆黑的眼中閃爍著龍族特有的光芒...",
    imgSrc: "TanukiStage/group/white_fat_dragon.png"
  },
  {
    roleName: " 哈密瓜龍",
    act: "星龜",
    drama: "尋龍記 之二",
    intro: "哈密瓜龍的故事始於遠古時代，當它從星辰大海誕生出來時，便帶著宇宙的能量和智慧。它的哈密瓜則被視為連接星辰之力的載體，擁有治癒和保護的神奇效果。在長時間的守護過程中，哈密瓜龍感受到異世界的變化和危機。於是，它開始積極尋找能夠協助守護的夥伴。這時，它遇到了白胖肥龍，那隻被命運選中的龍族，同時也是彩虹力量的使者...",
    imgSrc: "TanukiStage/group/star_turtle.png"
  },
  {
    roleName: "禿頭海豹",
    act: "二狸貓",
    drama: "狸之起源",
    intro: "遠古壁畫中小海豹戴上狸貓帽進化成小狸貓一族的傳說，一直是這個世界的謎團之一。主人公「闡釋者」決定追尋這個傳說的源頭，解開更多有關小海豹與小狸貓一族之間的秘密，精彩的冒險將在此揭開序幕。",
    imgSrc: "TanukiStage/group/hage_seal.png"
  },
  {
    roleName: "師父",
    act: "小狸貓",
    drama: "狸之起源",
    intro: "在廣袤的大陸上，各種野生動物和神奇的獸群自由地漫遊。人們發現，這些生物中的一部分具有超自然的力量，而且可以與人類建立契約，成為靈獸。而冒險者們的目標始終都是傳說中最強大的靈獸「小狸貓一族」，它們一直被賦予神秘色彩，沒有人真正確定它們是否存在，直到那天......",
    imgSrc: "TanukiStage/group/master.png"
  },
  {
    roleName: "狸兔",
    act: "二狸貓",
    drama: "Dancing Beast",
    intro: "小狸貓一族的狸兔身上有一種神奇的力量，每當牠使用狸貓拳的時候，周圍的一切都會變得幸福。狸兔的幸福舞蹈不僅能夠治癒森林中的植物，還能讓其他小動物變得更加快樂。每當狸兔開始跳舞時，鳥兒會開始歌唱，花朵會綻放出五彩斑斓的顏色，整個森林彷彿沐浴在了一片溫馨的氛圍之中。然而，有一天，一場大風襲來，把森林中的樹木都吹得搖搖欲墜。狸兔決定......",
    imgSrc: "TanukiStage/group/tanubit.png"
  }
]

function switchRole(i: any) {
  currentRoleIndex.value = i;
}
</script>

<template>
  <div class="group_container" id="group">
    <div class="title_block">
      <img src="@/assets/images/TanukiStage/title/title_group.svg" alt="">
    </div>
    <div class="introduce" data-aos="flip-left">
      <div class="focus_wrap">
        <img class="show" :src="getImageUrl(roleList[currentRoleIndex].imgSrc as string)"
          :alt="roleList[currentRoleIndex].roleName">
        <img src="@/assets/images/TanukiStage/group/background_deco.svg" alt="">
      </div>

      <div class="role_container">
        <div class="role_wrap">
          <div class="role_block" v-for="(role, i) in roleList" :key="role.roleName" @click="switchRole(i)">
            <img :src="getImageUrl(role.imgSrc as string)" :alt="role.roleName">
          </div>
        </div>

        <div class="content_wrap">
          <div class="content">
            <div class="title_wrap">
              <h4 class="roleName">{{ roleList[currentRoleIndex].roleName }}</h4>
              <span class="act">{{ roleList[currentRoleIndex].act }} 飾</span>
              <RouterLink to="">

                <div class="drama" title="前往購票"><i
                    class="fa-solid fa-quote-left"></i>{{ roleList[currentRoleIndex].drama }}<i
                    class="fa-solid fa-quote-right"></i>
                </div>
              </RouterLink>
            </div>
            <p>{{ roleList[currentRoleIndex].intro }}</p>
          </div>
        </div>

      </div>
    </div>

    <img data-aos="slide-left" class="deco" src="@/assets/images/TanukiStage/deco.svg" alt="">

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
  width: 70vw;
  height: 60vh;
  display: flex;
  gap: 3vw;

  div.focus_wrap {
    position: relative;
    width: 20vw;
    height: 20vw;
    @include flex_hm();

    img.show {
      width: 100%;
      width: 20vw;
      position: absolute;
      display: block;
      right: 0;
    }
  }

  div.role_container {
    width: 80%;
    @include flex_vm_js();
    gap: 5vh;

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


        &:hover {
          transform: scale(1.2);
          transition: 0.2s;
        }

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
      width: 80%;

      div.title_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.3vw solid $tanukiStageSecondary;
        padding-bottom: 2vh;

        h4 {
          width: 30%;
          color: $textColor;
          font-size: 2vw;
          font-weight: $fwBold;
        }

        span {
          font-size: 1.2vw;
        }

        div {
          @include flex_hm();
          gap: 1vw;
          width: 15vw;
          font-size: 1.2vw;
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
</style>