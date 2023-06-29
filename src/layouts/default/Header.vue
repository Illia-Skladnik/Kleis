<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';

  .header {
    height: 844px;
    background-color: #1E2F43;

    @include onDesktop {
      height: 927px;
    }

    &__content-wrapper {
      width: 319px;
      margin: 0 auto;
    }

    &__logo {
      height: 36px;
      width: 83px;
    }
  }

</style>

<template>
  <header class="header">
    <!-- <DiscoverSolutions/> -->
    <div class="header__content-wrapper">
      <nav>
        <img class="header__logo" :src="logo" alt="logo">
        <img class="header__logo" :src="burgerMenu" alt="logo">
      </nav>
    </div>


  </header>
</template>


<script setup>
  import DiscoverSolutions from '@/components/partials/DiscoverSolutions.vue';
  import logo from '@/assets/svg/logo.svg';
  import burgerMenu from '@/assets/svg/burgerMenu.svg';
</script>
