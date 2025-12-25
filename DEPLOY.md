# 🚀 Render Deployment Guide

## Quick Deploy to Render

### Method 1: One-Click Deploy (Recommended)

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository: `https://github.com/younuskamal/cv`
4. Configure settings:
   - **Name**: `younis-cv` (or any name you prefer)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click **"Create Static Site"**
6. Wait for deployment (usually 2-3 minutes)
7. Your site will be live at: `https://younis-cv.onrender.com`

### Method 2: Using render.yaml (Auto-Config)

Render will automatically detect the `render.yaml` file in your repository and configure everything for you.

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Blueprint"**
3. Select your repository
4. Render reads `render.yaml` and sets up automatically
5. Click **"Apply"**

---

## ⚙️ Configuration Details

### Build Settings
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18+ (auto-detected from package.json)

### Environment Variables
No environment variables required for this static site.

### Custom Domain (Optional)
1. Go to **Settings** → **Custom Domain**
2. Add your domain (e.g., `cv.youniskamal.com`)
3. Update DNS records as instructed by Render

---

## 🔄 Automatic Deployments

Every time you push to `main` branch, Render automatically:
1. Pulls latest code
2. Runs build
3. Deploys to production

To disable auto-deploy:
- Go to **Settings** → **Auto-Deploy** → Toggle OFF

---

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure `package.json` has correct dependencies
- Try building locally: `npm run build`

### Blank Page After Deploy
- Check if `dist` folder was created
- Verify `index.html` exists in `dist`
- Check browser console for errors

### 404 on Refresh
- Ensure `routes` in `render.yaml` redirect to `/index.html`
- This is already configured correctly

---

## 📊 Performance Tips

### Caching
Headers in `render.yaml` enable:
- **1 year cache** for static assets
- **Security headers** (X-Frame-Options, X-Content-Type-Options)

### Monitoring
- **Render Dashboard** shows:
  - Deploy status
  - Build logs
  - Traffic analytics

---

## 🔗 Useful Links

- [Render Dashboard](https://dashboard.render.com/)
- [Render Docs - Static Sites](https://render.com/docs/static-sites)
- [GitHub Repository](https://github.com/younuskamal/cv)

---

## ✅ Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All languages work (EN/AR/TR/KU)
- [ ] Dark mode toggles correctly
- [ ] PDF download works
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] Social links work

---

**Estimated Deploy Time**: 2-3 minutes  
**Automatic SSL**: ✅ Enabled by default  
**Custom Domain**: ✅ Supported (optional)
