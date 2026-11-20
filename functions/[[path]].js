// Cloudflare Pages SPA Routing Fallback
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Route API requests to their dedicated function handlers
  if (url.pathname.startsWith('/api/')) {
    return context.next();
  }

  // Try fetching the static asset
  const response = await context.env.ASSETS.fetch(context.request);

  // If asset not found (e.g. /works, /about, /services, /admin), serve index.html
  if (response.status === 404) {
    return context.env.ASSETS.fetch(
      new Request(new URL('/index.html', context.request.url), context.request)
    );
  }

  return response;
}
