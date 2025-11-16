# Deployment Guide for Kamil-Pixel-Portfolio

This guide will help you deploy your portfolio to both Netlify and Vercel.

## Prerequisites
- Your code is already pushed to GitHub at: `https://github.com/Mohd-Kamil/Kamil-Pixel-Portfolio`
- A GitHub account (you already have this)
- Accounts on Netlify and/or Vercel (free accounts work)

---

## 🚀 Deployment on Netlify

### Method 1: Deploy via Netlify Dashboard (Recommended)

1. **Sign up/Login to Netlify**
   - Go to https://www.netlify.com/
   - Sign up or log in (you can use your GitHub account)

2. **Import your repository**
   - Click "Add new site" → "Import an existing project"
   - Click "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select the repository: `Mohd-Kamil/Kamil-Pixel-Portfolio`

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - These should auto-detect from the `netlify.toml` file

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at: `https://random-name.netlify.app`

5. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

---

## ⚡ Deployment on Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com/
   - Sign up or log in (you can use your GitHub account)

2. **Import your repository**
   - Click "Add New..." → "Project"
   - Import the repository: `Mohd-Kamil/Kamil-Pixel-Portfolio`
   - Click "Import"

3. **Configure project settings**
   - Framework Preset: Vite (should auto-detect)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)
   - Install Command: `npm install` (auto-filled)
   - These should auto-detect from the `vercel.json` file

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at: `https://kamil-pixel-portfolio.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## 🔧 Build Configuration

Both platforms will use:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: Auto-detected (should be 18+)

---

## 📝 Important Notes

1. **Environment Variables**: If you need any environment variables, add them in:
   - Netlify: Site settings → Environment variables
   - Vercel: Project Settings → Environment Variables

2. **Automatic Deployments**: Both platforms automatically deploy when you push to:
   - `main` branch (production)
   - Other branches (preview deployments)

3. **Build Time**: First build may take 2-3 minutes. Subsequent builds are usually faster.

4. **File Size**: Make sure your video files (MP4) are optimized. Large files may slow down deployment.

---

## 🐛 Troubleshooting

### Build Fails
- Check the build logs in the dashboard
- Make sure all dependencies are in `package.json`
- Verify Node.js version (should be 18+)

### 404 Errors on Routes
- Both `netlify.toml` and `vercel.json` include redirect rules
- If you still get 404s, check the configuration files

### Assets Not Loading
- Make sure the `base` in `vite.config.js` is set to `'./'` (already configured)
- Check that all assets are in the `public` or `src/assets` folders

---

## 🎉 You're Done!

Once deployed, you'll have:
- **Netlify**: `https://your-site.netlify.app`
- **Vercel**: `https://your-site.vercel.app`

Both platforms offer:
- ✅ Free SSL certificates
- ✅ Custom domains
- ✅ Automatic deployments on git push
- ✅ Preview deployments for pull requests
- ✅ Analytics (on paid plans)

