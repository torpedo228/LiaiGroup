<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  content: String
})
</script>

<template>
  <p class="copyright">Copyright &copy; {{ new Date().getFullYear() }} {{ props.content }}</p>
</template>

<style scoped lang="scss">
p.copyright {
  padding: 5vw;
}
</style>
