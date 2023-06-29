<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_placeholders.scss';
  .footer {
    .footer__grid {
      display: grid;
      grid-template: repeat(5, 1fr) / 1fr;
      .footer__menu-nav {
        list-style: none;
        @extend %d-f-c;
        flex-direction: column;
        .footer__item {
          margin: 12px 0;
          .footer__link {
            text-decoration: none;
          }
        }
      }
    }
  }
</style>

<template>
  <footer class="footer">
    <div class="footer__grid">
      <Logo/>

      <nav>
        <menu class="footer__menu-nav">
          <li class="footer__item">
              <a href="#" class="footer__link">Home</a>
          </li>
          <li class="footer__item">
              <a href="#" class="footer__link">Mission</a>
          </li>
          <li class="footer__item">
              <a href="#" class="footer__link">Services</a>
          </li>
          <li class="footer__item">
              <a href="#" class="footer__link">Industries&Vertical</a>
          </li>
          <li class="footer__item">
              <a href="#" class="footer__link">Blog</a>
          </li>
        </menu>
      </nav>

      <ContactUsButton/>

      <p>Privacy Policy | Terms of Service</p>

      <p>© 2023 Kleis. All rights reserved.</p>
    </div>
  </footer>
</template>


<script setup>
  import Logo from '@/components/partials/Logo.vue';
  import ContactUsButton from '@/components/partials/ContactUsButton.vue'
</script>
