<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';

  .solutions {
    max-width: 1197px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;

    @include onTablet {
      margin-right: -33px;
    }

    @include onDesktop {
      margin: 0;
    }

    &__container-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 51px 30px 0 24px;

      @include onTablet {
        padding: 50px 130px 0 32px;
      }

      @include onDesktop {
        padding: 74px 209px 0 46px;
      }
    }

    &__container {
      width: 100%;
      height: 100%;

      .solutions__solution-wrapper {
        &:nth-of-type(2) {
          .solutions__solution {
            border-top: 1px solid $goldenrod;
            border-bottom: 1px solid $goldenrod;
            padding: 30px 0;
            margin: 41px 0 30px;

            @include onTablet {
              margin: 20px 0;
            }
          }

          .solutions__dots-block {
            padding-top: 99px;
          }
        }
      }
    }

    &__solution {
      width: 100%;
      cursor: pointer;
    }

    &__solution-wrapper {
      @include onTablet {
        display: flex;
      }
    }

    &__image {
      @include onTablet {
        width: 837px;
        height: 676px;
      }

      @include onDesktop {
        width: auto;
        height: auto;
      }
    }

    &__title {
      color: $white;

      font-size: 45px;
      font-weight: 400;
      line-height: 74px;

      color: $light-grey;
      margin-bottom: 44px;

      @include onTablet {
        padding-left: 97px;
        font-size: 31px;
        margin-bottom: 34px;
      }

      @include onDesktop {
        font-size: 45px;
        padding-left: 94px;
        margin-bottom: 49px;
      }
    }

    &__solution-title {
      color: $light-grey;
      font-size: 32px;

      font-weight: 400;
      line-height: normal;
      margin-bottom: 21px;

      @include onTablet {
        margin-bottom: 3px;
        font-size: 22px;
      }

      @include onDesktop {
        margin-bottom: 4px;
        font-size: 32px;
      }
    }

    &__solution-description {
      color: $light-silver;
      max-width: 400px;

      @include onTablet {
        max-width: 408px;
        font-size: 11px;
      }

      @include onDesktop {
        max-width: 600px;
        font-size: 16px;
      }
    }

    &__solution-top-item {
      display: flex;
      justify-content: space-between;
    }

    &__dot {
      @include onTablet {
        display: none;
      }
    }

    &__dots-block {
      display: none;

      @include onTablet {
        width: 94px;
        height: 52px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding-right: 35px;
        gap: 7px;
      }
    }

    &__dot-desktop {
      height: 16px;
      width: 16px;
    }
  }
</style>

<template>
  <div class="solutions" id="solutions">
    <img :src="background" alt="background" class="solutions__image">
    <div class="solutions__container-wrapper">
      <div class="solutions__container">
        <h2 class="solutions__title">Solutions</h2>

        <div class="solutions__solution-wrapper" @click="toggleDots('first')">
          <div class="solutions__dots-block">
            <img v-if="dots.first" :src="dotActive" alt="dot" class="solutions__dot-desktop">
            <img v-else :src="dotInactive" alt="dot" class="solutions__dot-desktop">
          </div>

          <div class="solutions__solution">
            <div class="solutions__solution-top-item">
              <h3 class="solutions__solution-title">Individuals</h3>
              <img v-if="dots.first" :src="dotActive" alt="dot" class="solutions__dot">
              <img v-else :src="dotInactive" alt="dot" class="solutions__dot">
            </div>
            <p v-if="dots.first" class="solutions__solution-description">Embrace a future where <strong>AI is personalized just for you.</strong> Elevate your individual productivity and decision-making capabilities with a private environment and customised AI solution. Gain advanced automation in your daily tasks, while your sensitive personal data remains secure and protected.</p>
          </div>
        </div>

        <div class="solutions__solution-wrapper" @click="toggleDots('second')">
          <div class="solutions__dots-block">
            <img v-if="dots.second" :src="dotActive" alt="dot" class="solutions__dot-desktop">
            <img v-else :src="dotInactive" alt="dot" class="solutions__dot-desktop">
            <img v-if="dots.second" :src="dotActive" alt="dot" class="solutions__dot-desktop">
            <img v-else :src="dotInactive" alt="dot" class="solutions__dot-desktop">
          </div>

          <div class="solutions__solution">
            <div class="solutions__solution-top-item">
              <h3 class="solutions__solution-title">Small Business</h3>
              <img v-if="dots.second" :src="dotActive" alt="dot" class="solutions__dot">
              <img v-else :src="dotInactive" alt="dot" class="solutions__dot">
            </div>
            <p v-if="dots.second" class="solutions__solution-description">Punch above your weight by achieving greater efficiency and competitive edge with a private AI environment and customised model in tune with your business operations, automate processes and free your team for higher-value work and gain a competitive edge.</p>
          </div>
        </div>

        <div class="solutions__solution-wrapper" @click="toggleDots('third')">
          <div class="solutions__dots-block">
            <img v-if="dots.third" :src="dotActive" alt="dot" class="solutions__dot-desktop">
            <img v-else :src="dotInactive" alt="dot" class="solutions__dot-desktop">

            <img v-if="dots.third" :src="dotActive" alt="dot" class="solutions__dot-desktop">
            <img v-else :src="dotInactive" alt="dot" class="solutions__dot-desktop">

            <img v-if="dots.third" :src="dotActive" alt="dot" class="solutions__dot-desktop">
            <img v-else :src="dotInactive" alt="dot" class="solutions__dot-desktop">
          </div>

          <div class="solutions__solution">
            <div class="solutions__solution-top-item">
              <h3 class="solutions__solution-title">Enterprise</h3>
              <img v-if="dots.third" :src="dotActive" alt="dot" class="solutions__dot">
              <img v-else :src="dotInactive" alt="dot" class="solutions__dot">
            </div>
            <p v-if="dots.third" class="solutions__solution-description">Gain unprecedented strategic advantage in today's digital landscape, with a highly customised AI solution that scales with your business, ensuring operational efficiency across the board. Your sensitive enterprise data remains safeguarded, helping you meet industry-specific regulations and uphold data privacy policies. Harness the power of AI to drive innovation, inform decision-making, and propel your enterprise towards new frontiers of success.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup>
  import { ref } from 'vue';

  const dots = ref({
    first: true,
    second: false,
    third: false,
  });

  const toggleDots = (num) => Object.keys(dots.value).forEach(dot =>
    num !== dot
      ? dots.value[dot] = false
      : dots.value[num] = !dots.value[num]
  );

  const background = new URL('@/assets/images/solutionsBackground.svg', import.meta.url);
  const dotActive = new URL('@/assets/svg/dotActive.svg', import.meta.url);
  const dotInactive = new URL('@/assets/svg/dotInactive.svg', import.meta.url);
</script>
