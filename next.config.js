/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['ru', 'en'],
		defaultLocale: 'ru',
		localeDetection: false
	},
	trailingSlash: true
};

module.exports = nextConfig;
