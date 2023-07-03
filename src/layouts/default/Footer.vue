<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_placeholders.scss';
  @import '@/assets/styles/_mixins.scss';

  .footer {
    background: $dark;
    height: 1052px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: relative;
    width: 100%;

    @include onDesktop {
      padding: 72px 125px 28px 167px;
      height: 452px;
      justify-content: space-between;
      align-items: normal;
    }

    &__flex {
      display: flex;
      flex-direction: column;
      max-width: 390px;

      @include onDesktop {
        max-width: 100%;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    &__menu-policy-contact-flex {
      display: flex;
      flex-direction: column;

      @include onDesktop {
        flex-direction: column;
      }
    }

    &__policy-contact-flex {
      display: flex;
      flex-direction: column;

      @include onDesktop {
        justify-content: space-between;
        flex-direction: row;
      }
    }

    &__logo-container {
      margin: 0 0 41px 24px;

      @include onDesktop {
        margin: 0;
      }
    }
    &__container-contactUs {
      margin: 0 0 117px 24px;

      @include onDesktop {
        margin: 0;
        order: 2;
      }
    }

    &__paragraph {

      text-align: center;
      &.--privacy {margin: 0 0 77px 0;}
      &.--copyright {margin: 0 0 83px 0;}

      @include onDesktop {
        &.--privacy {
          margin: 0;
          font-size: 11px;
          line-height: 58px;
        }
        &.--copyright {margin: 0;}
      }
    }

    &__nav-menu {
      margin: 0 0 36px 24px;
      grid-area: navmenu;

      @include onDesktop {
        margin: 0 0 32px 0;
        width: min-content;
      }
    }

    &__label {
      @include onDesktop {
        right: -50%;
      }

      &--wrapper {
        top: -277px;
        right: 0;
        position: absolute;
        width: 366px;
        height: 721;
        overflow: hidden;

        @include onDesktop {
          top: -580px;

          height: 580px;
          width: 100%;
        }
      }
    }


  }
</style>

<template>
  <footer class="footer">
    <div class="footer__flex">
      <div class="footer__logo-container">
        <Logo/>
      </div>

      <div class="footer__menu-policy-contact-flex">
        <NavMenu class="footer__nav-menu"/>

        <div class="footer__policy-contact-flex">
          <div class="footer__container-contactUs">
            <ContactUsButton class="footer__button-contactUs"/>
          </div>

          <p class="footer__paragraph --privacy">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </div>
    <p class="footer__paragraph --copyright">© {{ copyright }} Kleis. All rights reserved.</p>
    <div class="footer__label--wrapper">
      <InfoLabel class="footer__label"/>
    </div>
  </footer>
</template>


<script setup>
  import { computed } from 'vue';
  import Logo from '@/components/partials/Logo.vue';
  import ContactUsButton from '@/components/partials/ContactUsButton.vue'
  import NavMenu from '@/components/partials/NavMenu.vue'
  import InfoLabel from '@/components/footer/InfoLabel.vue'

  const copyright = computed(() => new Date().getFullYear())
</script>
