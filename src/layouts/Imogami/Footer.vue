<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>

<template>
  <footer class="footer_container">
    <div class="logo_wrap" @click=scrollToTop>
      <img class="liai_group_logo" src="@/assets/images/Imogami/logo/logo_footer.svg" alt="Imogami logo">
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer.footer_container {
  width: 100%;
  height: 40vh;
  background-color: $imogamiSecondary;
    ;
  }
</style>