// Cloudflare Pages SPA Routing Fallback
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Never intercept API endpoints or static assets with file extensions
  if (
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/assets/') ||
    url.pathname.includes('.')
  ) {
    return context.next();
  }

  // Pass through to static files first
  const response = await context.next();

  // If route is a client-side route (e.g. /works, /about, /admin), fallback to index.html
  if (response.status === 404) {
    return context.env.ASSETS.fetch(
      new Request(new URL('/index.html', context.request.url), context.request)
    );
  }

  return response;
}
