<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .select {
    color: $white;
    &--modal {
      color: $black;
    }

    &__option {
      color: $black;
    }
  }
</style>

<template>
  <select
    @change="switchLanguage"
    class="select"
    :class="navBarModal.isActiveModal ? 'select--modal' : ''"
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

<script>
  import { useI18n } from 'vue-i18n'
  import Tr from "@/i18n/translation"
  import { useNavBarModal } from '@/store/NavBarModal';

  export default {
    setup() {
      const { t, locale } = useI18n()

      const supportedLocales = Tr.supportedLocales
      const navBarModal = useNavBarModal()

      const switchLanguage = async (event) => {
        const newLocale = event.target.value

        await Tr.switchLanguage(newLocale)

      }

      return { t, locale, supportedLocales, switchLanguage, navBarModal }
    }
  }
</script>
