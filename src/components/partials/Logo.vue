<style scoped lang="scss">
  .logo {
    height: 36px;
    width: 83px;
    position: relative;

    &__image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>

<template>
  <!-- <div class="logo"> -->
    <router-link to="/" class="logo">
      <img class="logo__image" :src="logo" alt="logo">
    </router-link>
  <!-- </div> -->
</template>

<script setup>
  import logo from '@/assets/svg/logo.svg';
  import {} from 'vue-router'
</script>
