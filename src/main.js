/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import i18n from './locales/i18n'

const app = createApp(App)
.use(i18n)
registerPlugins(app)

app.mount('#app')
