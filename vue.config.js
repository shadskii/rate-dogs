module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/rate-dogs/' : '/',
  pwa: {
    name: 'We Rate Dogs',
    themeColor: '#2196f3',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
  },
};

