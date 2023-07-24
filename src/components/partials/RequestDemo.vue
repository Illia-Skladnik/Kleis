<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .request-demo {
    height: 59px;
    width: 210px;
    border: 2px solid $light-silver;
    border-radius: 44px;
    font-weight: 700;
    transition-duration: 200ms;
    color: $light-silver;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: $light-silver;
      color: $golden-brown;
    }
  }
</style>

<template>
  <router-link to="/contacts" class="request-demo">Request a demo</router-link>
</template>

<script setup>

</script>
