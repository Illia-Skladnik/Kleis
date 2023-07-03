<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .lang-toggler {
    &__languages {
      display: flex;
      flex-direction: column;
      position: absolute;
      background-color: $white;
    }

    &__curent-lang {
      width: 80px;
      position: relative;
      line-height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__language {
      color: $black;

      font-size: 16px;
      font-style: normal;
      line-height: 62px;
      padding: 0 24px;
      cursor: pointer;

      &--active {
        font-weight: 700;
      }
    }

    &__dark-text {color: $dark-blue;}
  }
</style>

<template>
  <div class="lang-toggler">
    <button @click="activateModal" class="lang-toggler__curent-lang" :class="navBarModal.isActiveModal ? 'lang-toggler__dark-text' : ''">
      {{ currentLang }}
      <img :src="arrowColor" alt="arrow">
    </button>

    <div
      v-if="isActiveModal"
      class="lang-toggler__languages"
    >
      <span
        class="lang-toggler__language"
        @click="deactivateModal(language)"
        v-for="language, index in languages"
        :class="currentLang === language ? 'lang-toggler__language--active' : ''"
        :key="index"
      >
        {{ language }}
      </span>
    </div>
  </div>
</template>

<script setup>
  import { ref, onBeforeUnmount, onMounted, computed } from 'vue';
  import { useNavBarModal } from '@/store/NavBarModal';
  import dropdownBtnDown from '@/assets/svg/dropdownBtnDown.svg';
  import dropdownBtnDark from '@/assets/svg/arrowDownBlack.svg'
  
  const navBarModal = useNavBarModal()
  const arrowColor = computed(() => navBarModal.isActiveModal ? dropdownBtnDark : dropdownBtnDown)

  const arrowDown = new URL('../../assets/svg/arrowDown.svg', import.meta.url)

  const languages = ['English', 'French'];
  const isActiveModal = ref(false);
  const activateModal = () => isActiveModal.value = !isActiveModal.value;
  const deactivateModal = (language) => {
    isActiveModal.value = false
    currentLang.value = language;
  };
  const currentLang = ref(languages[0]);
  const langToggler = ref(null);

  onMounted(() => {
    langToggler.value = document.querySelector('.lang-toggler');
    window.addEventListener('click', handleOutsideClick);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('click', handleOutsideClick);
  });

  function handleOutsideClick(event) {
    if (!langToggler.value.contains(event.target)) {
      isActiveModal.value = false;
    }
  }
</script>
