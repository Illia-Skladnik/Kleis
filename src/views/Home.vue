<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  .home {
    padding-bottom: 298px;

    &__request-demo {
      margin: -145px auto 86px auto;

      @include onTablet {
        // margin-bottom: 400px;
        margin-top: -59px;
      }

      @include onDesktop {
        margin-bottom: 201px;
        margin-top: -201px;
      }
    }

    &__advantages {
      margin-bottom: 125px;

      @include onDesktop {
        margin-bottom: 210px;
      }
    }

    &__solutions {
      z-index: 1;
    }

    &__solutions-label {
      position: absolute;
      bottom: -555px;
      left: 45%;

      width: 867;
      height: 747;
      z-index: 1;

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
      margin: 0 auto 361px;
      width: 100%;
      max-width: fit-content;

      @include onDesktop {
        margin-bottom: 388px;
      }
    }

    &__page {
      overflow: hidden;
    }

    &__group77 {
      position: absolute;
      width: 723px;
      height: 721px;
      left: -432px;
      bottom: -711px;
      display: none;

      @include onDesktop {
        display: block;
      }
    }

    &__group79 {
      display: none;

      @include onDesktop {
        position: absolute;
        right: 182px;
        bottom: -365px;
        display: block;
      }
    }

    &__industries {
      position: relative;
      margin-bottom: 294px;
    }

    &__key {
      position: relative;
      margin: 0 auto;
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
        <img :src="group77" alt="label" class="home__group77">
        <img :src="group79" alt="label" class="home__group79">
      </div>
      <Industries class="home__industries"/>
      <KeyToBusiness class="home__key"/>
    </div>

  </main>
</template>

<script setup>
  import RequestDemoBlock from '@/components/main/RequestDemoBlock.vue';
  import Advantages from '@/components/main/Advantages.vue';
  import Solutions from '@/components/main/Solutions.vue';
  import Industries from '@/components/main/Industries.vue';
  import KeyToBusiness from '@/components/main/KeyToBusiness.vue';

  const group78Mobile = new URL('@/assets/images/mobile/group92.png', import.meta.url);
  const group78Desktop = new URL('@/assets/images/desktop/group78.png', import.meta.url);
  const group77 = new URL('@/assets/images/desktop/group77.png', import.meta.url);
  const group79 = new URL('@/assets/images/desktop/group79.png', import.meta.url);
</script>
