<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

  .header {
    height: 844px;
    background-color: #1E2F43;

    overflow: hidden;


    @include onDesktop {
      height: 927px;
    }

    &__content-wrapper {



    }

    &__logo {
      height: 36px;
      width: 83px;

      @include onDesktop {
        width: 160px;
        height: 69px;
      }
    }

    &__navigation-mobile {
      padding-top: 45px;
      margin: 0 auto;
      width: 319px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 182px;

      @include onDesktop {
        display: none;
      }
    }

    &__burger-img {

    }

    &__background {

    }

    &__center-block {
      margin: 0 auto;
      width: 304px;

      @include onDesktop {
        width: 817px;
        height: 334px;
      }
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

      @include onDesktop {
        font-size: 64px;
        line-height: 74px;
        width: 750px;
        margin: 0 auto 30px;
      }
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

      @include onDesktop {
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        font-size: 16px;
      }
    }

    &__navigation-desktop {
      margin: 0 auto 157px;
      display: none;
      height: 69px;
      align-items: center;
      width: 1217px;
      padding-top: 51px;

      @include onDesktop {
        display: flex;
        justify-content: space-between;
      }
    }

    &__right-text {
      display: flex;
      align-items: center;
    }

    &__nav-menu {
      margin-right: 24px;
    }

    &__contact-us {
      margin-right: 24px;
    }

    &__buttons-wrapper {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;

      @include onDesktop {
        width: 456px;
      }
    }

    &__request-demo {
      margin-right: 30px;
      display: none;

      @include onDesktop {
        display: block;
      };
    }
  }

</style>

<template>
  <header class="header">
      <nav class="header__navigation-mobile">
        <Logo class="header__logo"/>
        <img class="header__burger-img" :src="burgerMenu" alt="logo">
      </nav>

      <nav class="header__navigation-desktop">
        <Logo class="header__logo"/>

        <div class="header__right-text">
          <NavMenu class="header__nav-menu"/>
          <ContactUsButton class="header__contact-us"/>
          <LangToggler class="header__lang-toggle"/>
        </div>
      </nav>

      <div class="header__center-block">
        <h1 class="header__title">
          Empowering you with State of the Art AI
        </h1>

        <h3 class="header__subtitle">
          Harness the Power of Your Private AI Environment & Custom Trained AI Model for Your Needs.
        </h3>

        <div class="header__buttons-wrapper">
          <RequestDemo class="header__request-demo"/>
          <DiscoverSolutions class="header__discover-solutions"/>
        </div>
      </div>
  </header>
</template>


<script setup>
  import DiscoverSolutions from '@/components/partials/DiscoverSolutions.vue';
  import Logo from '@/components/partials/Logo.vue';
  import RequestDemo from '@/components/partials/RequestDemo.vue';
  // const headerBackground = new URL('@/assets/images/bg_desktop.png', import.meta.url);
  import NavMenu from '@/components/partials/NavMenu.vue';
  import burgerMenu from '@/assets/svg/burgerMenu.svg';
  import ContactUsButton from '@/components/partials/ContactUsButton.vue';
  import LangToggler from '@/components/partials/LangToggler.vue';
</script>
