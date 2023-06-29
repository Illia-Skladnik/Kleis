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

    &__navigation {
      display: flex;
    }

    &__burger-img {
      
    }
  }

</style>

<template>
  <header class="header">
    <!-- <DiscoverSolutions/> -->
    <div class="header__content-wrapper">
      <nav class="header__navigation">
        <Logo class="header__logo"/>
        <img class="header__burger-img" :src="burgerMenu" alt="logo">
      </nav>
    </div>


  </header>
</template>


<script setup>
  import DiscoverSolutions from '@/components/partials/DiscoverSolutions.vue';
  import Logo from '@/components/partials/Logo.vue';

  import burgerMenu from '@/assets/svg/burgerMenu.svg';
</script>
