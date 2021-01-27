module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // publicPath: process.env.VUE_APP_PUBLIC_PATH
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Project-Web-Desa-Client-Side/'
    : '/'
}