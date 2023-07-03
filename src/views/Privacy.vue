<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  .privacy {
    padding: 0 20px;

    @include onDesktop {

    }

    &__block {
      background-color: $white;
      box-shadow: 0px 0px 24px rgba(11, 33, 61, 0.12);
      border-radius: 35px;
      padding: 65px 24px;
      margin-top: -118px;
      min-height: 500px;
    }

    &__title {
      margin-bottom: 29px;
    }
  }
</style>

<template>
  <div class="privacy">
    <div class="privacy__block">
      <h1 class="privacy__title">Lorem Ipsum</h1>
      <p class="privacy__description">
        Welcome to our startup, where we are dedicated to empowering you with state-of-the-art AI technology. Our mission is to revolutionize the way you interact with artificial intelligence, putting the power in your hands to create, innovate, and succeed.
        At [Startup Name], we believe that AI should be accessible to everyone. We understand that each organization and individual has unique requirements and challenges, which is why we are committed to providing you with a private AI environment tailored to your specific needs. Our cutting-edge technology allows you to harness the full potential of AI while ensuring the utmost privacy and security.
        Harnessing the power of your private AI environment, you can unlock endless possibilities.
        Whether you are a business seeking to optimize operations, a researcher pushing the boundaries of knowledge, or an individual looking to enhance your daily life,
      </p>
    </div>
  </div>
</template>

<script setup>
</script>
