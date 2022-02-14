import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// import { useRegisterSW } from 'virtual:pwa-register/vue'

// const intervalMS = 60 * 60 * 1000

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')

// const updateServiceWorker = useRegisterSW({
//   onRegistered(r) {
//     r && setInterval(() => {
//       r.update()
//     }, intervalMS)
//   }
// })
