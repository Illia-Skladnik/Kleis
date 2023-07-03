<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

  .header {
    height: 844px;
    position: absolute;
    width: 100%;
    padding-top: 273px;

    @include onDesktop {
      height: 927px;
      padding-top: 288px;
    }

    &__background {
      object-fit: cover;
      position: absolute;
    }

    &__wrapper {
      width: 100%;
      height: 844px;
      overflow: hidden;
      position: relative;

      display: flex;
      justify-content: center;
    }

    &__center-block {
      margin: 0 auto;
      width: 304px;
      height: 334px;
      position: relative;
      

      @include onDesktop {
        width: 817px;
        height: 334px;
      }
    }

    &__discover-solutions {
      margin: 0 auto;
    }

    &__title {
      color: $white;
      text-align: center;
      font-size: 31px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px;
      margin-bottom: 20px;

      @include onDesktop {
        font-size: 64px;
        line-height: 74px;
        width: 750px;
        margin: 0 auto 30px;
      }
    }

    &__subtitle {
      color: $white;
      text-align: center;
      height: 40px;

      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 79px;

      @include onDesktop {
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        font-size: 16px;
      }
    }

    &__buttons-wrapper {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;

      @include onDesktop {
        width: 456px;
      }
    }

    &__request-demo {
      margin-right: 30px;
      display: none;

      @include onDesktop {
        display: block;
      };
    }

    &__navbar {
      position: fixed;
      z-index: 3;
    }

    &__privacy-block {
      margin: 0 auto;
      width: 350px;

      @include onDesktop {
        padding-left: 100px;
        width: 100%;
      }
    }

    &__privacy-block-title {
      font-size: 64px;
      margin-bottom: 30px;
      font-weight: 400;
    }

    &__privacy-block-description {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }

</style>

<template>
  <div class="header__wrapper">
    <NavBar class="header__navbar"/>
    <img :src="headerBackground" alt="background" class="header__background">
    <header class="header">
      <div class="header__center-block" v-if="path === '/'">
        <h1 class="header__title">
          Empowering you with State of the Art AI
        </h1>

        <h3 class="header__subtitle">
          Harness the Power of Your Private AI Environment & Custom Trained AI Model for Your Needs.
        </h3>

        <div class="header__buttons-wrapper">
          <RequestDemo class="header__request-demo"/>
          <DiscoverSolutions class="header__discover-solutions"/>
        </div>
      </div>

      <div class="header__privacy-block" v-if="path === '/privacy'">
        <h1 class="header__privacy-block-title">Legal</h1>
        <span class="header__privacy-block-description">And Privacy policy</span>
      </div>
    </header>
  </div>

</template>


<script setup>
  import DiscoverSolutions from '@/components/partials/DiscoverSolutions.vue';
  import RequestDemo from '@/components/partials/RequestDemo.vue';
  import NavBar from './NavBar.vue';
  import {useRoute} from 'vue-router'
  import {computed} from 'vue'

  const headerBackground = new URL('@/assets/images/wide/bg_desktop.png', import.meta.url);
  const route = useRoute();
  const path = computed(() => route.path);
</script>
