<style scoped lang="scss">
  .info {
    position: relative;

    &__label {
      width: 912px;
      height: 721px;
      bottom: 588px;
    }

    &__msg-sign {
      position: absolute;
      top: 39px;
      left: 39px;
    }
  }
</style>

<template>
  <div class="info">
    <img class="info__label" :src="label" alt="label">
    <img :src="messageSign" alt="message" class="info__msg-sign">
    <link rel="info@kleis.com" href="info@kleis.com">
  </div>
</template>

<script setup>
  import messageSign from '@/assets/svg/messageSign.svg'

  const label = new URL('@/assets/images/vector2.png', import.meta.url);
</script>
