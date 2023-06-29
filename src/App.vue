<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    resize: none;
    font-family: 'Monda', sans-serif;
    color: $white;
  }
</style>

<template>
  <Header/>
  <router-view />
  <Footer/>
</template>

<script setup>
  import Header from './layouts/default/Header.vue';
  import Footer from './layouts/default/Footer.vue';
</script>
