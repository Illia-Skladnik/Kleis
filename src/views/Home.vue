<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  .home {
    &__request-demo {
      margin: 0 auto;
      margin-top: -135px;
    }
  }
</style>

<template>
  <main class="home">
    <RequestDemoBlock class="home__request-demo"/>
  </main>
</template>

<script setup>
  import RequestDemoBlock from '@/components/main/RequestDemoBlock.vue';
</script>
