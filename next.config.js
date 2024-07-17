const {i18n} = require("./next-i18next.config");

module.exports = {
    async headers() {
      return [
        {
        source: '/locales/:path*',
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'noindex'
            }
          ],
        },
        {
        source: '/:path*.(gif|jpg|jpeg|svg|pdf|png|ico|html|glb)',
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'noindex'
            }
          ],
        },
      ]
    },
    i18n
}
