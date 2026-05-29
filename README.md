# Sishir Gope - AI Engineer Portfolio

A stunning parallax portfolio website showcasing AI engineering work with a Gundam-themed brutalist design.

## Features

- 🎨 **Brutalist Design** - Clean, high-contrast minimalist aesthetic
- 🔄 **Parallax Scrolling** - Smooth scroll-based animations using Motion (Framer Motion)
- 📱 **Responsive Layout** - Optimized for all screen sizes
- ⚡ **Performance** - Built with React 18 + Vite
- 🎭 **Interactive Elements** - Hover effects, scroll reveals, and dynamic animations

## Tech Stack

- **React 18.3.1** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Motion** - Animations (Framer Motion)
- **Lucide React** - Icons

## Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Main application component
│   └── components/
│       ├── Button.tsx             # Reusable button component
│       ├── PillTag.tsx            # Pill-shaped tag component
│       ├── ParallaxSection.tsx    # Parallax wrapper component
│       └── ScrollReveal.tsx       # Scroll-triggered reveal component
└── styles/
    ├── fonts.css                  # Custom font imports
    ├── theme.css                  # Tailwind theme configuration
    └── globals.css                # Global styles
```

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Steps

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```

3. **Build for production:**
   ```bash
   pnpm build
   ```

## Customization

### Update Personal Information

Edit `/src/app/App.tsx`:

- **Name**: Search for "SISHIR GOPE" and replace with your name
- **Tagline**: Update "ENGINEERING TOMORROW'S AUTONOMOUS SYSTEMS TODAY"
- **Bio**: Modify "HI, I'M SISHIR, AI ENGINEER..."
- **Projects**: Update FIELD-MIND and INDOORNAVFRESH sections with your projects
- **Images**: Replace Unsplash URLs with your own images

### Change Colors

Edit `/src/styles/theme.css`:

- Modify CSS variables in `:root` for light mode
- Modify `.dark` class for dark mode
- Key variables: `--background`, `--foreground`, `--primary`, etc.

### Adjust Fonts

Edit `/src/styles/fonts.css`:

- Replace Google Fonts imports
- Update `--font-display` and `--font-body` variables

## Sections

1. **Hero** - Dynamic landing with Gundam imagery and floating tech tags
2. **Mission** - Your vision and statistics
3. **Technologies** - Core competencies (ML, CV, Autonomous Systems)
4. **Projects** - Featured work showcase
5. **CTA** - Call-to-action with social links

## Performance Tips

- Images are lazy-loaded via Unsplash CDN
- Animations use GPU-accelerated transforms
- Smooth scroll is enabled for better UX
- All animations respect `prefers-reduced-motion`

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
pnpm build

# Deploy the `dist` folder
```

### GitHub Pages
1. Update `vite.config.ts` with your base path
2. Run `pnpm build`
3. Deploy the `dist` folder

## License

This project is open source and available for personal and commercial use.

## Credits

- **Design Inspiration**: Brutalist web design & Gundam aesthetic
- **Images**: Unsplash (replace with your own)
- **Fonts**: Space Grotesk, Rajdhani

---

Built with ❤️ using React, Vite, and Tailwind CSS
