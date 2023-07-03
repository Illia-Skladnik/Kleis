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
    @click="navBarModal.toggleModal"
  >

  <img
    v-else
    :src="CloseMenu"
    alt="close-sign"
    @click="navBarModal.toggleModal"
  >
</template>

<script setup>
  import burgerMenu from '@/assets/svg/burgerMenu.svg';
  import CloseMenu from '@/assets/svg/CloseMenu.svg';

  import { useNavBarModal } from '@/store/NavBarModal';

  const navBarModal = useNavBarModal();

  function handleBurgerClick(){
    const modal = document.querySelector('.burger-modal')

    console.log(modal)
  }


</script>
