import {NextResponse} from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const stripDefaultLocale = (str) => {
	return str.replace('/default', '');
};

export function middleware(request) {
	const shouldHandleLocale =
		!PUBLIC_FILE.test(request.nextUrl.pathname) &&
		!request.nextUrl.pathname.includes('/api/') &&
		request.nextUrl.locale === 'default';
	
	return shouldHandleLocale
		? NextResponse.redirect(
			`/ru${stripDefaultLocale(request.nextUrl.pathname)}${
				request.nextUrl.search
			}`,
		)
		: undefined;
}
