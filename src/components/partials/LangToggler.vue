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
      <div
        class="lang-toggler__language"
        @click="deactivateModal(language)"
        v-for="language, index in languages"
        :class="currentLang === language ? 'lang-toggler__language--active' : ''"
        :key="index"
      >
        <span @click="switchLang">{{ language }}</span>

      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onBeforeUnmount, onMounted, computed } from 'vue';
  import dropdownBtnDown from '@/assets/svg/dropdownBtnDown.svg';
  import dropdownBtnDark from '@/assets/svg/arrowDownBlack.svg'
  import { useNavBarModal } from '@/store/NavBarModal';

  const navBarModal = useNavBarModal()
  const arrowColor = computed(() => navBarModal.isActiveModal ? dropdownBtnDark : dropdownBtnDown)

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

<!-- <script>
  import { useI18n } from 'vue-i18n'
  import Tr from "@/i18n/translation"

  export default {
    setup() {
      const { t, locale } = useI18n()

      const supportedLocales = Tr.supportedLocales

      const switchLanguage = async (event) => {
        const newLocale = event.target.value

        await Tr.switchLanguage(newLocale)

      }

      return { t, locale, supportedLocales, switchLanguage }
    }
  }
</script> -->
