<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

  .header {
    height: 844px;
    background-color: #1E2F43;
    // position: relative;
    overflow: hidden;


    @include onDesktop {
      height: 927px;
    }

    &__content-wrapper {


      // position: absolute;
      // z-index: 1;
    }

    &__logo {
      height: 36px;
      width: 83px;
    }

    &__navigation {
      padding-top: 45px;
      margin: 0 auto;
      width: 319px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 182px;
    }

    &__burger-img {

    }

    &__background {
      // position: absolute;
    }

    &__center-block {
      margin: 0 auto;
      width: 304px;
    }

    &__discover-solutions {
      margin: 0 auto;
    }

    &__title {
      color: $white;
      text-align: center;
      font-size: 31px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px;
      margin-bottom: 20px;
    }

    &__subtitle {
      color: $white;
      text-align: center;
      height: 40px;

      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 79px;
    }
  }

</style>

<template>
  <header class="header">
      <nav class="header__navigation">
        <Logo class="header__logo"/>
        <img class="header__burger-img" :src="burgerMenu" alt="logo">
      </nav>

      <div class="header__center-block">
        <h1 class="header__title">
          Empowering you with State of the Art AI
        </h1>

        <h3 class="header__subtitle">
          Harness the Power of Your Private AI Environment & Custom Trained AI Model for Your Needs.
        </h3>
        <DiscoverSolutions class="header__discover-solutions"/>
      </div>
  </header>
</template>


<script setup>
  import DiscoverSolutions from '@/components/partials/DiscoverSolutions.vue';
  import Logo from '@/components/partials/Logo.vue';
  const headerBackground = new URL('@/assets/images/bg_desktop.png', import.meta.url);
  import burgerMenu from '@/assets/svg/burgerMenu.svg';
</script>
