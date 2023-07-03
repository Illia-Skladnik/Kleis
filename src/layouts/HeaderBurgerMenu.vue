<style scoped lang="scss">
</style>

<template>
  <img
    v-if="!navBarModal.isActiveModal"
    class="burger"
    :src="burgerMenu"
    alt="logo"
    @click="navBarModal.toggleModal"
  >

</template>

<script setup>
  import burgerMenu from '@/assets/svg/burgerMenu.svg';
  import { useNavBarModal } from '@/store/NavBarModal';
  
  const navBarModal = useNavBarModal();

  function handleBurgerClick(){
    const modal = document.querySelector('.burger-modal')

    console.log(modal)
  }

  

  

</script>
