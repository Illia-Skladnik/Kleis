<!-- eslint-disable vue/multi-word-component-names -->
<style  scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  .advantages {
    width: 369px;
    height: 1007px;
    margin: 0 auto;

    @include onTablet {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 732px;
      height: 247px;
    }

    @include onDesktop {
      width: 1130px;
      height: 383px;
    }

    &__advantage {
      margin-bottom: 64px;

      @include onTablet {
        margin-bottom: 0;
        width: 234px;
      }

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

          @include onTablet {
            width: 112px;
            height: 102px;
            margin-bottom: 30px;
          }

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

          @include onTablet {
            width: 102px;
            height: 112px;
          }

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

          @include onTablet {
            width: 133px;
            height: 111px;

          }

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

      @include onTablet {
        font-size: 15px;
        line-height: normal;
      }

      @include onDesktop {
        font-size: 23px;
        line-height: 37px;
      }
    }

    &__description {
      color: $dark;
      display: block;
      text-align: center;
      font-size: 16px;
      line-height: 26px;

      @include onTablet {
        font-size: 10px;
        line-height: normal;
      }

      @include onDesktop {
        font-size: 16px;
        line-height: 26px;
      }
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
  const firstAdvantage = new URL('@/assets/images/firstAdvantage.svg', import.meta.url);
  const secondAdvantage = new URL('@/assets/images/secondAdvantage.svg', import.meta.url);
  const thirdAdvantage = new URL('@/assets/images/thirdAdvantage.svg', import.meta.url);
</script>
