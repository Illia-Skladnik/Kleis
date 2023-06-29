<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_placeholders.scss';
  .footer {
    background: $dark;
    height: 1052px;
    
    &__grid {
      display: grid;
      grid-template: repeat(5, min-content) / 1fr;
    }
    &__logo-container {margin: 0 0 41px 24px;}
    &__button-contactUs {margin: 0 0 117px 24px;}

    &__paragraph {
      text-align: center;
      margin: 0 0 77px;
      &:last-of-type {margin: 0 0 83px;}
    }
    &__nav-menu {margin: 0 0 36px 24px;}
  }
</style>

<template>
  <footer class="footer">
    <div class="footer__grid">
      <div class="footer__logo-container">
        <Logo/>
      </div>

      <NavMenu class="footer__nav-menu"/>

      <div class="footer__button-contactUs">
        <ContactUsButton/>
      </div>

      <p class="footer__paragraph">Privacy Policy | Terms of Service</p>

      <p class="footer__paragraph">© {{copyright}} Kleis. All rights reserved.</p>
    </div>
  </footer>
</template>


<script setup>
  import { computed } from 'vue';
  import Logo from '@/components/partials/Logo.vue';
  import ContactUsButton from '@/components/partials/ContactUsButton.vue'
  import NavMenu from '@/components/partials/NavMenu.vue'

  const copyright = computed(() => new Date().getFullYear())
</script>
