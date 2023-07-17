<style scoped lang="scss">
  .class {

  }
</style>

<template>
  <img
    v-if="!navBarModal.isActiveModal"
    class="burger"
    :src="burgerMenu"
    alt="logo"
    @click="handleBurgerClick"
  >
  <img
    v-else
    :src="CloseMenu"
    alt="close-sign"
    @click="handleBurgerClick"
  >
</template>

<script setup>
  import burgerMenu from '@/assets/svg/burgerMenu.svg';
  import CloseMenu from '@/assets/svg/CloseMenu.svg';

  import { useNavBarModal } from '@/store/NavBarModal';

  const navBarModal = useNavBarModal();

  function handleBurgerClick(){
    navBarModal.toggleModal()
    const htmlTag = document.documentElement
    htmlTag.style.overflow = !navBarModal.isActiveModal ? 'visible' : 'hidden'
  }
</script>
