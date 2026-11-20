// Cloudflare Pages Serverless Function: /api/auth/login

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const password = body ? body.password : '';

    const validPasswords = ['Pkr123', env.ADMIN_PASSWORD].filter(Boolean);

    if (validPasswords.includes(password)) {
      return new Response(
        JSON.stringify({
          success: true,
          token: 'studio-admin-token-2026',
          message: 'Authentication successful',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...CORS_HEADERS,
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Invalid admin password',
      }),
      {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS,
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Auth failed', details: err.message }),
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
