<!-- eslint-disable vue/multi-word-component-names -->
<style  scoped lang="scss">

  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_placeholders.scss';
  @import '@/assets/styles/mixins';

  .industries {
    &__wrapper {
      max-width: 1197px;
      min-height: 669px;
      margin: 0 auto;
      @extend %d-f-sb;
      flex-direction: column;

      padding: 108px 0 59px 0;
      position: relative;

      @include onTablet {
        padding: 108px 0 59px 102px;
        &::before {
          content: '';
          position: absolute;
          width: 100vw;
          height: 100%;
          left: 30px;
          top: 0;
          z-index: 0;
          border-radius: 30px 0 0 30px;
          box-shadow: -15px 15px 30px rgba(#111, .2);
          background: $pale-blue;
        }
      }

      @include onDesktop {
        left: 0;
      }
    }

    &__h2 {
      font-size: 45px;
      margin: 0 0 60px 0;
      position: relative;
      z-index: 2;
      font-weight: 400;
      padding-left: 24px;

      @include onDesktop {
        padding-left: 0;
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
      // overflow: hidden;

      @include onTablet {
        overflow: hidden;
      }
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
      position: relative;
      transition: .3s;

      @include onDesktop {
         margin: 0 63px 0 0;
         max-width: 218px;
         min-width: 218px;
      }

      @media screen and (max-width: 1700px) and (min-width: 1440px) {
        margin: 0 51px 0 0;
        max-width: 200px;
        min-width: 200px;
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
    &__arrow {
      position: absolute;
      width: 70px;
      right: 44px;
      bottom: 0;

      &--rotate {
        right: 150px;
        transform: rotate(180deg);
      }

      &--disabled {
        opacity: .5;
        pointer-events: none;

        width: 33px;
        width: 36px;
        height: 23px;
        object-fit: cover;
        object-position: right;
      }

      &--last {
        right: 78px;
      }

      @include onDesktop {
        display: none;
      }
    }
  }
</style>

<template>
  <div class="industries" id="industries">
    <div class="industries__wrapper">
      <h2 class="industries__h2">Industries</h2>

      <div class="industries__container">
        <div class="industries__carousel">
          <CarouselItem
            v-for="item, index in dataForCarousel"
            :item="item"
            :key="index"
          />

        </div>
        <img ref="arrowNext" class="industries__arrow" :src="arrowRight" alt="" @click="setPosition.minus">
        <img class="industries__arrow industries__arrow--rotate industries__arrow--disabled"
        ref="arrowPrev" :src="arrowRight" alt="" @click="setPosition.plus">
      </div>

      <button class="industries__button">All Industries</button>

    </div>
  </div>
</template>

<script setup>
  import CarouselItem from '../partials/CarouselItem.vue'
  import arrowRight from '@/assets/svg/arrowRight.svg'
  import { ref } from 'vue';

  const dataForCarousel = [
    {title: 'Healthcare', text: 'Optimize patient care, streamline workflows, and improve diagnostics.'},
    {title: 'Education', text: 'Enhance learning outcomes, automate administrative tasks, and personalize student experiences'},
    {title: 'Legal', text: 'Automate legal research, contract analysis, and streamline case management'},
    {title: 'Government & Public', text: 'Drive data-driven policy decisions, enhance citizen services, and improve operational efficiency'},
    {title: 'Retail & Ecommerce', text: 'Personalize customer experiences, optimize pricing strategies, and boost sales'},
  ]

  const arrowNext = ref(null)
  const arrowPrev = ref(null)

  window.onload = () => setPosition.jobWithDOM()

  class SetPosition {
    position = 0
    idx = 0
    step = 180 + 39

    plus(){
      if(this.idx - 1 >= 0){
        this.idx -= 1
        this.position += this.step
        this.jobWithDOM()
      }
    }

    minus(){
      if(this.idx + 1 < dataForCarousel.length) {
        this.idx += 1
        this.position -= this.step
        this.jobWithDOM()
      }
    }

    jobWithDOM() {
      const items = document.querySelectorAll('.industries__item')
      items.forEach(item => item.setAttribute('style', `left: ${this.position}px;`))

      if (this.idx > 0 && this.idx < dataForCarousel.length - 1) {
        arrowNext.value.classList.remove('industries__arrow--disabled')
        arrowPrev.value.classList.remove('industries__arrow--disabled')
        arrowNext.value.classList.remove('industries__arrow--last')
      }
      else if (this.idx === 0) arrowPrev.value.classList.add('industries__arrow--disabled')
      else {
        arrowNext.value.classList.add('industries__arrow--disabled')
        arrowNext.value.classList.add('industries__arrow--last')
      }
    }
  }


  const setPosition = new SetPosition();
</script>
