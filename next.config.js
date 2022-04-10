/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['default', 'ru', 'en'],
		defaultLocale: 'default',
		localeDetection: true
	}
	
};

module.exports = nextConfig;
