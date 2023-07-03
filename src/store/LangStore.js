import { defineStore} from 'pinia'
import {ref, watch} from "vue";

export const useLangStore = defineStore('LangStore', () => {
    const locale = ref('en')
       watch(
           () => locale,
           (state) => {
               if (state.value !== undefined && state.value.length > 0) {
                locale.value.setItem("locale", state.value);
               }
           },
           {deep: true}
       );


    return {
        locale,
    };
});
