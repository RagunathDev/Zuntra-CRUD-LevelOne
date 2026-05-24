# Zuntra Premium - Setup Guide

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Navigate to `http://localhost:5173`
   - Enjoy the beautiful light green fintech landing page!

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` folder.

## Project Overview

**Zuntra Premium** is a modern fintech landing page featuring:

- ✨ **Light Green Theme** - Premium emerald color palette
- 🎨 **Solid Block Design** - Bold borders and clean cards
- 📱 **Fully Responsive** - Mobile, tablet, desktop optimized
- ⚡ **Smooth Animations** - Framer Motion scroll effects
- 🔧 **Component-Based** - Reusable, maintainable code
- 🎯 **Modern UI** - Minimalist fintech aesthetic

## Color Theme

Changed from dark theme to **light green theme**:
- Background: Light mint green (`#f0fdf4`)
- Accents: Emerald green (`#15803d`, `#059669`)
- Borders: 2px-4px solid emerald
- Shadows: Soft, subtle shadows

## File Structure

```
src/
├── components/
│   ├── HeroSection.tsx         ⭐ Main hero with CTA
│   ├── TrustSection.tsx         💎 Member tier showcase
│   ├── FeatureGrid.tsx          🎯 6 feature cards
│   ├── StatsSection.tsx         📊 Stats & testimonials
│   ├── SecuritySection.tsx      🔒 Security features
│   ├── Footer.tsx               👣 Footer navigation
│   ├── GlassCard.tsx            🎴 Reusable card
│   └── SectionHeading.tsx       📝 Section titles
├── data/
│   └── features.ts              💾 Feature data
├── App.tsx                      🎭 Main component
├── main.tsx                     🚀 Entry point
└── index.css                    🎨 Global styles
```

## Key Sections

### 1. **Hero Section** (id: home)
- Bold headline: "Credit mastery for the curated few"
- Premium dashboard preview
- Key metrics: 120K+ members, 4.9/5 rating, 100+ benefits
- Dual CTA buttons

### 2. **Trust Section** (id: about)
- Members-only messaging
- Elite tier information
- 99.7% transaction insights
- Spending goal tracking

### 3. **Features** (id: features)
- Bill payments
- Rewards system
- Credit score tracking
- UPI payments
- Cashback
- CRED Coins

### 4. **Stats & Testimonials** (id: testimonials)
- 120K+ members stat
- Member testimonials with app ratings
- Premium experience messaging

### 5. **Security** (id: security)
- Data encryption
- Secure approvals
- Protected insights
- Trust-building design

### 6. **Footer**
- Navigation links
- Social media icons
- Branding

## Customization

### Change Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      surface: '#your-color',
      accent: '#your-color',
      // ...
    }
  }
}
```

### Update Content

Edit component files directly:
- Hero text: `src/components/HeroSection.tsx`
- Features: `src/data/features.ts`
- Testimonials: `src/components/StatsSection.tsx`

### Adjust Animations

Framer Motion settings in each component:
```jsx
transition={{ duration: 0.7, delay: 0.1 }}
```

## Design Features

✅ **Premium Solid Design**
- 2px-4px borders in emerald
- White backgrounds with shadows
- Bold typography (900 weight headers)

✅ **Responsive Layout**
- Mobile-first approach
- Breakpoints: xs, sm, md, lg, xl
- Flexible grids and flexbox

✅ **Smooth Animations**
- Fade + slide effects on scroll
- Staggered item animations
- Hover state transitions

✅ **Accessibility**
- Semantic HTML
- Proper color contrast
- Focus states included

## Technologies Used

| Tech | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Styling |
| Framer Motion 11 | Animations |
| React Icons 4 | Icons |
| TypeScript | Type safety |

## Performance

- ⚡ **Fast Load Time**: Vite optimizations
- 🎬 **GPU Accelerated**: Framer Motion animations
- 📦 **Small Bundle**: Tree-shaking with ES modules
- 🚀 **Lazy Loading**: Scroll-triggered animations

## Development Commands

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Documentation

- 📖 **README_FRONTEND.md** - Full project documentation
- 📚 **COMPONENTS.md** - Component API reference

## Next Steps

1. ✅ Install dependencies
2. ✅ Run dev server
3. ✅ Customize colors/content
4. ✅ Deploy to production

## Deploy

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### Vercel
```bash
npm run build
# Connect repo and deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
```

## Support & Questions

Check the documentation files:
- `README_FRONTEND.md` - Feature overview
- `COMPONENTS.md` - Component reference

## License

Open source - feel free to use and customize!

---

**Built with ❤️ for premium fintech experiences**
