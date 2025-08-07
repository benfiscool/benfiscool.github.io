# Benjamin Freeman Portfolio

A modern, Tony Stark-inspired portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with blue accents inspired by Tony Stark's arc reactor
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Blog System**: Dynamic blog with individual post pages
- **Resume**: Professional resume page with PDF download
- **Matrix Background**: Animated matrix-style background effect

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. Here's how to set it up:

### Prerequisites
- GitHub account
- Git installed locally
- Node.js 18+ installed

### Steps

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it something like `benjamin-freeman-portfolio` or `portfolio`
   - Don't initialize with README (since you already have one)

2. **Initialize Git and Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Benjamin Freeman portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

4. **Automatic Deployment**
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
     - Trigger on every push to the `main` branch
     - Install dependencies
     - Build the static site
     - Deploy to GitHub Pages

5. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
   - It may take a few minutes for the first deployment to complete

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
git add out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [id]/
│   │       └── page.tsx    # Individual blog posts
│   └── resume/
│       └── page.tsx        # Resume page
└── components/
    ├── About.tsx           # About section
    ├── Contact.tsx         # Contact form
    ├── Footer.tsx          # Footer component
    ├── Header.tsx          # Navigation header
    ├── Hero.tsx            # Hero section
    ├── MatrixBackground.tsx # Animated background
    ├── Projects.tsx        # Projects showcase
    └── Skills.tsx          # Skills section
```

## 🎨 Customization

The website uses a Tony Stark-inspired color scheme defined in `tailwind.config.ts`:
- **Primary**: Various shades of blue (#3B82F6, #60A5FA, #93C5FD)
- **Background**: Dark grays and blacks
- **Accents**: Cyan and electric blue

## 📄 Content Updates

- **Resume**: Update `src/app/resume/page.tsx` with your information
- **Blog Posts**: Add new posts in `src/app/blog/[id]/page.tsx`
- **Projects**: Modify `src/components/Projects.tsx`
- **Skills**: Update `src/components/Skills.tsx`

## 🔧 Configuration

- **Next.js**: `next.config.js` - Configured for static export
- **Tailwind**: `tailwind.config.ts` - Custom theme and colors
- **TypeScript**: `tsconfig.json` - TypeScript configuration

## 📞 Contact

Benjamin Freeman
- Email: FreemB10@my.erau.edu
- Phone: 602-617-3531
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ and ⚡ by Benjamin Freeman
