<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required:true
  }
})
</script>

<template>
    <a class="list-group-item list-group-item-action text-info-emphasis bg-dark" :href="href" data-bs-toggle="list" role="tab">{{ msg }}</a>
</template>

<style scoped>
</style>
