import i18next from 'i18next'
import th from './lang/th';
import enUS from './lang/en-us'
import config from '~@/config';

await i18next.init({
  lng: config.lang,
  fallbackLng: 'es-US',
  resources: {
    'th': {
      translation: th
    },
    'en-US': {
      translation: enUS
    }
  }
})

export default i18next;