export default defineNuxtConfig({
  css: [
    '@/assets/scss/fonts.scss',
    '@/assets/scss/global.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true }
})
