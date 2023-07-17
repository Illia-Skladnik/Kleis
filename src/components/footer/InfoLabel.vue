<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
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

    &__link {
      position: absolute;
      top: 85px;
      left: 39px;

      color: $dark-blue;
      font-size: 33px;
      font-family: 'Monda', sans-serif;
      font-style: normal;
      font-weight: 700;
      text-decoration-line: underline;
    }
  }
</style>

<template>
  <div class="info" id="info">
    <img class="info__label" :src="label" alt="label">
    <img :src="messageSign" alt="message" class="info__msg-sign">
    <!-- <router-link to="/privacy" class="info__link">info@kleis.com</router-link> -->
    <button @click="sendEmail" class="info__link">info@kleis.com</button>
  </div>
</template>

<script setup>
  import messageSign from '@/assets/svg/messageSign.svg'

  const label = new URL('@/assets/images/vector2.png', import.meta.url);

  function sendEmail() {
    const emailAddress = 'info@kleis.com';
    const emailSubject = '';
    const emailBody = '';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
  }
</script>
