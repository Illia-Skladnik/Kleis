<style scoped lang="scss">
</style>

<template>
  <img class="burger" :src="burgerMenu" alt="logo" :onclick="handleBurgerClick">
</template>

<script setup>
  import burgerMenu from '@/assets/svg/burgerMenu.svg';

  function handleBurgerClick(){
    const modal = document.querySelector('.burger-modal')

    console.log(modal)
  }
</script>
