import cookie from 'cookie';

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event:any) {
	return cookie.parse(event.request.headers.get('cookie') || '').session || null;
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({event,resolve}:any) {
	const response = await resolve(event, {
		ssr: !event.url.pathname.startsWith('/blog')
	});
	return response;
}
