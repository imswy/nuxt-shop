<template>
  <h1>内容</h1>
</template>
<script setup>
const data = await $fetch('/api/classify/1')
console.log(data)
</script>
