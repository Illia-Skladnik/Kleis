<style scoped lang="scss">
  @import '@/assets/styles/placeholders.scss';
  @import '@/assets/styles/variables.scss';
  .burger-modal {
    background-color: $light-grey;
    position: fixed;
    width: 100vw;
    height: 100vh;

    &__wrapper {
      max-width: 325px;
      margin: 55px auto 0 auto;
    }

    &__lang-crest {
      @extend %d-f-c-sb;
      margin: 0 0 204px 0;
    }

    .nav-menu__at-modal {margin: 0 0 41px 0;}
  }
</style>

<template>

  <div class="burger-modal">
    <div class="burger-modal__wrapper">

      <div class="burger-modal__lang-crest">
        <LangToggler/>
        <div class="crest">
          <HeaderBurgerMenu/>
          <!-- <img :src="CloseMenu" alt=""> -->
        </div>
      </div>

      <div class="burger-modal__nav-menu">
        <NavMebu class="nav-menu__at-modal"/>
        <ContactUsButton/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import LangToggler from '@/components/partials/LangToggler.vue';
  import NavMebu from '../components/partials/NavMenu.vue'
  import ContactUsButton from '@/components/partials/ContactUsButton.vue';
  import HeaderBurgerMenu from './HeaderBurgerMenu.vue';

  const CloseMenu = new URL('../assets/svg/CloseMenu.svg', import.meta.url);
</script>

