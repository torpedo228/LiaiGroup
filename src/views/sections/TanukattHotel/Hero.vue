<script setup lang="ts">
import { ref, reactive } from 'vue'

const choosePeopleAndRoom = ref(false);

enum ORDER_ITEM {
  ADULTS,
  KIDS,
  ROOMS
}

let arr = new Array(Object.keys(ORDER_ITEM).length);
arr.fill(0)

const countOfOrderItem = reactive(
  arr
)

function plusOne(item: ORDER_ITEM) {
  countOfOrderItem[item] += 1;
}

function minusOne(item: ORDER_ITEM) {
  if (countOfOrderItem[item] > 0) {
    countOfOrderItem[item] -= 1;
  }
}

function toggleChooseBox() {
  choosePeopleAndRoom.value = !choosePeopleAndRoom.value;
}
function closeBoxAndRecordOnInput() {
  choosePeopleAndRoom.value = false;
}



</script>

<template>
  <div class="hero_container">
    <div class="content_wrap">
      <img class="logo_footer" src="@/assets/images/TanukattHotel/logo/logo_footer.svg" alt="logo_footer">
      <p class="slogan">奢華之地，獨具匠心。我們期待為您締造一場奇妙的住宿體驗。
      </p>

      <div class="input_wrap">
        <input class="input" type="text" name="check_in" id="check_in" placeholder="&#xf133  入住日期"
          style="font-family:FontAwesome" onfocus="(this.type='date')">
        <input class="input" type="text" name="check_in" id="check_out" placeholder="&#xf133  退房日期"
          style="font-family:FontAwesome" onfocus="(this.type='date')">
        <div class="count_and_rooms_wrap">
          <div class="count_and_rooms" @click="toggleChooseBox">
            <i
              class="fa-solid fa-user"></i>{{ countOfOrderItem[ORDER_ITEM.ADULTS] }}位成人·{{ countOfOrderItem[ORDER_ITEM.KIDS] }}位孩童·{{ countOfOrderItem[ORDER_ITEM.ROOMS] }}間客房<i
              class="fa-solid fa-angle-down"></i>
          </div>
          <div class="count_and_rooms_choose" v-if="choosePeopleAndRoom">
            <div class="wrap people">
              <p class="label">成人</p>
              <div class="count"><i class="fa-solid fa-plus"
                  @click="plusOne(ORDER_ITEM.ADULTS)"></i><span>{{ countOfOrderItem[ORDER_ITEM.ADULTS] }}</span><i
                  class="fa-solid fa-minus" @click="minusOne(ORDER_ITEM.ADULTS)"></i>
              </div>
            </div>
            <div class="wrap people">
              <p class="label">小孩</p>
              <div class="count"><i class="fa-solid fa-plus"
                  @click="plusOne(ORDER_ITEM.KIDS)"></i><span>{{ countOfOrderItem[ORDER_ITEM.KIDS] }}</span><i
                  class="fa-solid fa-minus" @click="minusOne(ORDER_ITEM.KIDS)"></i></div>
            </div>
            <div class="wrap rooms">
              <p class="label">客房</p>
              <div class="count"><i class="fa-solid fa-plus"
                  @click="plusOne(ORDER_ITEM.ROOMS)"></i><span>{{ countOfOrderItem[ORDER_ITEM.ROOMS] }}</span><i
                  class="fa-solid fa-minus" @click="minusOne(ORDER_ITEM.ROOMS)"></i></div>
            </div>
            <button class="finish" @click="closeBoxAndRecordOnInput">完成<i class="fa-solid fa-check"></i></button>
          </div>
        </div>
        <button class="search">搜尋空房<i class="fa-solid fa-magnifying-glass"></i></button>
      </div>




    </div>

    <img class="hero_img" src="@/assets/images/TanukattHotel/hero/hero_img.png" alt="hero_img">

  </div>
</template>

<style scoped lang="scss">
div.hero_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  @include flex_vm();

  img.hero_img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}

div.content_wrap {
  margin-bottom: 10vh;
  @include flex_vm_js();
  gap: 3vh;
  position: absolute;

  img.logo_footer {
    width: 25vw;
    object-fit: cover;
  }

  p.slogan {
    font-size: 1.2vw;
    color: white;
  }

  div.input_wrap {
    @include flex_hm_as();
    gap: 1vw;

    input,
    .count_and_rooms,
    .search {
      border: none;
      height: 6vh;
      background-color: white;
      border-radius: $br_PC;
      cursor: pointer;
    }

    input {
      width: 10vw;
      padding: 1vh 1vw 0;
      box-sizing: border-box;
      text-align: center;
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      font-size: 1.2vw;
      color: $tanukattHotelPrimary;
    }

    .count_and_rooms {
      @include flex_hm();
      gap: 0.5vw;
      width: 18vw;

      i {
        color: $tanukattHotelPrimary;
        @include flex_hm();
      }
    }

    .search {
      @include tagEffect();
      @include flex_hm();
      font-size: 1.1vw;
      gap: 0.5vw;
      width: 8vw;
      color: white;
      background-color: $tanukattHotelPrimary;
    }

  }

  div.count_and_rooms_wrap {
    position: relative;
  }

  div.count_and_rooms_choose {
    width: 18vw;
    height: 28vh;
    margin-top: 1vh;
    background-color: white;
    border-radius: $br_PC;
    position: absolute;
    @include flex_vm();
    gap: 2vh;

    div.wrap {
      @include flex_hm();
      gap: 5vw;
      font-size: 1.2vw;

      div.count {
        @include flex_hm();
        gap: 1vw;
      }

      i {
        @include tagEffect();
        @include flex_hm();
        width: 1.5vw;
        height: 1.5vw;
        color: white;
        background-color: $tanukattHotelPrimary;
        border-radius: $circle;
      }
    }
  }

  .finish {
    @include tagEffect();
    @include flex_hm();
    font-size: 1.1vw;
    gap: 0.5vw;
    width: 12vw;
    color: white;
    background-color: $tanukattHotelSecondary;
    border: none;
    height: 6vh;
    border-radius: $br_PC;
    cursor: pointer;
  }

}
</style>