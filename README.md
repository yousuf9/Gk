# Gopal Krishna — Author of The DCB Success Formula & The TCB Framework

Official author website and interactive framework showcase for **Gopal Krishna**.

---

## Hosting on Your Custom Domain

Two ready-to-deploy export packages are included in `/public/exports/`:

### Option 1: Instant Static Hosting (`gopal-krishna-static-build.zip`) — Recommended for Quickest Setup
Contains the pre-compiled production HTML, CSS, JavaScript, and high-resolution image assets (`dist/`). No Node.js or build step required.

1. **Netlify Drop (Free SSL + Custom Domain)**:
   - Unzip `gopal-krishna-static-build.zip`.
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) and drag-and-drop the unzipped folder.
   - In your Netlify site dashboard, go to **Domain management → Add a domain**, enter your custom domain, and point your domain's DNS (`A` or `CNAME` record) as instructed.
2. **Cloudflare Pages**:
   - Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages → Upload assets**.
   - Upload the unzipped folder and attach your custom domain under **Custom domains**.
3. **cPanel / Hostinger / Traditional Web Hosting**:
   - Open your hosting File Manager and navigate to `public_html/`.
   - Upload and extract `gopal-krishna-static-build.zip` directly inside `public_html/`.

---

### Option 2: Full React + Vite Source Code (`gopal-krishna-source-code.zip`)
Contains the complete TypeScript, React 19, Tailwind CSS v4, and Motion source code for continuous deployment via GitHub, Vercel, or Netlify.

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build production bundle into dist/
npm run build
```

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: `18+` or `20+`
