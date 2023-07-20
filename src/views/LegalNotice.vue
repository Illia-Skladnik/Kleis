<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  .privacy {
    padding: 0 20px 75px;

    @include onDesktop {
      padding: 0 101px 135px;
    }

    &__block {
      background-color: $white;
      box-shadow: 0px 0px 24px rgba(11, 33, 61, 0.12);
      border-radius: 35px;
      padding: 65px 24px;
      margin-top: -118px;
      margin-bottom: 130px;
      min-height: 1000px;

      @include onDesktop {
        min-height: 1456px;
      }
    }

    &__key {
      padding-bottom: 278px;
    }

    &__text {
      font-size: 16px;
      margin-bottom: 12px;
      display: block;
    }

    h1 {
      margin-bottom: 29px;
    }

    &__text-title {
      margin: 10px 0;
    }

    ul {
      padding-left: 20px;
      margin-bottom: 10px;
    }
  }
</style>
<!-- #region template -->
<template>
  <div class="privacy">
    <div class="privacy__block">
      <h1>Legal Notice</h1>

      <h2 class="privacy__text-title">1. Editor</h2>

      <p class="privacy__text">In accordance with provisions of Article 6-I 1° of the French Law no. 2004-575 dated 21 June 2004 for confidence in the digital economy, the publisher of the site https://glaze.ai/fr/ is:</p>

      <ul>
        <li>
          GLAZE, a French corporation (société par actions simplifiée), with a share capital of €2,020, registered with the Companies Register of Paris under the number 814 100 657, with headquarters located at 4 place Charles Fillion, 75017 Paris.
        </li>
      </ul>

      <p class="privacy__text">
        For any questions, you can contact us:
      </p>

      <ul>
        <li>Telephonenumber: 09 77 19 50 28</li>
        <li>Email: contact@glazemaker.co</li>
      </ul>

      <p class="privacy__text">The intra-community VAT number is as follows: FR95327733184.</p>

      <h2 class="privacy__text-title">2. Director of publication</h2>

      <p class="privacy__text">The director of publication of the site https://glaze.ai/fr/ is Mr. Gwenaël FLATRES in his capacity as CEO.</p>

      <h2 class="privacy__text-title">3. Hosting</h2>

      <p class="privacy__text">The references of our web host are as follows:</p>

      <ul>
        <li>MICROSOFT FRANCE, a French corporation (société par actions simplifiée), with a share capital of €4240000, registered with the French Companies Register of Paris under the number 327 733 184, with headquarters located at 37/45 quai du Président Roosevelt, 92130, Issy-les-Moulineaux.</li>
        <li>Data hosting location: France</li>
        <li>Telephonenumber: 01 47 36 92 61</li>
      </ul>
    </div>
    <KeyToBusiness class="privacy__key"/>
  </div>
</template>
<!-- #endregion -->
<script setup>
  import KeyToBusiness from '@/components/main/KeyToBusiness.vue';
  import { onMounted } from 'vue';

  onMounted(() => window.scrollTo({ top: 0, behavior: "smooth" }))
</script>
