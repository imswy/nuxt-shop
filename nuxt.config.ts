// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    'nuxt-icon',
    'nuxt-swiper'
  ],
  runtimeConfig: {
    public: {
      apiBase: import.meta.env.VITE_APP_BASE_URL
    }
  },
  css: ['@/assets/styles/index.scss']
})
