<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';
  .navbar {
    height: 116px;
    overflow: hidden;

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

    &__logo {
      height: 36px;
      width: 83px;

      @include onDesktop {
        width: 160px;
        height: 69px;
      }
    }

    &__contact-us {
      margin-right: 24px;
    }

    &__nav-menu {
      margin-right: 24px;
    }

    &__background {
      // position: relative;
      // z-index: 2;
    }
  }
</style>

<template>
  <div class="navbar">
    <!-- <img :src="headerBackground" alt="background" class="navbar__background"> -->
    <nav v-if="!isActiveModal" class="navbar__navigation-mobile">
      <Logo class="navbar__logo"/>
      <HeaderBurgerMenu/>
    </nav>
    <MobileMenuModal/>

    <nav class="navbar__navigation-desktop">
      <Logo class="navbar__logo"/>
      <div class="navbar__right-text">
        <NavMenu class="navbar__nav-menu"/>
        <ContactUsButton class="navbar__contact-us"/>
        <LangToggler class="navbar__lang-toggle"/>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import Logo from '@/components/partials/Logo.vue';
  import NavMenu from '@/components/partials/NavMenu.vue';
  import ContactUsButton from '@/components/partials/ContactUsButton.vue';
  import LangToggler from '@/components/partials/LangToggler.vue';
  import HeaderBurgerMenu from '../HeaderBurgerMenu.vue';
  import MobileMenuModal from '../MobileMenuModal.vue';
  const headerBackground = new URL('@/assets/images/wide/bg_desktop.png', import.meta.url);
  import { ref } from 'vue';

  const isActiveModal = ref(false);
</script>
