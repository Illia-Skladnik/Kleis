import { ref } from "vue";
import { defineStore } from 'pinia'

export const useNavBarModal = defineStore('NavBarModal', () => {
  const isActiveModal = ref(false);
  const toggleModal = () => isActiveModal.value = !isActiveModal.value;
  // const closeModal = () => isActiveModal.value = false;

  return {
    isActiveModal,
    toggleModal,
    // closeModal,
  }
});
