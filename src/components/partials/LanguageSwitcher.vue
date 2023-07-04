<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .select {
    color: $white;
    background-repeat: no-repeat;
    background-position: right center;
    width: 85px;

    &--modal {
      color: $black;
    }

    &__option {
      color: $black;
      padding: 5px;


      &:checked {

      }
    }
  }
</style>

<template>
  <select
    @change="switchLanguage"
    class="select"
    :class="navBarModal.isActiveModal ? 'select--modal' : ''"
    :style="{ 'background-image': `url(${arrowColor})` }"
  >
    <option
      class="select__option"
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<script setup>
  import dropdownBtnDown from '@/assets/svg/dropdownBtnDown.svg';
  import dropdownBtnDark from '@/assets/svg/arrowDownBlack.svg'
  import { useI18n } from 'vue-i18n'
  import Tr from "@/i18n/translation"
  import { useNavBarModal } from '@/store/NavBarModal';
  import { computed } from 'vue';

  const arrowColor = computed(() => navBarModal.isActiveModal ? dropdownBtnDark : dropdownBtnDown)
  const { t, locale } = useI18n()
  const supportedLocales = Tr.supportedLocales
  const navBarModal = useNavBarModal()

  const switchLanguage = async (event) => {
    const newLocale = event.target.value

    await Tr.switchLanguage(newLocale)
  }
</script>
