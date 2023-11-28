<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  content: String
})
</script>

<template>
  <div>
    <p>Copyright &copy; {{ new Date().getFullYear() }} {{ props.content }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
