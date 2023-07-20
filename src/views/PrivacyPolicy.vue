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

    &__text-center {
      text-align: center;
      display: block;
    }

    th {
      text-align: left;
      font-weight: 400;

      @include onTablet {
        padding:  0.5rem 1rem;
      }
    }

    &__bold {
      font-weight: 700!important;
      background-color: #f2f2f2;
    }

    &__text-title {
      margin: 10px 0;
    }

    ul {
      padding-left: 20px;
      margin-bottom: 10px;
    }

    table {
      margin-bottom: 10px;
    }
  }
</style>
<!-- #region template -->
<template>
  <div class="privacy">
    <div class="privacy__block">
      <h1>POLICY PRIVACY</h1>

      <p>
        <em>Last update: September 8, 2022</em>
        <br>
        <span class="privacy__text">The web site https://glaze.ai/fr/ («Website »), edited by the company Glaze (hereinafter "Glaze"), is intented to allow in particular:</span>
        <br>
        <span class="privacy__text">• website visitors to learn about the services offered by Glaze.</span>
        <br>
        <span class="privacy__text">In the context of accessing, consulting, browsing and using the Website and the services it offers, you are required to communicate personal data concerning you to Glaze.</span>
        <br>
        <span class="privacy__text">These data are protected by law. For this reason, Glaze, in its capacity as data controller, has implemented appropriate security measures to protect your personal data.</span>
        <br>
        <span class="privacy__text">Thank you for reading this policy, explaining how your personal data is used by Glaze. This policy supplements any document or information notice referring to the policy.</span>
        <br>
        <span class="privacy__text">If necessary, you can ask all your questions directly to Glaze by sending an email to data@glazemaker.co or a letter to the following address</span>
      </p>

      <p>
        <span class="privacy__text-center">Glaze</span>
        <span class="privacy__text-center">4 place Charles Fillion</span>
        <span class="privacy__text-center">75017 Paris</span>
      </p>

      <h2 class="privacy__text-title">1. WHAT PERSONAL DATA MAY BE PROCESSED BY GLAZE?</h2>

      <p class="privacy__text"> All the data that you enter on the Website or when you communicate with Glaze where applicable and which are limited to those strictly necessary for the provision of the services offered on the Website, namely:</p>

      <table>
        <tbody>
          <tr>
            <th class="privacy__bold">Data categories</th>
            <th class="privacy__bold">Data exemples</th>
          </tr>
          <tr>
            <th>Civil status, identity, identification data</th>
            <th>Last name, first name, mobile phone number, e-mail address, postal address</th>
          </tr>
        </tbody>
      </table>

      <span class="privacy__text">In addition, certain data is automatically collected by the Website, namely:</span>

      <table>
        <tbody>
          <tr>
            <th class="privacy__bold">Data categories</th>
            <th class="privacy__bold">Data exemples</th>
            <th class="privacy__bold">Purposes</th>
          </tr>
          <tr>
            <th>Location data</th>
            <th>Location data by geographical area</th>
            <th>These data are only collected and processed with your prior consent.</th>
          </tr>
          <tr>
            <th>Connection and navigation data</th>
            <th>Date and time of connection, IP address, IP address location, newsletter subscription IP, pages visited, browser type, browser language, event logs</th>
            <th>This data is necessary for the proper technical operation of the Site and the services it offers, as well as for measuring the use of the Site.</th>
          </tr>
        </tbody>
      </table>

      <p class="privacy__text">
        Some of this data is mandatory, others optional in order to benefit from all the
        services offered on the Website. The mandatory or optional nature of the personal
        data to be provided is indicated during collection. If you refuse to provide the
        mandatory data, Glaze will not be able to provide you with the services requested
        (such as the creation of your account on the Website), nor to respond to your other
        possible requests.
      </p>

      <h2 class="privacy__text-title">2. WHY GLAZE USES YOUR PERSONAL DATA?</h2>

      <span class="privacy__text">Glaze only processes your personal data for the following reasons:</span>

      <ul>
        <li>the creation of a user account,</li>
        <li>the management and monitoring of the service provided by Glaze</li>
        <li>to assist the enforcement of the use of the service;</li>
        <li>to prevent potential illegal activity;</li>
        <li>to screen for undesirable or abusive activity;</li>
        <li>to create new features, services or content;</li>
        <li>to contact you about your service or account;</li>
        <li>
          to contact for marketing purposes, if you opt in on our registration page. We
          will only do so if you have given us your express permission to
          contact you for this purpose.
        </li>
      </ul>

      <h2 class="privacy__text-title">3. WHO CAN HAVE ACCESS TO YOUR PERSONAL DATA?</h2>

      <span class="privacy__text">
        In the context of accessing, consulting, browsing and using the Website and the services
        offered there, your personal data may be communicated to the following recipients:
      </span>

      <table>
        <tbody>
          <tr>
            <th class="privacy__bold">Recipients</th>
            <th class="privacy__bold">Purposes</th>
          </tr>
          <tr>
            <th>Advertisers</th>
            <th>
              Glaze may aggregate personal information and disclose such information in a
              non-personally identifiable manner to advertisers and other third parties
              for marketing and promotional purposes. However, in these situations, Glaze
              does not disclose to these entities any information that could be used to
              personally identify you without your express consent.
            </th>
          </tr>
          <tr>
            <th>External service provider</th>
            <th>For these third parties to provide you with services that are complementary to your use of the Site or Services.</th>
          </tr>
          <tr>
            <th>Internal service providers</th>
            <th>To facilitate or outsource one or more aspects of Glaze's business, products and services.</th>
          </tr>
        </tbody>
      </table>

      <h2 class="privacy__text-title">4. Are YOUR PERSONAL DATA TRANSFERRED OUTSIDE THE EUROPEAN UNION?</h2>

      <span class="privacy__text">No data collected and processed by Glaze about you is transferred to a country outside the European Union.</span>

      <h2 class="privacy__text-title">5. HOW DOES GLAZE PROTECT YOUR PERSONAL DATA?</h2>

      <p class="privacy__text">
        Glaze has implemented technical and organizational measures to protect your personal data,
        in particular against possible breaches that may accidentally or unlawfully lead to
        destruction, loss, alteration, unauthorized access or disclosure. authorization of your
        personal data. These measures ensure an appropriate level of data security and take
        into account the state of knowledge, the costs of implementation in relation to the
        risks and the nature of the data to be protected.
      </p>
      <p class="privacy__text">
        Glaze also guarantees that the members of its staff and any person required to process
        personal data concerning you comply with the internal rules and procedures relating to
        the processing of personal data and in particular the technical and organizational
        security measures put in place to protect your personal data.
      </p>

      <h2 class="privacy__text-title">6. HOW LONG YOUR PERSONAL DATA ARE RETAINED?</h2>

      <span class="privacy__text">
        In general, your personal data will only be kept for the period necessary to achieve
        the purposes for which this data was collected or to comply with legal or
        regulatory requirements.
      </span>

      <h2 class="privacy__text-title">7. WHAT ARE YOUR RIGHTS OVER YOUR PERSONAL DATA?</h2>

      <p class="privacy__text">
        In accordance with the applicable regulations on the protection of personal data, you have
        the following rights over your personal data:
      </p>

      <ul>
        <li>you can ask to have access to the personal data that Glaze has on you and to obtain a copy of it, including in electronic format;</li>
        <li>you can request the correction, updating and deletion of your personal data, as well as the limitation of their processing;</li>
        <li>ou can communicate to Glaze your "last wishes" regarding your personal data in the event of your death (for example, their deletion or their transmission to any person of your choice).</li>
      </ul>

      <p class="privacy__text">
        In some cases, you must explain to Glaze why you are exercising one of these rights and,
        if necessary, justify your identity.
      </p>

      <p class="privacy__text">
        <strong>For any questions and to exercise your rights, </strong>
        you can contact Glaze directly by sending an email to data@glazemaker.co or a letter to the following address:
      </p>

      <p>
        <span class="privacy__text-center">Glaze</span>
        <span class="privacy__text-center">4 place Charles Fillion</span>
        <span class="privacy__text-center">75017 Paris</span>
      </p>

      <p>
        If necessary, you can file a complaint with the CNIL via its website or by mail:
        3, place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07. This right can be exercised
        at any time free of charge, apart from the costs of the mail if necessary, and any costs
        of assistance or representation if you choose to be assisted in this procedure by a third party.
      </p>

      <h2 class="privacy__text-title">8. WEBSITE BELONGING TO THIRD PARTIES</h2>

      <p class="privacy__text">Links on the Glaze website may direct you to external sites.</p>
      <p class="privacy__text">n this regard, we draw your attention to the fact that the personal data protection policies of these sites may differ from this policy.</p>
      <p class="privacy__text">It is therefore recommended to read the personal data protection policy of each of the sites concerned.</p>
      <p class="privacy__text">In any event, Glaze cannot be held liable in the event that the content of one of the sites contravenes the legal and regulatory provisions in force.</p>

      <h2 class="privacy__text-title">9. UPDATE OF THIS POLICY</h2>

      <p class="privacy__text">
        This policy is subject to change, particularly in the event of changes to the
        services offered by Glaze on the Website. Therefore, we recommend that you
        consult this policy each time you access the Website.
      </p>
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
