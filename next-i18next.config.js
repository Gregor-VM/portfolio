const path = require("path");

module.exports = {
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es',
    },
    localePath: path.resolve('./public/locales')
}
