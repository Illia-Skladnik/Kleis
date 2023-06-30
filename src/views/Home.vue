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

    &__advantages {
      margin-bottom: 125px;

      @include onDesktop {
        margin-bottom: 210px;
      }
    }

    &__solutions {

    }

    &__solutions-label {
      position: absolute;
      bottom: -555px;
      left: 45%;

      width: 867;
      height: 747;

      @include onDesktop {
        width: 723px;
        height: 721px;

        top: 291px;
        left: 945px;
      }

      &--mobile {
        @include onDesktop {
          display: none;
        }
      }

      &--desktop {
        display: none;

        @include onDesktop {
          display: block;
        }
      }
    }

    &__solutions-wrapper {
      position: relative;
      margin: 0 auto;
      width: 100%;
      max-width: fit-content;
    }

    &__page {
      overflow: hidden;
    }
  }
</style>

<template>
  <main class="home">
    <RequestDemoBlock class="home__request-demo"/>
    <Advantages class="home__advantages"/>
    <div class="home__page">
      <div class="home__solutions-wrapper">
        <Solutions class="home__solutions"/>
        <img :src="group78Mobile" alt="label" class="home__solutions-label--mobile home__solutions-label">
        <img :src="group78Desktop" alt="label" class="home__solutions-label--desktop home__solutions-label">
      </div>
      <Industries class="home__industries"/>
    </div>

  </main>
</template>

<script setup>
  import RequestDemoBlock from '@/components/main/RequestDemoBlock.vue';
  import Advantages from '@/components/main/Advantages.vue';
  import Solutions from '@/components/main/Solutions.vue';
  import Industries from '@/components/main/Industries.vue';

  const group78Mobile = new URL('@/assets/images/mobile/group92.png', import.meta.url);
  const group78Desktop = new URL('@/assets/images/desktop/group78.png', import.meta.url);
</script>
