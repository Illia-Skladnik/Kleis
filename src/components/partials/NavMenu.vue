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

      @include onTablet {
        margin: 0 0 0 24px;
        &:last-of-type {
          margin: 0 0 0 24px;
        }
      }
    }

    &__link {
      text-decoration: none;
      color: $light-silver;

      @include onTablet {
        font-size: 9px;
      }

      @include onDesktop {
        font-size: 16px;
      }
    }

    @include onTablet {
      flex-direction: row;
      height: min-content;
      width: min-content;
      margin: 0;
    }

    &__item {
        position: relative;
        width: min-content;

        @include onTablet {
          margin: 0 14px 0 0;

          &:first-of-type {
            margin: 0;
          }

          &:last-of-type {
            margin: 0;
          }
        }

        @include onDesktop {
          margin-right: 24px;
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

    &__dark-text {
      color: $dark-blue;
    }
  }
</style>

<template>
  <nav>
    <menu class="menu_nav">
      <li class="menu_nav__item">
          <button class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Home</button>
      </li>
      <li class="menu_nav__item">
          <button class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Mission</button>
      </li>
      <li class="menu_nav__item">
          <button @click="handleClickindustries('solutions')" class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Services</button>
      </li>
      <li class="menu_nav__item">
          <button @click="handleClickindustries('industries')" class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Industries&Vertical</button>
      </li>
      <li class="menu_nav__item">
          <button class="menu_nav__link" :class="navBarModal.isActiveModal ? 'menu_nav__dark-text' : ''">Blog</button>
      </li>
    </menu>
  </nav>
</template>

<script setup>
  import { useNavBarModal } from '@/store/NavBarModal';

  function handleClickindustries(page) {
    if (navBarModal.isActiveModal) {
      navBarModal.toggleModal();
      document.documentElement.style.overflow = 'visible';
    }


    const targetBlock = document.getElementById(page);
    const targetBlockTop = targetBlock.getBoundingClientRect().top;
    const scrollTop = document.documentElement.scrollTop;
    const targetPosition = targetBlockTop + scrollTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }

  const navBarModal = useNavBarModal()
</script>
