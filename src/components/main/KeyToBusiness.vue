<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  .key {

    &--wrapper {
      max-width: 1322px;
      padding-left: 24px;
    }

    // width: 342px;

    @include onDesktop {
      width: 1233px;
    }

    &__title {
      color: $dark;
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 44px;

      margin-bottom: 21px;

      @include onDesktop {
        margin-bottom: 28px;
      }
    }

    &__description {
      display: block;
      width: 302px;

      color: $dark;
      font-size: 14px;
    }
  }
</style>

<template>
  <div class="key--wrapper">
    <div class="key">
      <h2 class="key__title">Be the key<br>to your business.</h2>
      <p class="key__description">Interested in learning more about how a private environment and custom trained AI models can fuel your future?<br>Contact us today.</p>
    </div>
  </div>
</template>

<script setup>
</script>
