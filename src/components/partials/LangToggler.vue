<style scoped lang="scss">
</style>

<template>
  <select v-model="currentLang">
      <option
        v-for="language, index of languages"
        :key="index"
        :value="language"
      >
        {{ val.title }}
      </option>
  </select>
</template>

<script setup>
  import { ref } from 'vue';

  const languages = ['English', 'French'];
  const currentLang = ref(languages[0]);
</script>
