<script setup lang="ts">
import { defineProps } from 'vue'

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
  width: 3vw;
  height: 3vw;
  background-color: $white;
  border-radius: $circle;
  @include flex_hm();
  @include btnEffect(0,0,0);
}

div.icon_block {


  a {
    @include flex_hm();

    i {
      font-size: 2vw;
    }
  }

}


.fa-facebook{
  color: #4A3CEA;
}
.fa-linkedin{
  color: #403EA4;
}
.fa-line{
  color: #16B339;
}
.fa-youtube{
  color: #D40F0F;
}
</style>
