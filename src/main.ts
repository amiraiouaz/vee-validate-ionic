import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import {
  defineRule,
  configure
} from 'vee-validate'

import {
  required,
  email
} from '@vee-validate/rules'

import { localize } from '@vee-validate/i18n'

defineRule('required', required)
defineRule('email', email)

configure({
  generateMessage: localize({
    en: {
      messages: {
        required: 'This field is required.',
        email: 'Please enter a valid email.'
      }
    },
    fr: {
      messages: {
        required: 'Ce champ est obligatoire.',
        email: 'Veuillez saisir un e-mail valide.'
      }
    }
  })
})


const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});
