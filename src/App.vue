<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import url('https://fonts.googleapis.com/css2?family=Monda:wght@400;700&family=Poppins:wght@700&display=swap');
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
  body {overflow: hidden;}
</style>

<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script setup>
  import Header from './layouts/default/Header.vue';
  import Footer from './layouts/default/Footer.vue';
</script>
