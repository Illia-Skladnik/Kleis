<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';

  .request-demo {
    position: relative;
    width: 358px;

    @include onDesktop {
      width: 1233px;
    }

    &__button {
      position: absolute;
      left: 21px;
      top: 323px;
      width: 210px;

      @include onDesktop {
        left: 94px;
        top: 340px;
      }
    }

    &__text {
      position: absolute;
      top: 91px;
      left: 21px;
      color: $white;
      width: 260px;
      font-size: 23px;
      line-height: 38px;

      &--orange {
        color: $dark-orange;
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
</script>
