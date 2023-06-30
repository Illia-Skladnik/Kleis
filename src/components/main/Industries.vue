<!-- eslint-disable vue/multi-word-component-names -->
<style  scoped lang="scss">

  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_placeholders.scss';
  @import '@/assets/styles/mixins';

  .industries {
    overflow: hidden;

    &__wrapper {
      max-width: 1197px;
      min-height: 669px;
      margin: 0 auto;
      @extend %d-f-sb;
      flex-direction: column;
      padding: 108px 0 59px 102px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 100vw;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
        border-radius: 30px;
        box-shadow: -20px 20px 30px #DFE1E4;
        background: $pale-blue;
      }
    }

    &__h2 {
      font-size: 45px;
      margin: 0 0 60px 0;
      position: relative;
      z-index: 2;

      @include onDesktop {
        margin: 0 0 48px 0;
        font-size: 48px;
      }
    }

    &__container {
      margin: 0 0 75px 0;
      height: 235px;
      position: relative;
    }
    
    &__carousel {
      position: absolute;
      display: flex;
      align-items: start;
      top: 0;
      left: 0;
      min-width: 100vw;
    }

    &__button {
      display: none;

      @include onDesktop {
        padding: 16px 54px;
        border-radius: 54px;
        background: $dark-orange;
        color: $white;
        font-weight: 700;
        margin: 0 auto;
        display: block;
        height: min-content;
        position: relative;
        z-index: 2;
      }
    }

    &__item {
      margin: 0 51px 0 0;
      &:last-of-type {margin: 0;}
      max-width: 180px;
      min-width: 180px;

      @include onDesktop {
         margin: 0 63px 0 0;
         max-width: 218px;
         min-width: 218px;
      }
   }
   &__h3 {
      font-size: 26px;
      margin: 0 0 23px 0;

      @include onDesktop {
         font-size: 32px;
         margin: 0 0 29px 0;
      }
   }
   &__paragraph {
      font-size: 14px;

      @include onDesktop {
         font-size: 16px;
      }
   }


    &__arrow-right {
      position: absolute;
      width: 70px;
      right: 44px;
      bottom: 0;

      &--rotate {
        left: 0;
        transform: rotate(180deg);
      }
    }
  }
</style>

<template>
  <div class="industries">
    <div class="industries__wrapper">
      <h2 class="industries__h2">Industries</h2>

      <div class="industries__container">
        <div class="industries__carousel">

          <!-- <CarouselItem
            v-for="item, index in dataForCarousel"
            :item="item"
            :key="index"
          /> -->

          <div class="industries__item" style="{transform: translate(position + 'px', 0, 0)}" >
            <h3 class="industries__h3">Healthcare</h3>
            <p class="industries__paragraph">Optimize patient care, streamline workflows, and improve diagnostics.</p>
          </div>

          <div class="industries__item" style="{transform: translate(position + 'px', 0, 0)}" >
            <h3 class="industries__h3">Education</h3>
            <p class="industries__paragraph">Enhance learning outcomes, automate administrative tasks, and personalize student experiences</p>
          </div>

          <div class="industries__item" style="{transform: translate(position + 'px', 0, 0)}" >
            <h3 class="industries__h3">Legal</h3>
            <p class="industries__paragraph">Automate legal research, contract analysis, and streamline case management</p>
          </div>

          <div class="industries__item" style="{transform: translate(position + 'px', 0, 0)}" >
            <h3 class="industries__h3">Government</h3>
            <p class="industries__paragraph">Drive data-driven policy decisions, enhance citizen services, and improve operational efficiency</p>
          </div>

          <div class="industries__item" :style="{transform: stringPos}" >
            <h3 class="industries__h3">Retail</h3>
            <p class="industries__paragraph">Personalize customer experiences, optimize pricing strategies, and boost sales</p>
          </div>

        </div>
        <img class="industries__arrow-right" :src="arrowRight" alt="" @click="setPosition.plus">
        <img class="industries__arrow-right industries__arrow-right--rotate" :src="arrowRight" alt="" @click="setPosition.minus">
      </div>

      <button class="industries__button">All Industries</button>

    </div>
  </div>
</template>

<script setup>
  // import CarouselItem from '../partials/CarouselItem.vue'
  import arrowRight from '@/assets/svg/arrowRight.svg'
  import { ref } from 'vue'

  // const dataForCarousel = [
  //   {title: 'Healthcare', text: 'Optimize patient care, streamline workflows, and improve diagnostics.'},
  //   {title: 'Education', text: 'Enhance learning outcomes, automate administrative tasks, and personalize student experiences'},
  //   {title: 'Legal', text: 'Automate legal research, contract analysis, and streamline case management'},
  //   {title: 'Government & Public', text: 'Drive data-driven policy decisions, enhance citizen services, and improve operational efficiency'},
  //   {title: 'Retail & Ecommerce', text: 'Personalize customer experiences, optimize pricing strategies, and boost sales'},
  // ]

  let position = 0
  const stringPos = ref('translate(0px, 0, 0)')
  // const stringPos = ref('translate(0, 0, 0)')

  class SetPosition{
    plus(){
      position += 180
      stringPos.value = `translate(${position}px, 0, 0)`
      // position.value += 180
      // console.log(position.value)
    }

    minus(){
      position -= 180
      stringPos.value = `translate(${position}px, 0, 0)`
    }
  }

  const setPosition = new SetPosition()
</script>