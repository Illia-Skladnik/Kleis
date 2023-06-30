<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  .solutions {
    max-width: 1197px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;

    &__container-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 51px 30px 0 24px;
    }

    &__container {
      width: 100%;
      height: 100%;
      // background-color: black;
    }

    &__image {

    }

    &__title {
      color: $white;

      font-size: 45px;
      font-weight: 400;
      line-height: 74px;

      color: #FFF;
      margin-bottom: 44px;
    }

    &__solution-title {
      color: $white;

      color: #F6F6F6;

/* Kleis/H3 */
font-size: 31.99px;
font-family: Monda;
font-style: normal;
font-weight: 400;
line-height: normal;
    }

    &__solution-description {
      color: $white;
    }
  }
</style>

<template>
  <div class="solutions">
    <img :src="background" alt="background" class="solutions__image">
    <div class="solutions__container-wrapper">
      <div class="solutions__container">
        <h2 class="solutions__title">Solutions</h2>
        <div class="solutions__solution">
          <h3 class="solutions__solution-title">Individuals</h3>
          <p class="solutions__solution-description">Embrace a future where AI is personalized just for you. Elevate your individual productivity and decision-making capabilities with a private environment and customised AI solution. Gain advanced automation in your daily tasks, while your sensitive personal data remains secure and protected.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  const background = new URL('@/assets/images/solutionsBackground.png', import.meta.url);
</script>
