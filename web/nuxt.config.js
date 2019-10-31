export default {
  mode: 'universal',
  layoutTransition: 'layout',
  pageTransition: 'fade',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'}
    ]
  },
  loading: {color: '#fff'},
  css: [
    '~/css/global.css'
  ],
  plugins: [
    '~/plugins/timeago',
    '~/plugins/axios'
  ],
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],
  axios: {
    port: 8000,
    prefix: '/api'
  },
  build: {
    extend (config, ctx) {
    }
  },
  auth: {
    strategies: {
      redirect: {
        callback: '/callback'
      },
      local: {
        endpoints: {
          login: {url: 'login', method: 'post', propertyName: 'token'},
          logout: {url: 'logout', method: 'post'},
          user: {url: 'me', method: 'get', propertyName: ''}
        }
      }
    }
  }
}
