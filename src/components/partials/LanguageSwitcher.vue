<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';

html {
  // box-sizing: border-box;
  // font-size: 62.5%;

  *,
  *:before,
  *:after {
    // box-sizing: inherit;
  }
}

body {
	// display: flex;
	// justify-content: center;
	// align-items: center;
	// width: 100vw;
	// height: 100vh;
	// background-color: #98DFFD;
}

.dropdown {
	width: 100px;
  font-family: 'Monda', sans-serif;

	&__switch:checked + &__options-filter &__select {
		transform: scaleY(1);
	}

	&__options-filter {
    width: 100%;
    cursor: pointer;
  }

  &__filter {
    position: relative;
    display: flex;
    color: $white;
    font-size: 14px;
		transition: .3s;
    background-repeat: no-repeat;
    background-position: right center;

    &--black {
      color: $black;
    }


  }

  &__select {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 5px;
    overflow: hidden;
    box-shadow: 0 5px 10px 0 rgba(152, 152, 152, 0.6);
		transform: scaleY(0);
		transform-origin: top;
    font-weight: 300;
    transition: .2s ease-in-out;
    width: 200px;
  }

	&__select-option {
    padding: 20px;
    background-color: #fff;
		border-bottom: 1px solid #d6d6d6;
    transition: .3s;
    color: $black;

    &:last-of-type {
      border-bottom: 0;
    }

    &:hover {
      background-color: #f9f9f9;
    }
	}
}

  ul, li {
    list-style-type: none;
  }

  input {
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type=text], input[type=button], input[type=submit] {
      background-color : #D3D3D3;
  }

  :-webkit-direct-focus {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 0px!important;}

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
    outline: none;
    }

    *:focus {
    outline: none;
    }

</style>

<template>
<div class="dropdown">
	<input type="checkbox" class="dropdown__switch" id="filter-switch" hidden />
	<label for="filter-switch" class="dropdown__options-filter">
		<ul
      class="dropdown__filter"
      role="listbox"
      tabindex="-1"
      :style="{
        'background-image': `url(${arrowColor})`
      }"
      :class="navBarModal.isActiveModal ? 'dropdown__filter--black' : ''"
    >
			<li class="dropdown__filter-selected" aria-selected="true">
				{{ t(`locale.${locale}`) }}
			</li>
			<li>
				<ul class="dropdown__select">
					<li
            v-for="sLocale in supportedLocales"
            class="dropdown__select-option"
            role="option"
            :key="`locale-${sLocale}`"
            @click="switchLanguage(sLocale)"
          >
            {{ t(`locale.${sLocale}`) }}
					</li>
				</ul>
			</li>
		</ul>
	</label>
</div>
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

  const switchLanguage = async (language) => {
    const newLocale = language

    await Tr.switchLanguage(newLocale)
  }

const label = document.querySelector('.dropdown__filter-selected')
const options = Array.from(document.querySelectorAll('.dropdown__select-option'))

options.forEach((option) => {
	option.addEventListener('click', () => {
		label.textContent = option.textContent
	})
})

document.addEventListener('click', (e) => {
	const toggle = document.querySelector('.dropdown__switch')
	const element = e.target

	if (element == toggle) return;

	const isDropdownChild = element.closest('.dropdown__filter')

	if (!isDropdownChild) {
		toggle.checked = false
	}
})
</script>
