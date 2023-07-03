<style scoped lang="scss">
  .logo {
    position: relative;
    display: block;

    &__image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: scale-down;
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
