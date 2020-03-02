require('dotenv').config()

export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800&display=swap'
      }
    ]
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    '~/plugins/composition-api'
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-fontawesome'
  ],
  env: {
    apiBaseUrl: process.env.API_BASE_URL
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  }
}
