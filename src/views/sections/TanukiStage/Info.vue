<script setup lang="ts">
import PortalButton from '@/components/global/PortalButton.vue';
</script>

<template>
  <div class="drama_container" id="info">

    <div data-aos="slide-right" class="item tickets">
      <div class="title_block">
        <img class="big" src="@/assets/images/TanukiStage/title/title_tickets.svg" alt="">
      </div>
      <div class="content_wrap">
        <p>我們提供多種購票方式，方便您自由選擇！</p>
        <div class="option_wrap">
          <div><span>洽詢專線</span><span>(02)222-2222#22</span></div>
          <div><span>Fax</span><span>(02)222-2222</span></div>
          <div><span>Email</span><span>tanukistage@tiny-tanuki.com</span>
          </div>
        </div>
        <div class="btn_block">
          <PortalButton content="票怎麼買?" type="tanuki_stage_tickets" routingLink="#" />
        </div>
      </div>
      <a href="https://www.buymeacoffee.com/tanuki.jr">
        <img class="buy_tickets" src="@/assets/images/TanukiStage/info/buy_tickets.png" alt="">
      </a>
      <img class="tickets_deco" src="@/assets/images/TanukiStage/info/tickets_deco.svg" alt="">
    </div>

    <div data-aos="slide-down" class="item invite">
      <div class="title_block">
        <img src="@/assets/images/TanukiStage/title/title_invite.svg" alt="">
      </div>
      <pre class="content">在每一場演出中
我們用心演繹夢想
彩虹般的表演
為生活灑下一抹繽紛色彩</pre>
      <div class="btn_block">
        <PortalButton content="商業洽談" type="tanuki_stage_invite" routingLink="#" />
      </div>
    </div>

    <div data-aos="slide-up" class="item member">
      <RouterLink to="">
        <div class="title_block">
          <img src="@/assets/images/TanukiStage/title/title_member.svg" alt="">
        </div>
        <p class="content">愛看戲的親子大小有福囉！
          加入狸之友除了可享最低優惠，還有不定時的專屬會員活動！</p>
      </RouterLink>
    </div>

    <div data-aos="slide-left" class="item join_us">
      <RouterLink to="">
        <div class="title_block">
          <img src="@/assets/images/TanukiStage/title/title_join_us.svg" alt="">
        </div>
        <p class="content">秉持對藝術的熱情，無論您是戲劇系畢業，或對劇場有莫大的熱忱，期待你加入狸大家庭！</p>
      </RouterLink>
    </div>

    <img class="deco" src="@/assets/images/TanukiStage/deco.svg" alt="">
  </div>
</template>

<style scoped lang="scss">
div.drama_container {
  height: 65vh;
  width: 80%;
  margin-left: auto;
  position: relative;
  display: grid;

  grid-template-areas:
    'tickets invite invite'
    'tickets member join_us';

  grid-template-columns: 50% 25% 25%;
}

.tickets {
  grid-area: tickets;
  position: relative;
  @include flex_vm_js();

  div.content_wrap {
    position: relative;
    z-index: 10;
    @include flex_vm_as();
    gap: 3vh;
    height: 50vh;
    font-size: 1.2vw;

    p {
      font-weight: $fwBold;
      font-size: 1.2vw;
    }

    div.option_wrap {
      @include flex_vm_as();
      gap: 2vh;


      div {
        @include flex_hm();
        gap: 3vw;

        span:first-child {

          width: 10vw;
        }
      }
    }
  }

  div.btn_block {
    position: absolute;
    bottom: 0;
  }

  img {
    position: absolute;
  }

  img.buy_tickets {
    width: 18vw;
    bottom: 4vh;
    right: 5vw;
    opacity: 0.5;
    z-index: 20;
  }

  img.tickets_deco {
    width: 2vw;
    bottom: 6vh;
    right: 2vw;
  }

}

.invite {
  grid-area: invite;
  background-image: url('/src/assets/images/TanukiStage/info/join_us.png');
  background-position: 50% 50%;
  background-size: cover;
  position: relative;

  div.title_block {
    img {
      margin-right: auto;
    }
  }

  div.btn_block {
    position: absolute;
    right: 1vw;
    bottom: 1vh;
  }
}

.member {
  grid-area: member;
  background-color: $tanukiStagePrimary;
}

.join_us {
  grid-area: join_us;
  background-color: $tanukiStageSecondary;
}


.content {
  color: white;
  width: 80%;
  margin: auto;
  font-size: 1.1vw;
}

div.title_block {
  display: flex;
  justify-content: center;
  margin: 3vh 2vw;

  img {
    width: 15vw;
  }

  img.big {
    width: 20vw;
  }
}


img.deco {
  position: absolute;
  height: 30vh;
  right: 0;
  top: -15vh;
}
</style>