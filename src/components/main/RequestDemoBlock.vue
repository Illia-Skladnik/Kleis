<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';

  .request-demo {
    position: relative;
    width: 358px;

    @include onTablet {
      width: 769px;
    }

    @include onDesktop {
      width: 1233px;
    }

    &__button {
      position: absolute;
      left: 21px;
      top: 323px;
      width: 210px;

      @include onTablet {
        width: 131px;
        height: 36px;
        font-size: 10px;
        top: 231px;
        left: 59px;
      }

      @include onDesktop {
        left: 94px;
        top: 340px;
      }
    }

    &__text {
      position: absolute;
      top: 91px;
      left: 21px;
      color: $light-silver;
      width: 260px;
      font-size: 23px;
      line-height: 38px;
      font-weight: 400;

      &--orange {
        color: $dark-orange;
      }

      @include onTablet {
        font-size: 20px;
        top: 118px;
        left: 61px;
        width: 358px;
        line-height: normal;
      }

      @include onDesktop {
        top: 189px;
        left: 94px;
        width: 573px;
        font-size: 32px;
        line-height: 39px;
      }
    }

    &__image {
      &--mobile {
        @include onTablet {
          display: none;
        }
      }

      &--tablet {
        display: none;

        @include onTablet {
          display: block;
        }

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
  }
</style>

<template>
  <div class="request-demo">
    <img :src="group82" alt="image" class="request-demo__image--mobile"/>
    <img :src="group123" alt="image" class="request-demo__image--tablet"/>
    <img :src="group57" alt="image" class="request-demo__image--desktop"/>
    <RequestDemo class="request-demo__button"/>
    <div class="request-demo__text">
      <span> {{ $t("requestDemo.from") }}</span>
      <span class="request-demo__text--orange">{{ $t("requestDemo.company", { company: "Kleis"}) }}</span>
      <span> {{ $t("requestDemo.revolutionise") }} </span>
    </div>
  </div>
</template>

<script setup>
  import RequestDemo from '@/components/partials/RequestDemo.vue';

  const group82 = new URL('@/assets/images/mobile/group82.png', import.meta.url);
  const group57 = new URL('@/assets/images/desktop/group57.png', import.meta.url);
  const group123 = new URL('@/assets/images/tablet/group123.png', import.meta.url);
</script>
