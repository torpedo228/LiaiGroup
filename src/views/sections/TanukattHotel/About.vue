<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';
</script>

<template>
  <div class="about_container" id="about">
    <Title :title="'關於狸悅 ABOUT'" :color="'black'" />
    <div class="about_wrap">
      <img class="about_img" src="@/assets/images/TanukattHotel/about/about.svg" alt="about">
      <div class="content_wrap">
        <p>&emsp;&emsp;歡迎蒞臨「狸悅酒店」，這裡不僅提供旅途中的安心落腳之處，更是一場彷彿置身夢境的奢華體驗。我們以獨特的設計、卓越的服務和細緻的呵護，為每位賓客打造一場極致的住宿之旅。 </p>
        <p>
          &emsp;&emsp;狸悅酒店引以為傲的奢華品味，使每一間客房都成為舒適與尊榮的代名詞，無論身處何處，您都能感受到尊榮與安逸。我們以卓越的服務標準自豪，熱情的員工將竭盡全力滿足您的需求。酒店位於優越的地理位置，周邊環境宜人，交通便捷，是您探索城市的理想據點。
        </p>
        <p>
          &emsp;&emsp;在狸悅酒店，我們融入最先進的科技，提供一系列人性化的設施，確保您在酒店內享受到便捷和舒適。無論是商務差旅、浪漫度假還是家庭出行，狸悅酒店都將為您提供獨一無二的服務體驗。更特別的是，我們歡迎全家一同入住，提供專屬的親子設施和活動，確保您的家庭在這裡共度溫馨時光。
        </p>
        <div class="sign_block">
          <span>狸愛集團創辦人</span>
          <a href="https://www.buymeacoffee.com/tanuki.jr"><img class="signature" src="@/assets/images/TanukattHotel/about/signature.png" alt="signature"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.about_container {
  position: relative;
  overflow: hidden;
  @include flex_vm();
  gap: 3vw;
  padding: 10vh;
}

div.about_wrap {
  @include flex_hm();
  gap: 3vw;
}

img.about_img {
  width: 40vw;
}

div.content_wrap {
  width: 40vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;

  p {
    font-size: 1.2vw;
  }
}

div.sign_block {
  margin-left: auto;

  span {
    font-size: 1.5vw;
  }

  img.signature {
    width: 10vw;
  }
}
</style>