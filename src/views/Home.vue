<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  .home {
    &__request-demo {
      margin: -135px auto 86px auto;

      @include onDesktop {
        margin-bottom: 201px;
      }
    }
  }
</style>

<template>
  <main class="home">
    <RequestDemoBlock class="home__request-demo"/>
    <Advantages class="home__advantages"/>
    <Solutions class="home__solutions"/>
    <Industries class="home__industries"/>
  </main>
</template>

<script setup>
  import RequestDemoBlock from '@/components/main/RequestDemoBlock.vue';
  import Advantages from '@/components/main/Advantages.vue';
  import Solutions from '@/components/main/Solutions.vue';
  import Industries from '@/components/main/Industries.vue';
</script>
