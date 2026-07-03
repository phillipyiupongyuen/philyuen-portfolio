# Phil Yuen – Product Manager Portfolio

A modern portfolio site built with Next.js, React, and Tailwind CSS. Showcases 8+ years of product leadership across healthtech, data platforms, and AI products. Includes an interactive Claude-powered tool and detailed case studies.

## Tech Stack

- **Frontend:** Next.js 14 + React 18
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (free tier, auto-deploy from GitHub)
- **API:** Anthropic Claude API (for the Screening Response Generator tool)

## Setup

### 1. Prerequisites

- Node.js 18+ and npm
- GitHub account (for version control and Vercel deployment)
- Anthropic API key (for the interactive tool)

### 2. Local Setup

```bash
# Install dependencies
npm install

# Create environment variables file
cp .env.local.example .env.local

# Add your Anthropic API key to .env.local
# Get one from: https://console.anthropic.com/account/keys
```

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── page.tsx                    # Landing page
├── projects/
│   ├── page.tsx               # Projects index
│   ├── strongroom-ai/         # Case study: StrongRoom AI
│   ├── sigma-healthcare/      # Case study: Sigma Healthcare
│   ├── countfor-me/           # Case study: countfor.me
│   └── webstercare/           # Case study: Webstercare
├── tools/
│   └── screening-response-gen/ # Interactive screening response generator
├── claude-code/               # Claude Code case study
├── api/
│   └── generate-response/     # API endpoint for Claude integration
├── components/
│   └── Header.tsx             # Navigation header
└── globals.css                # Global styles & design system
```

## Pages

- **Home (`/`)** – Hero section with featured projects
- **Work (`/projects`)** – All project case studies
- **Tools (`/tools/screening-response-gen`)** – Interactive Claude-powered tool
- **Claude Code (`/claude-code`)** – Case study on job search automation
- **Individual projects** – Deep dives into StrongRoom AI, Sigma Healthcare, countfor.me, Webstercare

## Environment Variables

Create `.env.local` with:

```
ANTHROPIC_API_KEY=your_key_here
```

Get your key from [Anthropic Console](https://console.anthropic.com/account/keys).

## Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/philyuen-portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up / log in with GitHub
3. Click "New Project"
4. Select your `philyuen-portfolio` repo
5. Add environment variable: `ANTHROPIC_API_KEY`
6. Click "Deploy"

Vercel will auto-deploy on every push to `main`.

### 3. Connect Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add `philyuen.com` (or your custom domain)
4. Follow Vercel's nameserver setup

## Customization

### Colors & Design

Edit `app/globals.css` to change accent color:

```css
:root {
  --accent: #0891b2; /* Change this to your brand color */
}
```

### Content

Update individual case study files:
- `app/projects/strongroom-ai/page.tsx`
- `app/projects/sigma-healthcare/page.tsx`
- `app/projects/countfor-me/page.tsx`
- `app/projects/webstercare/page.tsx`

### Tool

The Screening Response Generator is in:
- `app/tools/screening-response-gen/page.tsx` (frontend)
- `app/api/generate-response/route.ts` (backend API)

## Maintenance

- Keep dependencies up to date: `npm outdated`, `npm update`
- Monitor Anthropic API usage and costs
- Add analytics (Google Analytics, Plausible) if desired

## Questions?

Contact: [phillip.yiu.pong.yuen@gmail.com](mailto:phillip.yiu.pong.yuen@gmail.com)

---

Built with Next.js and deployed on Vercel. See it live at [philyuen.com](https://philyuen.com)
