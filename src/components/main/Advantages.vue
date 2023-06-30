<!-- eslint-disable vue/multi-word-component-names -->
<style  scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  .advantages {
    width: 369px;
    height: 1007px;
    margin: 0 auto;

    @include onDesktop {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 1130px;
      height: 383px;
    }

    &__advantage {
      margin-bottom: 64px;

      @include onDesktop {
        width: 328px;
        margin-bottom: 0;
      }
    }

    &__image {
      display: block;
      margin: 0 auto 21px;

      @include onDesktop {
        margin-bottom: 30px;
      }
    }

    .advantages__advantage {
      &:nth-of-type(1) {
        img {
          height: 139px;
          width: 154px;
          margin-bottom: 45px;

          @include onDesktop {
            height: 158px;
            width: 175px;
          }
        }
      }

      &:nth-of-type(2) {
        img {
          height: 154px;
          width: 139px;

          @include onDesktop {
            width: 158px;
            height: 175px;
          }
        }
      }

      &:nth-of-type(3) {
        img {
          height: 155px;
          width: 182px;

          @include onDesktop {
            width: 208px;
            height: 174px;
          }
        }
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &__title {
      text-align: center;
      margin-bottom: 8px;
      color: $dark;
      font-size: 23px;
      line-height: 37px;

      @include onDesktop {


      }
    }

    &__description {
      color: $dark;
      display: block;
      text-align: center;
      font-size: 16px;
      line-height: 26px;
    }
  }
</style>

<template>
  <div class="advantages">
    <div class="advantages__advantage">
      <img :src="firstAdvantage" alt="image" class="advantages__image advantages__image">
      <h3 class="advantages__title">Optimise Efficiency</h3>
      <span class="advantages__description">Discover the pinnacle of efficiency with a private AI environment and custom trained model. </span>
    </div>
    <div class="advantages__advantage">
      <img :src="secondAdvantage" alt="image" class="advantages__image">
      <h3 class="advantages__title">Bolster Security</h3>
      <span class="advantages__description">Your proprietary data is not just an asset—it's your bedrock. </span>
    </div>
    <div class="advantages__advantage">
      <img :src="thirdAdvantage" alt="image" class="advantages__image">
      <h3 class="advantages__title">Drive Growth</h3>
      <span class="advantages__description">Drive innovation, seize opportunities and propel your business to new heights of success with the power of a private AI environment.</span>
    </div>
  </div>
</template>

<script setup>
  const firstAdvantage = new URL('@/assets/images/firstAdvantage.png', import.meta.url);
  const secondAdvantage = new URL('@/assets/images/secondAdvantage.png', import.meta.url);
  const thirdAdvantage = new URL('@/assets/images/thirdAdvantage.png', import.meta.url);
</script>
