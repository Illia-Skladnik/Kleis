<template>
  <Header/>
  <router-view />
  <Footer/>
</template>

<script setup>
  import Header from './layouts/default/Header.vue';
  import Footer from './layouts/default/Footer.vue';
</script>
