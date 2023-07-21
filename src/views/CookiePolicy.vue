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

    p {
      font-size: 16px;
      margin-bottom: 12px;
    }

    h1, h2, h3 {
      margin-bottom: 29px;
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
      <h1>Cookie Policy</h1>

      <h1>1. Foreword</h1>

      <p>We want to inform you in a clear and transparent manner about how we use cookies when you visit our site. This Cookie Policy should be read together with our Privacy Policy https://glaze.ai/privacy-policy.</p>

      <h1>2. Preamble</h1>

      <p>To enable you to benefit from the services offered by our site (visit it, enhance your user experience on it, customize it), our site uses cookies.</p>
      <p>You can deactivate the cookies you have accepted at any time and free of charge, using the deactivation options offered to you online or in writing.</p>
      <p>This policy is established in application of the following laws and regulations:</p>

      <ul>
        <li>Article 82 of the French Data Protection Act;</li>
        <li>the GDPR (2016/679) and in particular its Article 7 on the methods of collecting consent;</li>
        <li>the CNIL guidelines of 17 September 2020;</li>
        <li>the CNIL recommendations of 17 September 2020.</li>
      </ul>

      <h1>3. Definition</h1>

      <p>
        When you visit our site, information on how your terminal (e.g., computer, tablet, smartphone) browses our site may be recorded in text files called “cookies”, set on your browser. A cookie will be used to recognise your browser for as long as the cookie is valid. A cookie is a file that is activated in write or read mode. On telephone devices, these trackers are device identifiers and advertising identifiers.
      </p>

      <p>There are different types of cookies:</p>

      <ul>
        <li>technical cookies, including session cookies that either disappear as soon as you leave our site or remain permanently;</li>
        <li>functional cookies, which allow you to manage the language or the duration of your consent;</li>
        <li>analytics cookies, which remain on your terminal until their lifetime expires or until you delete them using your browser settings;</li>
        <li>advertising personalisation cookies and cookies for similar operations.</li>
      </ul>

      <p>You are informed that cookies may be placed and read when you visit our site.</p>

      <h1>4. Purposes</h1>

      <h2>4.1 Introduction</h2>

      <p>The purposes of cookies are determined by the nature of the cookies.</p>
      <p>Cookies are used by our site for different purposes. Some cookies require your prior consent; this is the case for:</p>

      <ul>
        <li>cookies that are relating to ad personalisation and similar operations;</li>
        <li>cookies that are not strictly limited to analytics.</li>
      </ul>

      <p>Some cookies, for which your consent is not required, are essential to the use of our site. These are technical cookies or functional cookies; they are used:</p>

      <ul>
        <li>to make your visit easier;</li>
        <li>to prevent malicious software;</li>
        <li>to save your choices regarding cookies(To be completed, where applicable).</li>
      </ul>

      <h2>4.2 Technical and functional cookies</h2>

      <p>These cookies, for which your prior consent is not required, concern the following main functions:</p>

      <ul>
        <li>ensuring the technical management of your session;</li>
        <li>managing languages;</li>
        <li>monitoring performance;</li>
        <li>monitoring security and technical errors;</li>
        <li>improving your user experience;</li>
        <li>ensuring the technical administration of services corresponding to your requests such as your shopping cart;</li>
        <li>authenticating your access to our services;</li>
        <li>administering your performance.</li>
      </ul>

      <h2>4.3 Analytics cookies</h2>

      <p>The purposes that are subject to your consent are the following:</p>

      <ul>
        <li>traffic statistics;</li>
        <li>orientation of audiences according to the pages;</li>
        <li>measure of advertising performance.</li>
      </ul>

      <h2>4.4 Ad personalisation cookies</h2>

      <p>Subject to your prior consent, their purposes include the following:</p>

      <ul>
        <li>orientation of advertising messages;</li>
        <li>typology of your choices in order to send you advertisements corresponding to your expectations;</li>
        <li>definition of segmentations and personalisation profiles;</li>
        <li>geolocation and orientation of advertising according to the associated links.</li>
      </ul>

      <h1>5. Cookies used by our site</h1>

      <p>The cookies used on our site are</p>

      <ul>
        <li>our cookies;</li>
        <li>third party cookies.</li>
      </ul>

      <h2>5.1 Our cookies</h2>

      <p>Our cookies are detailed in the table below:</p>

      <table>
        <tbody>
          <tr>
            <th class="privacy__bold">NO.</th>
            <th class="privacy__bold">COOKIE NAME</th>
            <th class="privacy__bold">CATEGORY</th>
            <th class="privacy__bold">PURPOSE</th>
            <th class="privacy__bold">STORAGE PERIOD</th>
          </tr>
          <tr>
            <th>1</th>
            <th>GZLocale</th>
            <th>Functional</th>
            <th>Used to display the Glaze website in relevant language</th>
            <th>Duration of the session</th>
          </tr>
          <tr>
            <th>2</th>
            <th>_glz_return</th>
            <th>Necessary</th>
            <th>Used to determine if an anonymized visitor has already visited our website</th>
            <th>13 months</th>
          </tr>
          <tr>
            <th>3</th>
            <th>_glz_c_allow</th>
            <th>Necessary</th>
            <th>Used to store cookies consent preferences</th>
            <th>6 months</th>
          </tr>
          <tr>
            <th>4</th>
            <th>Vuex</th>
            <th>Functional</th>
            <th>Used to display the Glaze application and builder according to user preferences. For example, to display the dashboard and builder in a specific language.</th>
            <th>13 months</th>
          </tr>
          <tr>
            <th>5</th>
            <th>rememberME</th>
            <th>Functional</th>
            <th>Some Glaze services use this to enable access to the Glaze application and builder services.</th>
            <th>14 days</th>
          </tr>
          <tr>
            <th>5</th>
            <th>GZAuthToken</th>
            <th>Necessary</th>
            <th>Some Glaze services use this to give Glaze users access to multiple services.</th>
            <th>Duration of the session</th>
          </tr>
        </tbody>
      </table>

      <h2>5.2 Third-party cookies</h2>

      <table>
        <tbody>
          <tr>
            <th class="privacy__bold">NO.</th>
            <th class="privacy__bold">COOKIE NAME</th>
            <th class="privacy__bold">CATEGORY</th>
            <th class="privacy__bold">PURPOSE</th>
            <th class="privacy__bold">STORAGE PERIOD</th>
          </tr>
          <tr>
            <th>1</th>
            <th>axeptio_all_vendors</th>
            <th>Necessary</th>
            <th rowspan="3">Used to store cookies consent preferences according to the different categories of cookies</th>
            <th>6 months</th>
          </tr>
          <tr>
            <th>2</th>
            <th>axeptio_authorized_vendors</th>
            <th>Necessary</th>
            <th>6 months</th>
          </tr>
          <tr>
            <th>3</th>
            <th>axeptio_cookies</th>
            <th>Necessary</th>
            <th>6 months</th>
          </tr>
        </tbody>
      </table>

      <h1>6. Consent</h1>

      <p>When you first visit our site, you are given the choice of accepting or rejecting all our cookies and third party cookies.</p>
      <p>You can also give your consent independently and specifically for each separate purpose using the “customize settings” option.</p>
      <p>You also have the option of leaving the cookie consent banner by clicking “Continue without accepting”. Please note that by continuing browsing the site without clicking on one of the options proposed by the cookie banner, you will be deemed to have expressed a refusal.</p>
      <p>When you accept cookies, a consent cookie will be set on your terminal.</p>
      <p>When you reject cookies because you do not want cookies to be set or read on your terminal, a refusal cookie will be set on your terminal for a period of 6 months, so that we can save the information that you have objected to the use of cookies.</p>
      <p>If you delete this refusal cookie, it will no longer be possible to know that you refused cookies. This is why refusal or consent cookies should remain on your terminal. You can change your choices at any time by accessing the cookie consent module following the steps in the following section 7.</p>

      <h1>7. How to manage cookies?</h1>

      <p>You have several options to manage and modify the use of cookies:</p>

      <ul>
        <li>directly on our site, in the module provided for this purpose, or</li>
        <li>by clicking on our “Cookies” icon, available at any time on all the pages of our site, or</li>
        <li>in your browser settings, or</li>
        <li>on advertising cookie blocking platforms.</li>
      </ul>

      <p>Warning: a cookie can only be blocked by placing a refusal cookie on your terminal. As a result, if you block all the cookies on your terminal or if you change terminals, we will not know that you chose to reject cookies.</p>
      <h2>7.1 Cookie management module</h2>

      <p>his module allows you to choose which cookies you wish to accept and which cookies you wish to reject on our site.</p>
      <p>You can access the module and modify your preferences at any time by clicking on the cookie module icon on any page of our website.</p>

      <h2>7.2 Browser settings</h2>

      <p>You can adjust the settings of your browser so that it systematically accepts or rejects all cookies or only cookies from certain issuers.</p>
      <p>You can also regularly delete cookies from your terminal via your browser.</p>
      <p>Remember to adjust the browser settings on each of your terminal.</p>
      <p>Each browser has its own way of managing cookies and cookies settings. Go to the “Help” menu of each browser to know how to change cookie settings. For example:</p>

      <ul>
        <li>for Internet Explorer™: https://support.microsoft.com/en-US/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d;</li>
        <li>for Safari™: https://support.apple.com/en-gb/guide/safari/sfri11471/mac;</li>
        <li>for Chrome™: https://support.google.com/chrome/answer/95647?hl=en&amp;hlrm=en;</li>
        <li>for Firefox™: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectlocale=en-US&redirectslug=enable-and-disable-cookies-website-preferences;</li>
        <li>for Opera™: https://help.opera.com/en/latest/web-preferences/#cookies.</li>
      </ul>

      <p>Please note, however, that setting your browser to disable cookies may restrict you from accessing certain features, pages, or areas of our site that require the use of cookies and that we will not accept any liability in such case.</p>
      <p>To find out more about how to configure your browser, please visit the website of the Commission nationale de l’informatique et des libertés: https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser.</p>

      <h2>7.3 Third-party cookie opposition modules</h2>

      <p>You can choose to disable some third-party cookies by going directly to the web page of the cookie issuer: For example:</p>

      <ul>
        <li>
          to disable Google Analytics cookies, go to this page: https://tools.google.com/dlpage/gaoptout?hl=en;
        </li>
      </ul>

      <h2>7.4 Advertising cookie blocking platforms</h2>

      <p>Several professional advertising platforms also offer the possibility to reject or accept the cookies used by their member companies. Please note that these centralised mechanisms do not block the display of advertisements on the websites that you visit; they will only block the placing of cookies that allow advertisements to be customised to your interests.</p>
      <p>For example, you can go to www.youronlinechoices.com to prevent these cookies from being placed on your terminal. This website is offered by digital advertising professionals who are members of the European association EDAA (European Digital Advertising Alliance) and is managed in France by the Interactive Advertising Bureau France.</p>
      <p>You can find out which companies are registered on this platform and offer you the possibility of rejecting or accepting the cookies they use for interest-based advertising on your web browser: https://www.youronlinechoices.com/uk/your-ad-choices.</p>
      <p>This European platform is shared by hundreds of Internet advertising professionals and provides a centralised interface allowing you to reject or accept cookies as described above.</p>

      <h2>7.5 Re-Captcha</h2>

      <p>The Google reCAPTCHA solution is used to protect the site against automated or semi-automated software and the risk of intrusion on the site. This is a service to protect form entries on our site.</p>
      <p>This solution makes it possible to distinguish between natural persons and automated software (called bots) by analysing their behaviour on the Internet. This technology is used to protect certain forms on the site from bots that scan the web and send spam or phishing messages.</p>
      <p>This service uses several cookies and sends information to Google to improve its services.</p>
      <p>You can withdraw your consent to the use of these cookies by using the cookie management tool and turning off “Re-captcha”.</p>
      <p>You are invited to visit Google’s cookie pages for information on how Google uses cookies and other trackers:</p>

      <ul>
        <li>
          https://policies.google.com/privacy?hl=en.
        </li>
      </ul>

      <p>In the context of the use of Google’s services, data are transferred to the United States, a country which does not have a level of protection equivalent to that ensured in Europe, for the provision of the service of site analysis and traffic and the fight against automated and semi-automated software (bot).</p>
      <p>The European Commission’s standard contractual clauses have been signed to provide a framework for this data transfer and provide an equivalent level of protection.</p>

      <h1>8. Rights of data subjects</h1>

      <p>The storage period is defined according to the type of cookie. These periods are specified for each cookie or tracker.</p>
      <p>You have the rights to access to and rectification and erasure of your data, a right to data portability and a right to restriction of processing.</p>
      <p>You also have the right to object, on grounds relating to your particular situation, at any time to processing of your personal data which is based on legitimate interests.</p>
      <p>You have the right to give special and general instructions on how your personal data should be stored, erased and shared after your death. You can exercise your right to give special post-mortem instructions by email to the following address: data@glazemaker.co</p>
      <p>For more information, including on how to exercise your rights, please refer to our Privacy Policy (https://glaze.ai/privacy-policy).</p>
      <p>Requests to exercise your rights should be sent to our Data Protection Officer: data@glazemaker.co</p>
      <p>You have the right to lodge a complaint with the Commission Nationale Informatique et Libertés, the competent supervisory authority located at 3, place de Fontenoy 75007 Paris.</p>

      <h1>9. Effective date</h1>
      <p>This policy is effective as of the date it is posted online. The same applies to its modifications.</p>
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
