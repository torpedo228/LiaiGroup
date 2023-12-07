<script setup lang="ts">
import Title from '@/components/RaccoonDogAssociation/Title.vue';
import PortalButton from '@/components/global/PortalButton.vue';
import { getImageUrl } from '@/utils/assets-url'

import { ref } from 'vue'

const currentActionIndex = ref(0);

const actionList = [
  {
    label: '動物資訊傳播',
    title: "讓狸貓也能安心生活",
    content: '保育狸貓的第一步是深入了解牠們的生態習性。狸貓通常棲息在棉被中，有棉被小生物之稱。掌握牠們的行為、棲息地需求和食性，有助於制定更有效的保育措施......',
    imgSrc: 'RaccoonDogAssociation/actions/action_01.png',
    url: '#'
  },
  {
    label: '動物福利宣導',
    title: "讓狸貓也能安心吃飯",
    content: '保育狸貓的第二步是深入了解牠們的進食習性。狸貓通常喜歡吃地瓜，尤其是熱呼呼的地瓜。掌握牠們的行為、棲息地需求和食性，有助於制定更有效的保育措施......',
    imgSrc: 'RaccoonDogAssociation/actions/action_02.png',
    url: '#'
  },
  {
    label: '動保講師培訓',
    title: "讓狸貓也能安心睡覺",
    content: '保育狸貓的第三步是深入了解牠們的睡覺習性。狸貓通常睡在狸貓領地，香香又軟軟的。掌握牠們的行為、棲息地需求和食性，有助於制定更有效的保育措施......',
    imgSrc: 'RaccoonDogAssociation/actions/action_03.png',
    url: '#'
  },
  {
    label: '動物友善教育',
    title: "讓狸貓也能安心玩耍",
    content: '保育狸貓的第四步是深入了解牠們的玩耍習性。狸貓通常喜歡去冒險，會和星龜一起去拍魚，或是烤秋薯。掌握牠們的行為、棲息地需求和食性，有助於制定更有效的保育措施......',
    imgSrc: 'RaccoonDogAssociation/actions/action_04.png',
    url: '#'
  }
]

function switchAction(i: any) {
  currentActionIndex.value = i;
}
</script>

<template>
  <div class="actions_container" id="actions">
    <div class="title_block">
      <Title :title="'保育行動 Actions'" />
    </div>

    <div class="content_wrap">
      <div class="label_wrap">
        <div class="label" v-for="(action, i) in actionList" :key="action.label" @click="switchAction(i)">
          {{ action.label }}
        </div>
      </div>
      <div class="action_wrap">
        <div class="action">
          <div class="img_wrap">
            <img :src="getImageUrl(actionList[currentActionIndex].imgSrc as string)"
              :alt="actionList[currentActionIndex].title">
          </div>
          <div class="right_wrap">
            <h3> {{ actionList[currentActionIndex].title }}</h3>
            <p> {{ actionList[currentActionIndex].content }}</p>
            <div class="btn_block">
              <PortalButton content="繼續閱讀" type="rda_action" :routingLink="actionList[currentActionIndex].content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.actions_container {
  width: 100%;
  height: 80vh;
  padding-top: 10vh;
}

div.title_block {
  @include flex_hm();
  margin-bottom: 5vh;
}


div.content_wrap {


  div.label_wrap {
    @include flex_hm();
    gap: 2vw;
    margin-bottom: 5vh;

    div.label {
      @include tagEffect();
      @include flex_hm();
      width: 10vw;
      height: 8vh;
      border-radius: $br_PC;
      @include rdaGradient_btn();
      color: white;
    }
  }


  div.action_wrap {

    div.action {
      @include flex_hm();
      gap: 3vw;

      div.img_wrap {
        width: 25vw;
        height: 40vh;
        border-radius: $br_PC;
        overflow: hidden;
        @include flex_hm();

        img {
          height: 100%;
          object-fit: cover;
        }

      }


      div.right_wrap {
        width: 25vw;

        @include flex_vm_as();
        gap: 3vh;

        h3 {
          font-weight: $fwBold;

        }

        p {
          font-size: 1.2vw;
          line-height: 2;
        }
      }

    }
  }
}
</style>