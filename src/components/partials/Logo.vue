<style scoped lang="scss">
  .logo {
    &__image {
      
    }
  }
</style>

<template>
  <div class="logo">
    <img class="logo__image" :src="logo" alt="logo">
  </div>
</template>

<script setup>
  import logo from '@/assets/svg/logo.svg';
</script>
