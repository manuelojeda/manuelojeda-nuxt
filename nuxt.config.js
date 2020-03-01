require('dotenv').config()

export default {
  buildModules: ['@nuxt/typescript-build'],
  plugins: ['~/plugins/composition-api'],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  env: {
    apiBaseUrl: process.env.API_BASE_URL
  }
}
