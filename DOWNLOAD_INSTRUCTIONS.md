# 📦 Download & Setup Instructions

## Quick Start

Your Gundam-themed portfolio is ready! Follow these steps to get it running on your local machine.

### 1️⃣ Download the Project

**Files you need:**
```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   └── styles/
├── package.json
├── pnpm-lock.yaml
├── vite.config.ts
├── postcss.config.mjs
└── README.md
```

### 2️⃣ Install Dependencies

Open terminal in the project folder and run:

```bash
# If you have pnpm installed:
pnpm install

# If you don't have pnpm, install it first:
npm install -g pnpm
pnpm install

# OR use npm:
npm install
```

### 3️⃣ Start Development Server

```bash
pnpm dev
# or
npm run dev
```

Your site will open at `http://localhost:5173`

### 4️⃣ Customize Your Portfolio

**Update your information in `src/app/App.tsx`:**

1. **Line 42-44** - Change "SISHIR GOPE" to your name
2. **Line 102** - Update your tagline
3. **Line 115-123** - Add your profile photo URL and bio
4. **Line 148-163** - Customize mission statement
5. **Line 213-276** - Update technology stacks
6. **Line 300-350** - Replace with your actual projects

**Replace images:**
- Search for `images.unsplash.com` URLs
- Replace with your own images (Gundam models, project screenshots, your headshot)

### 5️⃣ Build for Production

```bash
pnpm build
# or
npm run build
```

The production-ready files will be in the `dist/` folder.

### 6️⃣ Deploy

**Easiest options:**

- **Vercel**: Drop the folder at vercel.com/new
- **Netlify**: Drag `dist/` folder to netlify.com/drop
- **GitHub Pages**: Push to GitHub and enable Pages

## 🎨 Customization Tips

### Colors
Edit `src/styles/theme.css` - look for CSS variables like:
- `--background`
- `--foreground`
- `--primary`

### Fonts
Edit `src/styles/fonts.css` - replace Google Fonts URLs

### Animations
Adjust speed/delays in `src/app/App.tsx`:
- Look for `delay={0.2}` values
- Modify `speed={-50}` in ParallaxSection components

## 🆘 Troubleshooting

**Issue**: "Command not found: pnpm"
**Fix**: Run `npm install -g pnpm`

**Issue**: Port 5173 already in use
**Fix**: Kill other Vite processes or use `pnpm dev --port 3000`

**Issue**: Animations not smooth
**Fix**: Try a different browser (Chrome/Firefox recommended)

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion (Framer Motion)](https://motion.dev)

---

Need help? Check the README.md for full documentation.
