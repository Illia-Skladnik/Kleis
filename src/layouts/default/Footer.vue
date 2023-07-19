<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_placeholders.scss';
  @import '@/assets/styles/_mixins.scss';

  .footer {
    background: $dark-blue;
    height: 1052px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: relative;
    width: 100%;
    scroll-behavior: smooth;

    @include onTablet {
      justify-content: space-between;
      align-items: normal;
      height: 281px;
      padding: 45px 0 0 0 ;
    }

    @include onDesktop {
      padding: 72px 125px 28px 167px;
      height: 452px;
    }

    &__flex {
      display: flex;
      flex-direction: column;
      width: 390px;

      @include onTablet {
        flex-direction: row;
        justify-content: space-between;
        max-width: 100%;
        width: 100%;

      }

      @include onDesktop {

      }
    }

    &__menu-policy-contact-flex {
      display: flex;
      flex-direction: column;

      @include onTablet {
        padding-right: 78px;
        align-items: end;
      }

      @include onDesktop {
        padding-right: 0;
      }
    }

    &__policy-contact-flex {
      display: flex;
      flex-direction: column;

      @include onTablet {
        justify-content: space-between;
        flex-direction: row;
      }

      @include onDesktop {

      }

      p:first-of-type {
        margin: 0 0 15px 0;

        @include onTablet {
          margin: 0;
        }

        @include onDesktop {

        }
      }

      p:last-of-type {
        margin: 0 0 55px 0;

        @include onTablet {
          margin: 0 45px 0 0;
        }

        @include onDesktop {

        }
      }
    }

    &__logo-container {
      margin: 0 0 41px 10px;

      @include onTablet {
        padding-left: 74px;
        margin: 0;
      }

      @include onDesktop {
        padding-left: 0;
      }

      .logo {
        width: 188px;
        height: 122px;

        @include onTablet {
        width: 117px;
        height: 76px;
        }

        @include onDesktop {
          width: 188px;
          height: 122px;
        }
      }
    }

    &__container-contactUs {
      margin: 0 0 92px 24px;

      @include onTablet {
        margin: 0;
        order: 2;
      }

      @include onDesktop {

      }
    }

    &__separator {
      display: none;
      color: $light-silver;

      @include onTablet {
        display: inline;
        line-height: 36px;
        font-size: 9px;
      }

      @include onDesktop {
        line-height: 58px;
        font-size: 11px;
      }
    }

    &__paragraph {
      text-align: center;
      font-size: 16px;
      color: $light-silver;

      @include onTablet {
        line-height: 36px;
        font-size: 9px;

        &.--copyright {
          margin: 0;
        }
      }

      @include onDesktop {
        font-size: 11px;
        line-height: 58px;
      }

      &.--copyright {
        margin: 0 0 83px 0;
      }
    }

    &__nav-menu {
      margin: 0 0 36px 24px;

      @include onTablet {
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

        @include onTablet {
          top: -580px;

          height: 580px;
          width: 100%;
        }

        @include onDesktop {

        }
      }
    }

    &__button-contact {
      @include onTablet {
        width: 109px;
        height: 36px;
        font-size: 9px;
      }

      @include onDesktop {
        width: 175px;
        height: 58px;
        font-size: 16px;
      }
    }

    &__link {
      text-decoration: none;
      color: $light-silver;
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
            <ContactUsButton class="footer__button-contact"/>
          </div>

          <p class="footer__paragraph">
            <router-link to="/privacy-policy" class="footer__link">Privacy Policy</router-link>
            &nbsp;|&nbsp;
            <router-link to="/terms-of-services" class="footer__link">Terms of Services</router-link>
          </p>
          <span class="footer__separator">
            &nbsp;|&nbsp;
          </span>

          <p class="footer__paragraph">
            <router-link to="/cookie-policy" class="footer__link">Cookie Policy</router-link>
            &nbsp;|&nbsp;
            <router-link to="/legal-notice" class="footer__link">Legal Notice</router-link>
          </p>
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
