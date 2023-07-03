<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';

  @import '@/assets/styles/_placeholders.scss';
  @import '@/assets/styles/_mixins.scss';

  .menu_nav {
    list-style: none;
    @extend %d-f-sb;
    flex-direction: column;
    height: 226px;

    .menu_nav__item {
      &:last-of-type {
        margin: 0;
      }

      @include onDesktop {
        margin: 0 0 0 24px;
        &:last-of-type {
          margin: 0 0 0 24px;
        }
      }
    }

    &__link {
      text-decoration: none;
      color: $white;
    }

    @include onDesktop {
      flex-direction: row;
      height: min-content;
      width: min-content;
      margin: 0;

      &__item {
        margin: 0 24px 32px 0;
        position: relative;

        @include onDesktop {
          margin: 0 24px 0 0;

          &:first-of-type {
            margin: 0;
          }
          &:last-of-type {
            margin: 0;
          }
        }

        &:hover::after {
          position: absolute;
          content: "";
          display: block;
          width: 8px;
          height: 3px;
          background-color: $white;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 18%;
        }

      }
    }

    &__dark-text {
      color: $dark-blue;
    }
  }
</style>

<template>
  <nav>
    <menu class="menu_nav">
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Home</a>
      </li>
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Mission</a>
      </li>
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Services</a>
      </li>
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Industries&Vertical</a>
      </li>
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Blog</a>
      </li>
    </menu>
  </nav>
</template>

<script setup>
  import { useNavBarModal } from '@/store/NavBarModal';

  const navBarModal = useNavBarModal()
</script>
