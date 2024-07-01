// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/mdc'
  ],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: ''
  },
  runtimeConfig: {
    public: {
      apiBase: import.meta.env.VITE_APP_BASE_URL
    }
  },
  css: ['@/assets/styles/index.scss']
})
