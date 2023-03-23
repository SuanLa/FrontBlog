<script setup>
const text = defineProps({
  text:String
})

</script>

<template>
  <v-md-preview id="md" :text="text.text"></v-md-preview>
</template>

<style scoped>
  #md {
    width: 140%;
  }
</style>