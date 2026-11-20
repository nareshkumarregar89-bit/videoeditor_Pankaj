// Cloudflare Pages Serverless Function: /api/projects/:id

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

// PUT /api/projects/:id — Update single project
export async function onRequestPut(context) {
  const { request, params, env } = context;
  const id = params.id;

  try {
    const authHeader = request.headers.get('Authorization') || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();

    if (!token || (token !== 'studio-admin-token-2026' && !token.startsWith('pankaj_admin_session'))) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }

    if (!env.PORTFOLIO_DB) {
      return new Response(JSON.stringify({ error: 'KV DB not bound' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }

    const updatedData = await request.json();
    const raw = await env.PORTFOLIO_DB.get('projects');
    let projects = raw ? JSON.parse(raw) : [];

    projects = projects.map((p) => (p.id === id ? { ...p, ...updatedData } : p));
    await env.PORTFOLIO_DB.put('projects', JSON.stringify(projects));

    return new Response(
      JSON.stringify({ success: true, message: 'Project updated in KV', id }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }
}

// DELETE /api/projects/:id — Delete project
export async function onRequestDelete(context) {
  const { request, params, env } = context;
  const id = params.id;

  try {
    const authHeader = request.headers.get('Authorization') || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();

    if (!token || (token !== 'studio-admin-token-2026' && !token.startsWith('pankaj_admin_session'))) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }

    if (!env.PORTFOLIO_DB) {
      return new Response(JSON.stringify({ error: 'KV DB not bound' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }

    const raw = await env.PORTFOLIO_DB.get('projects');
    let projects = raw ? JSON.parse(raw) : [];

    projects = projects.filter((p) => p.id !== id);
    await env.PORTFOLIO_DB.put('projects', JSON.stringify(projects));

    return new Response(
      JSON.stringify({ success: true, message: 'Project deleted from KV', id }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }
}
