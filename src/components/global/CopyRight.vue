<script setup lang="ts">
const props = defineProps({
  content: String
})
</script>

<template>
  <p class="copyright">Copyright &copy; {{ new Date().getFullYear() }} {{ props.content }}</p>
</template>

<style scoped lang="scss">
</style>
