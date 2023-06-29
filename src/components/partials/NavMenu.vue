<style scoped lang="scss">
  .menu_nav {
    list-style: none;
    @extend %d-f-c;
    flex-direction: column;
    .menu_nav__item {
      margin: 12px 0;
      .menu_nav__link {
        text-decoration: none;
        color: $white;
      }
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