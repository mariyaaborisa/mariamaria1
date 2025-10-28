// CloudFlare Pages Worker - Security Headers Configuration
// This worker adds security headers to all responses
// Deploy via CloudFlare Pages dashboard or wrangler CLI

export async function onRequest(context) {
  const response = await context.next();
  const newResponse = new Response(response.body, response);

  // Core security headers
  newResponse.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://calendar.google.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://calendar.google.com; script-src 'self' https://calendar.google.com; connect-src 'self' https://calendar.google.com; frame-src https://calendar.google.com; frame-ancestors 'self'; base-uri 'self'; form-action 'none'"
  );

  newResponse.headers.set('X-Frame-Options', 'SAMEORIGIN');
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newResponse.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
  );

  // HSTS - Uncomment after confirming HTTPS works
  // newResponse.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // Cache control based on content type
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  if (pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
    newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.endsWith('.html') || pathname === '/') {
    newResponse.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  } else if (pathname.endsWith('.pdf')) {
    newResponse.headers.set('Content-Security-Policy', "default-src 'none'; style-src 'unsafe-inline'; sandbox");
    newResponse.headers.set('Cache-Control', 'public, max-age=86400');
  }

  return newResponse;
}
