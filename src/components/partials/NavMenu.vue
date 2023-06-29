<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';

  @import '@/assets/styles/_placeholders.scss';
  @import '@/assets/styles/_mixins.scss';

  .menu_nav {
    list-style: none;
    @extend %d-f-sb;
    flex-direction: column;
    height: 226px;

    .menu_nav__item:last-of-type {
      margin: 0;
    }

    // &__item {
    //   margin: 12px 0;

    //   @include onDesktop {
    //     margin: 0 24px;
    //   }
    // }

    &__link {
      text-decoration: none;
      color: $white;
    }

    @include onDesktop {
      flex-direction: row;
    }
  }
</style>

<template>
  <nav>
    <menu class="menu_nav">
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link">Home</a>
      </li>
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link">Mission</a>
      </li>
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link">Services</a>
      </li>
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link">Industries&Vertical</a>
      </li>
      <li class="menu_nav__item">
          <a href="#" class="menu_nav__link">Blog</a>
      </li>
    </menu>
  </nav>
</template>

<script setup>
</script>
