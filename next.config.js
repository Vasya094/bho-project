const nextTranslate = require('next-translate')

module.exports = {
    ...nextTranslate(),
  reactStrictMode: true,
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
    env: {
        DB_LOCAL_URI: '',
        DB_URI: 'mongodb+srv://rinat-amir:123098zxc@cluster0.nwg0x.mongodb.net/bhodb?retryWrites=true&w=majority',

        STRIPE_API_KEY: '',
        STRIPE_SECRET_KEY: '',

        STRIPE_WEBHOOK_SECRET: '',

        CLOUDINARY_CLOUD_NAME: '',
        CLOUDINARY_API_KEY: '',
        CLOUDINARY_API_SECRET: '',

        SMTP_HOST: "",
        SMTP_PORT: "",
        SMTP_USER: "",
        SMTP_PASSWORD: "",
        SMTP_FROM_EMAIL: "",
        SMTP_FROM_NAME: "",

        NEXTAUTH_URL: '',
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
}