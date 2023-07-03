<style scoped lang="scss">

   @import '@/assets/styles/mixins';
   .industries__item {
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
   .industries__h3 {
      font-size: 26px;
      margin: 0 0 23px 0;

      @include onDesktop {
         font-size: 32px;
         margin: 0 0 29px 0;
      }
   }
   .industries__paragraph {
      font-size: 14px;

      @include onDesktop {
         font-size: 16px;
      }
   }
</style>

<template>
   <!-- <div class="industries__item" :style="transform: translate(pos, 0, 0);"> -->
   <div class="industries__item" style="{transform: translate(100px, 0, 0)}" >
      <h3 class="industries__h3">{{ item.title }}</h3>
      <p class="industries__paragraph">{{ item.text }}</p>
   </div>
</template>

<script setup>
   // defineProps(['item', 'pos'])
   defineProps(['item'])

   // defineEmits(['pos'])

   // console.log(pos)
</script>