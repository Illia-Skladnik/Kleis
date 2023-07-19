<style scoped lang="scss">
  @import '../../assets/styles/variables.scss';
  .button__contact-us {
    background: $dark-orange;
    font-size: 16px;
    width: 175px;
    height: 58px;
    text-align: center;
    line-height: 2;
    border-radius: 30px;
    font-weight: 700;
    color: $light-silver;
  }
</style>

<template>
  <button class="button__contact-us" @click="handleClick">Contact Us</button>
</template>

<script setup>
  import { useNavBarModal } from '@/store/NavBarModal';

  const navBarModal = useNavBarModal()
  function handleClick() {
    if (navBarModal.isActiveModal) {
      navBarModal.toggleModal();
      document.documentElement.style.overflow = 'visible';
    }


    const targetBlock = document.getElementById('info');
    const targetBlockTop = targetBlock.getBoundingClientRect().top;
    const scrollTop = document.documentElement.scrollTop;
    const targetPosition = targetBlockTop + scrollTop - 150;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
</script>
