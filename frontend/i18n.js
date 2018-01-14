const i18n = require('i18next')
const XHR = require('i18next-xhr-backend')
const LanguageDetector = require('i18next-browser-languagedetector')
const cookie = require('react-cookies')
const debug = false

const options = {
  //order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
  //lookupQuerystring: 'lng',
  //lookupCookie: 'i18n_lang',
  //lookupLocalStorage: 'i18nextLng',
  //caches: ['localStorage', 'cookie'],
  //excludeCacheFor: ['cimode'],
  //fallbackLng: 'en',
  load: 'languageOnly',
  ns: ['common'],
  defaultNS: 'common',
  debug: debug,
  saveMissing: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: (value, format) => {
      if (format === 'uppercase') {
        return value.toUpperCase()
      }
      return value
    }
  }
}

// for browser use xhr backend to load translations and browser lng detector
if (process.browser) {
  i18n
    .use(XHR)
    .use(LanguageDetector)
}

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.init(options)
}

// a simple helper to getInitialProps passed on loaded i18n data
i18n.getInitialProps = (req, namespaces) => {
  if (!namespaces) {
    namespaces = i18n.options.defaultNS
  }

  if (typeof namespaces === 'string') {
    namespaces = [namespaces]
  }

  req.i18n.toJSON = () => null

  const initialI18nStore = {}
  req.i18n.languages.forEach((l) => {
    if (l === req.i18n.language) {
      cookie.save('i18n_lang', l, { path: '/' })

      initialI18nStore[l] = {}
      namespaces.forEach((ns) => {
        console.log(ns)
        initialI18nStore[l][ns] = req.i18n.services.resourceStore.data[l][ns] || {}
      })
    }
  })

  return {
    i18n: req.i18n,
    initialI18nStore,
    initialLanguage: req.i18n.language
  }
}

module.exports = i18n
