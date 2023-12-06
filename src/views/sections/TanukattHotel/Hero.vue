<script setup lang="ts">

</script>

<template>
  <div class="hero_container">


    <img src="@/assets/images/TanukattHotel/hero/hero_img.png" alt="hero_img">

  </div>
</template>

<style scoped lang="scss">
div.hero_container {
  font-family: $kotanukiFont;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
}

div.today_info {
  box-sizing: border-box;
  width: 22vw;
  height: 40vh;
  border: 0.5vw solid $kotanukiParkPrimary;
  border-radius: $br_PC;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  right: 2vw;
  top: 57vh;
  padding: 1.5vw;
  @include flex_vm_as();
  justify-content: space-between;


  div.regular {
    @include flex_vm_as();
    gap: 3vh;

    h3 {
      font-weight: $fwMedium;
    }

    span {
      font-weight: $fwMedium;
      font-size: 1.2vw;
    }

    div.span_wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  div.event {
    color: $kotanukiParkPrimary;
    @include flex_vm_as();
    gap: 1.5vh;

    h4,
    p {
      font-weight: $fwMedium;
    }

    h4 {
      font-size: 1.5vw;
    }

    p {
      font-size: 1.2vw;
    }
  }


}

a.sponsor {
  width: 10vw;
  height: 10vw;
  position: absolute;
  right: 26vw;
  top: 65vh;
  z-index: 999;
}
</style>