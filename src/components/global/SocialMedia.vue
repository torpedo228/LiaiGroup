<script setup lang="ts">
const props = defineProps({
  label: String,
  url: String
})
</script>

<template>
  <div class="socia_media_container">
    <div class="icon_block"><a :href="props.url"><i class="fa-brands" :class="`fa-${props.label}`"></i></a></div>

  </div>
</template>

<style scoped lang="scss">
div.socia_media_container {

  background-color: $white;
  border-radius: $circle;
  @include flex_hm();
  @include imgEffect();

  @include custom-responsive("xs sm") {
    width: 12vw;
    height: 12vw;
  }


  @include custom-responsive("xl xxl") {
    width: 3vw;
    height: 3vw;
  }
}

div.icon_block {
  cursor: pointer;
  @include flex_hm();

  i {
    @include flex_hm();

    @include custom-responsive("xs sm") {
      font-size: 8vw;
    }

    @include custom-responsive("xl xxl") {
      font-size: 2vw;
    }
  }
}


.fa-facebook {
  color: #4A3CEA;
}

.fa-linkedin {
  color: #403EA4;
}

.fa-line {
  color: #16B339;
}

.fa-youtube {
  color: #D40F0F;
}
</style>
