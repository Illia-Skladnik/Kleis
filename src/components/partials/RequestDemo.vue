<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .request-demo {
    height: 59px;
    width: 210px;
    border: 2px solid $white;
    border-radius: 44px;
    font-weight: 700;
    transition-duration: 200ms;
    color: $white;

    &:hover {
      background-color: $white;
      color: $golden-brown;
    }
  }
</style>

<template>
  <button class="request-demo" :onclick="handleClick">
    Request a demo
  </button>
</template>

<script setup>
  function handleClick(){
    window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' })
  }
</script>