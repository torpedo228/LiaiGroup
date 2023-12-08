<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';
import PortalButton from '@/components/global/PortalButton.vue';
import { getImageUrl } from '@/utils/assets-url'

const roomList = [
  {
    title: '尊狸客房',
    intro: '尊狸客房的標誌性特色包括豪華寢具、現代化的設施，以及令人屏息的奢華氛圍。我們追求卓越，致力於提供最極致的住宿體驗，讓您在尊狸客房中感受到舒適、放鬆和奢華的完美結合。',
    people: '2',
    area: '20~21',
    bedType: '一雙人床 / 兩單人床',
    price: '22,222',
    imgSrc: 'TanukattHotel/rooms/rooms_01.png'
  },
  {
    title: '狸賓總統套房',
    intro: '狸賓總統套房不僅提供最優雅的居住環境，更以無微不至的服務彰顯尊榮。私人管家隨時為您提供個性化的服務，還有專享頂流酒保小牙為您服務，讓您沉浸在無拘束的奢華體驗中。',
    people: '6',
    area: '40~41',
    bedType: '三雙人加大床 / 六單人加大床',
    price: '66,666',
    imgSrc: 'TanukattHotel/rooms/rooms_02.png'
  },
  {
    title: '天選之狸尊榮限定房',
    intro: '天選之狸尊榮限定房，奢華中見尊貴，猶如置身狸族殿堂。房內融匯東方雅致與現代奢華，金碧輝煌的裝潢營造出尊者之氣，專屬服務更使您沐浴皇族寵愛。寢具柔軟如絲，備有私人泡湯空間，幸運的話，還可遇見小狸猫一族在房內跳舞玩耍，讓您尊享專屬榮寵時光。',
    people: '12',
    area: '80~81',
    bedType: '六雙人加大床 / 十二單人加大床',
    price: '122,222',
    imgSrc: 'TanukattHotel/rooms/rooms_03.png'
  }
]

</script>

<template>
  <div class="rooms_container" id="rooms">
    <Title :title="'房型介紹 ROOMS'" :color="'black'" />
    <p class="slogan">狸悅酒店設有222間多樣化客房，獨具巧思的空間設計，極緻貼心的客房服務，令旅客的住宿體驗格外舒適。</p>

    <div class="rooms_wrap">
      <div class="room" v-for="room in roomList" :key="room.title">
        <div class="content_wrap">
          <h3 class="title">{{ room.title }}</h3>
          <p class="intro">&emsp;&emsp;{{ room.intro }}</p>
          <div class="detail_wrap">
            <div class="detail_block">
              <h4 class="people">入住人數</h4>
              <p>{{ room.people }}</p>
            </div>
            <div class="detail_block">
              <h4 class="area">客房面積</h4>
              <p>約 {{ room.area }} 坪</p>
            </div>
            <div class="detail_block">
              <h4 class="bedType">客房床型</h4>
              <p>{{ room.bedType }}</p>
            </div>
          </div>

          <div class="price_wrap" title="TNK為幣種「狸貓粉」之簡稱，即Tanuki Ko">TNK {{ room.price }} 起
            <P class="additional">( 以上價格均需另加10%服務費 )</P>
          </div>
          <div class="portal_wrap">
            <PortalButton content="詳細資訊" type="tanukatt_room_detail" routingLink="#" />
            <PortalButton content="立即訂房" type="tanukatt_book_now" routingLink="#" />
          </div>
        </div>

        <div class="img_block">
          <img :src="getImageUrl(room.imgSrc as string)" :alt="room.title">
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
div.rooms_container {
  width: 100%;
  @include flex_vm();
  gap: 3vw;
  padding: 10vh 0;

}

p.slogan {
  font-size: 1.2vw;
}


div.rooms_wrap {
  width: 70vw;
  @include flex_vm();
  gap: 10vh;

  div.room {
    @include flex_hm();
    gap: 2vw;
    width: 70vw;
    height: 60vh;

    div.content_wrap {
      font-family: $tanukattFont;
      @include flex_vm();
      gap: 3vh;
      height: 100%;
      width: 45%;

      h3.title {
        font-size: 1.5vw;
        font-weight: $fwBold;
        color: $textColor;
      }

      p.intro {
        width: 90%;
      }

      div.detail_wrap {
        @include flex_hm();

        div.detail_block {
          @include flex_vm();
          width: 8vw;
          height: 12vh;

          h4 {
            font-weight: $fwBold;
            @include flex_vm();
            height: 5vh;
          }

          p {
            color: $tanukattHotelPrimary;
            @include flex_vm();
            width: 6vw;
            height: 7vh;
          }
        }

        div.detail_block:nth-child(2) {
          border-left: 0.1vw solid $tanukattHotelGrey;
          border-right: 0.1vw solid $tanukattHotelGrey;
        }

        div.detail_block:last-child {
          width: 15vw;

          p {
            width: 100%;
          }
        }
      }

      div.price_wrap {
        @include flex_vm();
        width: 25vw;
        border-top: 0.1vw solid $tanukattHotelGrey;
        font-size: 1.5vw;
        font-weight: $fwBold;
        color: $tanukattHotelPrimary;
        padding-top: 2vh;
      }

      div.portal_wrap {
        @include flex_hm();
      }
    }

    div.img_block {
      overflow: hidden;
      width: 65%;
      height: 60vh;
      @include flex_hm();

      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

div.room:nth-child(odd) {
  flex-direction: row-reverse;
}
</style>