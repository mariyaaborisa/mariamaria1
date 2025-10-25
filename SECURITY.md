# Security Implementation Guide

This guide explains how to implement security headers and best practices for your portfolio website.

## 🎯 Quick Start

Choose your hosting platform and follow the corresponding section:

1. **Netlify** → Use `_headers` file (already created)
2. **Vercel** → Use `vercel.json` (already created)
3. **CloudFlare Pages** → Use `_worker.js` (already created)
4. **Apache/cPanel** → Use `.htaccess` (already created)
5. **GitHub Pages** → See "GitHub Pages" section below

---

## 📋 Platform-Specific Instructions

### Netlify

✅ **Already configured!** The `_headers` file is in your root directory.

**Deployment steps:**
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty for static site)
3. Set publish directory: `.` (root)
4. Deploy!

The `_headers` file will be automatically detected and applied.

**Testing:**
After deployment, test your headers at: https://securityheaders.com

**Enable HSTS (after confirming HTTPS works):**
Uncomment this line in `_headers`:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

### Vercel

✅ **Already configured!** The `vercel.json` file is in your root directory.

**Deployment steps:**
1. Install Vercel CLI: `npm i -g vercel` (or use GitHub integration)
2. Run: `vercel` from project root
3. Follow prompts to link your project
4. Deploy: `vercel --prod`

Vercel will automatically apply headers from `vercel.json`.

**Alternative: GitHub Integration**
1. Import repository at https://vercel.com/new
2. No build settings needed
3. Deploy automatically on every push

---

### CloudFlare Pages

✅ **Already configured!** The `_worker.js` file is in your root directory.

**Deployment steps:**

**Option 1: Dashboard**
1. Go to CloudFlare Dashboard → Pages
2. Create a new project
3. Connect your Git repository
4. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
5. Deploy

**Option 2: Wrangler CLI**
```bash
npm install -g wrangler
wrangler pages project create mariamaria1
wrangler pages deploy . --project-name=mariamaria1
```

The `_worker.js` file will automatically add security headers to all responses.

**Bonus:** CloudFlare provides excellent DDoS protection and analytics.

---

### Apache / cPanel / Traditional Hosting

✅ **Already configured!** The `.htaccess` file is in your root directory.

**Deployment steps:**
1. Upload all files via FTP/SFTP/cPanel File Manager
2. Ensure `.htaccess` is in the web root (usually `public_html/` or `www/`)
3. Verify Apache has `mod_headers` and `mod_rewrite` enabled

**Check if mod_headers is enabled:**
```bash
apache2 -M | grep headers
# or
httpd -M | grep headers
```

If not enabled, contact your hosting provider or add to Apache config:
```bash
sudo a2enmod headers
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

### GitHub Pages

GitHub Pages has **limited** control over HTTP headers. You have two options:

**Option 1: Use CloudFlare as Proxy (Recommended)**
1. Deploy to GitHub Pages normally
2. Add your custom domain to CloudFlare
3. Use CloudFlare to inject security headers
4. CloudFlare's free plan includes security headers

**Option 2: Accept Limitations**
GitHub Pages automatically provides:
- ✅ HTTPS enforcement
- ✅ Basic security
- ❌ No custom CSP headers
- ❌ No custom security headers

For a portfolio site, this is acceptable but not optimal.

---

## 🔒 Security Headers Explained

### Content-Security-Policy (CSP)
**What it does:** Controls which resources can be loaded on your site.

**Your configuration:**
- Scripts: Only from your domain
- Styles: Your domain + inline styles + Google Fonts
- Fonts: Your domain + Google Fonts CDN
- Images: Your domain + data URIs (for inline images)
- Forms: Disabled (you don't have forms)

**Why it matters:** Prevents XSS attacks and unauthorized resource loading.

---

### X-Frame-Options
**What it does:** Prevents your site from being embedded in `<iframe>` on other sites.

**Your configuration:** `SAMEORIGIN` (only your domain can frame your pages)

**Why it matters:** Prevents clickjacking attacks.

---

### X-Content-Type-Options
**What it does:** Prevents browsers from MIME-sniffing (guessing file types).

**Your configuration:** `nosniff`

**Why it matters:** Stops attackers from disguising malicious files as safe types.

---

### Referrer-Policy
**What it does:** Controls how much referrer information is sent when users click links.

**Your configuration:** `strict-origin-when-cross-origin`

**Why it matters:** Protects user privacy while allowing analytics.

---

### Permissions-Policy
**What it does:** Disables browser features you don't use.

**Your configuration:** Disabled geolocation, camera, microphone, payment, etc.

**Why it matters:** Reduces attack surface and protects user privacy.

---

### Strict-Transport-Security (HSTS)
**What it does:** Forces browsers to only access your site via HTTPS.

**Your configuration:** Currently commented out (enable after confirming HTTPS works)

**Why it matters:** Prevents downgrade attacks and ensures encrypted connections.

**⚠️ IMPORTANT:** Only enable HSTS after confirming:
1. HTTPS is working on your domain
2. All subdomains support HTTPS (if using `includeSubDomains`)
3. You don't plan to remove HTTPS (HSTS lasts for the specified time)

---

## 🔤 Self-Hosting Google Fonts (Optional)

For **maximum security and privacy**, self-host fonts instead of loading from Google.

### Why Self-Host?
- ✅ No requests to Google servers (better privacy)
- ✅ No DNS lookups needed (faster load time)
- ✅ Works offline
- ✅ Complete control over caching
- ✅ No GDPR concerns

### How to Self-Host Fonts

**Step 1: Download fonts**

Visit: https://google-webfonts-helper.herokuapp.com/fonts

Select your fonts:
- **Space Grotesk**: Weights 300, 400, 500, 600, 700
- **IBM Plex Mono**: Weights 400, 500

Download all necessary `.woff2` files (modern browsers only need woff2).

**Step 2: Create fonts directory**
```bash
mkdir -p assets/fonts
```

**Step 3: Move fonts**
```bash
# Example structure:
assets/fonts/
├── space-grotesk-v300.woff2
├── space-grotesk-v400.woff2
├── space-grotesk-v500.woff2
├── space-grotesk-v600.woff2
├── space-grotesk-v700.woff2
├── ibm-plex-mono-v400.woff2
└── ibm-plex-mono-v500.woff2
```

**Step 4: Add @font-face rules**

Create `assets/fonts.css`:

```css
/* Space Grotesk */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('./fonts/space-grotesk-v300.woff2') format('woff2');
}

@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./fonts/space-grotesk-v400.woff2') format('woff2');
}

@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('./fonts/space-grotesk-v500.woff2') format('woff2');
}

@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('./fonts/space-grotesk-v600.woff2') format('woff2');
}

@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('./fonts/space-grotesk-v700.woff2') format('woff2');
}

/* IBM Plex Mono */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./fonts/ibm-plex-mono-v400.woff2') format('woff2');
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('./fonts/ibm-plex-mono-v500.woff2') format('woff2');
}
```

**Step 5: Update HTML files**

Replace these lines in all HTML files:
```html
<!-- OLD: Remove these -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">

<!-- NEW: Add this -->
<link rel="stylesheet" href="assets/fonts.css">
```

**Step 6: Update CSP headers**

After self-hosting fonts, update your security headers to remove Google Fonts:

```
# Before:
Content-Security-Policy: ... font-src 'self' https://fonts.gstatic.com ...

# After:
Content-Security-Policy: ... font-src 'self' ...
```

---

## ✅ Verification Checklist

After deployment, verify everything works:

### 1. Check Security Headers
Visit: https://securityheaders.com
- Enter your domain
- Aim for **A** or **A+** rating

### 2. Check SSL/TLS Configuration
Visit: https://www.ssllabs.com/ssltest/
- Enter your domain
- Aim for **A** or **A+** rating

### 3. Check Content Security Policy
Visit: https://csp-evaluator.withgoogle.com/
- Paste your CSP header
- Verify no critical issues

### 4. Manual Testing
Open your site and check:
- [ ] All pages load correctly
- [ ] Fonts display properly
- [ ] Images load
- [ ] Navigation works
- [ ] No console errors
- [ ] No mixed content warnings

### 5. Browser Developer Tools
Press F12 → Network tab:
- [ ] Verify all resources load from HTTPS
- [ ] Check response headers include security headers
- [ ] Verify no 404 errors

---

## 🚨 Common Issues & Solutions

### Issue: Fonts don't load after self-hosting
**Solution:** Check file paths in CSS. Use browser DevTools → Network tab to see 404 errors.

### Issue: CSP blocking Google Fonts
**Solution:** If still using Google Fonts, ensure CSP includes:
```
font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
```

### Issue: Headers not applied on Netlify
**Solution:** Ensure `_headers` file is in root directory, not in a subdirectory.

### Issue: .htaccess not working
**Solution:**
1. Check if `mod_headers` is enabled
2. Ensure `.htaccess` is in web root
3. Verify Apache is configured to allow `.htaccess` overrides

### Issue: Site broken after enabling HSTS
**Solution:** HSTS is cached by browsers for the specified duration. To clear:
- Chrome: chrome://net-internals/#hsts → Delete domain
- Firefox: Clear site data in Settings

---

## 📊 Performance Impact

Adding security headers has **zero negative impact** on performance:
- Headers add ~500 bytes to each response
- Modern browsers cache these efficiently
- No computational overhead
- Actually **improves** load time by preventing unnecessary resource loading

---

## 🎓 Further Reading

- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [web.dev: Security Headers](https://web.dev/security-headers/)
- [Scott Helme's Security Headers](https://securityheaders.com/)

---

## 📞 Need Help?

If you encounter issues:
1. Check your hosting provider's documentation
2. Verify file paths and configurations
3. Use browser DevTools to inspect headers and errors
4. Test with security header scanners listed above

---

**Last Updated:** 2025-10-25
**Security Rating Target:** A+ on securityheaders.com
**Compatibility:** All modern browsers (Chrome, Firefox, Safari, Edge)
