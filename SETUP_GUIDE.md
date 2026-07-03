# Complete Setup Guide: philyuen.com

Follow these steps in order. Total time: 30 mins.

---

## Step 1: Register Domain (5 mins)

### Register philyuen.com

1. Go to **[Namecheap.com](https://namecheap.com)** or **[GoDaddy.com](https://godaddy.com)**
2. Search for `philyuen.com`
3. Add to cart and check out (~$12/year)
4. Create account (or log in)
5. **Don't change nameservers yet** — we'll do that in Step 5

**Cost:** ~$12/year  
**Domain:** philyuen.com

---

## Step 2: Set Up GitHub (5 mins)

### Create GitHub Account & Repository

1. Go to **[github.com](https://github.com)**
2. Click "Sign Up"
3. Create account (use your email)
4. After creating account, click "New Repository"
5. Repository name: `philyuen-portfolio`
6. Description: "Product manager portfolio site"
7. Click "Create Repository"

**You now have:**
- GitHub username (e.g., `@your-username`)
- Empty repository at `github.com/your-username/philyuen-portfolio`

---

## Step 3: Get Anthropic API Key (2 mins)

### Create Anthropic Account & API Key

1. Go to **[console.anthropic.com](https://console.anthropic.com)**
2. Click "Sign Up" (or log in if you have an account)
3. Create account with your email
4. Go to **"Keys"** in the left sidebar
5. Click **"Create Key"**
6. Name it: `philyuen-portfolio`
7. Copy the key (you'll only see it once)
8. Save it somewhere safe (you'll need it in Step 4)

**Cost:** Free tier available, then pay-as-you-go. Screening Response Generator costs ~$0.01 per use.

---

## Step 4: Set Up Project Locally (5 mins)

### Download the Project

I've already scaffolded the full Next.js project for you. Here's what to do:

1. **Download the project folder** from the outputs directory
2. Open your terminal
3. Navigate to the project:
   ```bash
   cd path/to/philyuen-portfolio
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```
   (This takes 2-3 mins and downloads ~200MB)

5. **Create environment file:**
   ```bash
   cp .env.local.example .env.local
   ```

6. **Add your Anthropic API key** to `.env.local`:
   ```
   ANTHROPIC_API_KEY=sk-ant-xxxxx... (paste your key here)
   ```

7. **Test locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

   You should see the landing page with your hero, featured projects, and navigation.

8. **Stop the local server:**
   ```
   Ctrl + C
   ```

---

## Step 5: Push to GitHub (5 mins)

### Commit & Push Your Code

1. **Initialize Git** (in the project folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio site"
   git branch -M main
   ```

2. **Connect to your GitHub repository:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/philyuen-portfolio.git
   ```
   (Replace `YOUR-USERNAME` with your actual GitHub username)

3. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

4. **Verify on GitHub:**
   - Go to `github.com/your-username/philyuen-portfolio`
   - You should see your project files

---

## Step 6: Deploy on Vercel (5 mins)

### Connect Vercel to GitHub & Deploy

1. Go to **[vercel.com](https://vercel.com)**
2. Click "Sign Up" → choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. After logging in, click **"New Project"**
5. Find and select `philyuen-portfolio` from your repos
6. Click "Import"
7. **Configure environment variables:**
   - Look for "Environment Variables"
   - Add: `ANTHROPIC_API_KEY` = (paste your key)
8. Click **"Deploy"**

**Wait 2-3 mins.** Vercel builds and deploys your site.

Once done, you'll get a URL like: `https://philyuen-portfolio-xxx.vercel.app`

**Test it:**
- Open that URL in your browser
- Click around, test the tool
- Everything should work

---

## Step 7: Connect Custom Domain (5 mins)

### Point philyuen.com to Vercel

1. **In Vercel:**
   - Go to your project settings
   - Click "Domains"
   - Click "Add Domain"
   - Enter: `philyuen.com`
   - Click "Add"

2. **Vercel will show you nameservers** (they look like `ns1.vercel-dns.com`)

3. **Back in Namecheap (or GoDaddy):**
   - Go to your domain settings
   - Find "Nameservers"
   - Change from default to custom
   - Paste Vercel's nameservers
   - Save

4. **Wait 24-48 hours** for DNS to propagate

5. **After propagation:**
   - Visit `https://philyuen.com`
   - Your site is live!

---

## Step 8: Update Content (Next)

Once the site is deployed, you can:

1. **Edit case study pages** (add your artifacts, metrics, screenshots)
   - `app/projects/strongroom-ai/page.tsx`
   - `app/projects/sigma-healthcare/page.tsx`
   - `app/projects/countfor-me/page.tsx`
   - `app/projects/webstercare/page.tsx`

2. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Update case studies with artifacts"
   git push
   ```

3. **Vercel auto-deploys** (no extra step needed)

---

## Troubleshooting

### "npm install" is slow or fails
- Make sure you have Node.js 18+ installed: `node --version`
- Try: `npm cache clean --force` then `npm install` again

### Port 3000 is already in use
```bash
# Use a different port:
npm run dev -- -p 3001
```

### Anthropic API key not working
- Double-check you copied the full key from the console
- Make sure `.env.local` is in the project root (not in a subfolder)
- Restart `npm run dev` after updating `.env.local`

### Domain not working after 24 hours
- Wait a bit longer (DNS can take up to 48 hours)
- Check Vercel's "Domains" page to confirm setup status
- Double-check nameservers in Namecheap/GoDaddy match Vercel's

### Vercel deployment fails
- Check the "Deployments" tab in Vercel for error logs
- Make sure `ANTHROPIC_API_KEY` env var is set in Vercel (not just locally)

---

## Next Steps

1. **Customize content:**
   - Update case study pages with your artifacts and metrics
   - Edit hero copy if needed
   - Add your headshot or avatar (optional)

2. **Test the tool:**
   - Go to `/tools/screening-response-gen`
   - Paste a screening question
   - Verify Claude generates responses

3. **Monitor API usage:**
   - Check [Anthropic Console](https://console.anthropic.com) for usage
   - Set a budget alert if needed

4. **Optional enhancements:**
   - Add Google Analytics
   - Add a dark mode toggle
   - Add more projects as case studies

---

## Questions?

Email: [phillip.yiu.pong.yuen@gmail.com](mailto:phillip.yiu.pong.yuen@gmail.com)

---

**Timeline Summary:**
- Step 1 (Domain): 5 mins
- Step 2 (GitHub): 5 mins
- Step 3 (API Key): 2 mins
- Step 4 (Local): 5 mins
- Step 5 (GitHub Push): 5 mins
- Step 6 (Vercel Deploy): 5 mins
- Step 7 (Custom Domain): 5 mins + 24-48 hrs for DNS

**Total active time:** ~35 mins  
**Total wall time:** ~24-48 hours (DNS propagation)

You can start using `https://philyuen-portfolio-xxx.vercel.app` immediately while DNS propagates.
