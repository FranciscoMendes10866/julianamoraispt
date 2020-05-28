const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s  ',
    title: 'Juliana Morais' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-social-sharing.js', ssr: false },
    { src: '~/plugins/vuelidate.js', ssr: false },
    { src: '~/plugins/i18n.js', ssr: true },
    { src: '~/plugins/v-lazy-image.js', ssr: false }
  ],
  /*
  ** Generate pages
  */
  generate: {
    routes: ['/', '/about', '/services', '/contact', '/en', '/en/about', '/en/services', '/en/contact']
  },
  /*
  ** Router Config
  */
  router: {
    middleware: ['authenticated', 'i18n']
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo'
  ],
  /*
  ** PWA config
  */
  pwa: {
    icon: {
      src: '@/static/icon.png',
      type: 'image/png'
    },
    manifest: {
      name: 'Juliana Morais PT',
      short_name: 'JU',
      description: 'PWA do website da Juliana Morais PT',
      lang: 'pt',
      categories: ['sport', 'training', 'personal training', 'health', 'welfare'],
      orientation: 'portrait-primary',
      start_url: '/login',
      theme_color: 'white'
    },
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'default',
      favicon: true,
      name: 'JU',
      author: 'Francisco Mendes',
      description: 'PWA do website da Juliana Morais PT',
      theme_color: 'white',
      lang: 'pt'
    }
  },
  /*
  ** Apollo config
  */
  apollo: {
    clientConfigs: {
      default: '~/server/apollo.config.js'
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.node = {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      }
    }
  },
  vendor: ['vue-social-sharing']
}
