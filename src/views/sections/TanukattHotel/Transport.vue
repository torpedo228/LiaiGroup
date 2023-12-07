<script setup lang="ts">
import Title from '@/components/TanukattHotel/Title.vue';



</script>

<template>
  <div class="transport_container" id="transport">
    <Title :title="'交通方式 TRANSPORTATION'" :color="'black'" />

    <div class="content_wrap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.92260426794326!2d144.80418579656572!3d13.512204691078479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x671f828c8641db49%3A0x4a56b83c55ce7778!2z6Zec5bO25Yex5oKF6YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1701928698213!5m2!1szh-TW!2stw"
        width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="methods">
        <h4>自行開車</h4>
        <p>國道一號於狸愛端出口下狸愛交流道 → 直走右轉地瓜路一段(車程約20分鐘) → 左轉小狸路一段 → 右轉幸福路一段 → 右側即抵達
        </p>
        <br>
        <h4>搭乘大眾運輸(飛機、接駁車)</h4>
        <p>1.搭乘飛機前往狸貓島<br>
          2.在狸貓島第一航廈二號出口處搭乘狸悅接駁車
        </p>
        <br>
        <h4>計程車</h4>
        <p>請跟計程車司機說「我要去狸愛市狸愛區幸福路一段2號」即可抵達
        </p>
        <br>
        <h4>禮賓車服務</h4>
        <p>狸悅酒店提供禮賓專車接送服務(星龜司機)，但因目的地遠近會有不同的收費(哈密瓜)，請撥打電話將由專人為您服務洽詢專線：(02)222-2222
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.transport_container {
  width: 100%;
  height: 80vh;
  @include flex_vm();
  gap: 5vh;
  padding: 10vh 0;
  background-color: $tanukattHotelGrey;
}

div.content_wrap {
  width: 80vw;
  @include flex_hm();
  gap: 3vw;

  div.methods {
    width: 30vw;

    h4 {
      font-weight: $fwBold;
    }
  }

}
</style>