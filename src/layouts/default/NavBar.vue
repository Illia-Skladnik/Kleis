<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .navbar {
    height: 86px;
    width: 100%;
    position: relative;

    @include onDesktop {
      height: 116px;
    }

    &__navigation-mobile {
      padding-top: 23px;
      margin: 0 auto;
      width: 319px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 182px;

      @include onTablet {
        display: none;
      }
    }

    &__navigation-desktop {
      margin: 0 auto 157px;
      display: none;
      height: 69px;
      align-items: center;

      padding-top: 51px;

      @include onTablet {
        display: flex;
        justify-content: space-between;
        width: 704px;
      }

      @include onDesktop {
        width: 1217px;
      }
    }

    &__right-text {
      display: flex;
      align-items: center;
    }

    &__logo {
      height: 36px;
      width: 83px;

      @include onTablet {
        height: 40px;
        width: 93px;
      }

      @include onDesktop {
        width: 160px;
        height: 69px;
      }
    }

    &__contact-us {
      margin-right: 14px;
      width: 101px;
      height: 34px;
      font-size: 9px;

      @include onDesktop {
        margin-right: 24px;
        width: 175px;
        height: 58px;
        font-size: 16px;
      }
    }

    &__nav-menu {
      margin-right: 24px;
    }

    &__background {
      height: 86px;
      position: absolute;
      width: 100%;
      z-index: -1;
      overflow: hidden;
      display: flex;
      justify-content: center;

      @include onTablet {
        height: 116px;
      }
    }

    &__image {
      width: 2523px;
      height: 928px;
    }
  }
</style>

<template>
  <div class="navbar" id="navbar">
    <div class="navbar__background">
      <img :src="headerBackground" alt="background" class="navbar__image">
    </div>
    <nav v-if="!navBarModal.isActiveModal" class="navbar__navigation-mobile">
      <Logo class="navbar__logo"/>
      <HeaderBurgerMenu />
    </nav>
    <MobileMenuModal v-else/>

    <nav class="navbar__navigation-desktop">
      <Logo class="navbar__logo"/>
      <div class="navbar__right-text">
        <NavMenu class="navbar__nav-menu"/>
        <ContactUsButton class="navbar__contact-us"/>
        <LanguageSwitcher class="navbar__lang-toggle"/>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import Logo from '@/components/partials/Logo.vue';
  import NavMenu from '@/components/partials/NavMenu.vue';
  import ContactUsButton from '@/components/partials/ContactUsButton.vue';
  import LanguageSwitcher from '@/components/partials/LanguageSwitcher.vue';
  import HeaderBurgerMenu from '../HeaderBurgerMenu.vue';
  import MobileMenuModal from '../MobileMenuModal.vue';
  import { useNavBarModal } from '@/store/NavBarModal';

  const navBarModal = useNavBarModal();
  const headerBackground = new URL('@/assets/images/wide/bg_desktop.png', import.meta.url);
</script>
