<style  scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .discover-solutions {
    height: 58px;
    width: 216px;
    background-color: $dark-orange;
    border-radius: 44px;

    font-size: 16px;
    display: block;
    line-height: 58px;
    margin: 0 auto;

    font-weight: 700;
  }
</style>

<template>
  <button class="discover-solutions" :onclick="handleClick">
    Discover Solutions
  </button>
</template>


<script setup>
  function handleClick() {
    const featuresHeight = document.querySelector('.advantages').clientHeight
    const headerHeight = document.querySelector('header').clientHeight
    const requestDemoHeight = document.querySelector('.home__request-demo').clientHeight
    const distance = requestDemoHeight + headerHeight - featuresHeight
    window.scrollTo({ top: distance, behavior: 'smooth' })
  }
</script>
