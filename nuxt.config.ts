// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})
