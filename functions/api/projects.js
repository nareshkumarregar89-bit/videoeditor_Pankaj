// Cloudflare Pages Serverless Function: /api/projects

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

// GET /api/projects — Public read from Cloudflare KV
export async function onRequestGet(context) {
  const { env } = context;

  try {
    let projectsData = null;

    if (env.PORTFOLIO_DB) {
      projectsData = await env.PORTFOLIO_DB.get('projects');
    }

    if (!projectsData) {
      return new Response(
        JSON.stringify({ error: 'No projects in database' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
            ...CORS_HEADERS,
          },
        }
      );
    }

    return new Response(projectsData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        ...CORS_HEADERS,
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Database read failed', details: err.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS,
        },
      }
    );
  }
}

// POST /api/projects — Save projects array or add single project (Admin)
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const authHeader = request.headers.get('Authorization') || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();

    if (!token || (token !== 'studio-admin-token-2026' && !token.startsWith('pankaj_admin_session'))) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized: Admin authentication required' }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            ...CORS_HEADERS,
          },
        }
      );
    }

    if (!env.PORTFOLIO_DB) {
      return new Response(
        JSON.stringify({ error: 'KV Database binding PORTFOLIO_DB not found' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...CORS_HEADERS,
          },
        }
      );
    }

    const payload = await request.json();

    // Fetch existing projects
    let currentProjects = [];
    const raw = await env.PORTFOLIO_DB.get('projects');
    if (raw) {
      try {
        currentProjects = JSON.parse(raw);
      } catch (e) {}
    }

    let updatedProjects = [];

    if (Array.isArray(payload)) {
      // Full array replacement
      updatedProjects = payload;
    } else if (payload && Array.isArray(payload.projects)) {
      updatedProjects = payload.projects;
    } else if (payload && payload.id) {
      // Single project add / update
      const existingIdx = currentProjects.findIndex((p) => p.id === payload.id);
      if (existingIdx >= 0) {
        currentProjects[existingIdx] = { ...currentProjects[existingIdx], ...payload };
        updatedProjects = currentProjects;
      } else {
        updatedProjects = [payload, ...currentProjects];
      }
    } else {
      return new Response(
        JSON.stringify({ error: 'Invalid payload: array or project object expected' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...CORS_HEADERS,
          },
        }
      );
    }

    // Save to Cloudflare KV
    await env.PORTFOLIO_DB.put('projects', JSON.stringify(updatedProjects));

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Saved to Cloudflare KV Database',
        count: updatedProjects.length,
        projects: updatedProjects,
        updatedAt: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS,
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Database write failed', details: err.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS,
        },
      }
    );
  }
}
