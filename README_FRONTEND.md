# Zuntra Premium - Light Green Finance Landing Page

A modern, premium fintech landing page built with React, Vite, Tailwind CSS, and Framer Motion. Featuring a beautiful light green color scheme with solid block design elements.

## Features

- **Light Green Theme**: Beautiful emerald color palette with solid, bold design
- **Block Premium Look**: Solid borders and cards with strong visual hierarchy
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations for scroll and interaction effects
- **Component-Based**: Reusable React components with clean architecture
- **Modern UI**: Clean, minimal, premium fintech aesthetic

## Tech Stack

- **React 18.3** - UI framework
- **Vite 5** - Fast build tool
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion 11** - Animation library
- **React Icons 4** - Icon library

## Project Structure

```
src/
├── components/
│   ├── HeroSection.tsx       # Hero landing section
│   ├── TrustSection.tsx       # Trust & about section
│   ├── FeatureGrid.tsx        # Feature cards grid
│   ├── StatsSection.tsx       # Statistics & testimonials
│   ├── SecuritySection.tsx    # Security/trust section
│   ├── Footer.tsx             # Footer navigation
│   ├── GlassCard.tsx          # Reusable card component
│   └── SectionHeading.tsx     # Section heading component
├── data/
│   └── features.ts            # Feature data configuration
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
└── index.css                  # Global styles
```

## Design System

### Color Palette

- **Surface**: `#f0fdf4` - Light background
- **Surface2**: `#dcfce7` - Secondary background
- **Accent**: `#15803d` - Primary green
- **Accent2**: `#059669` - Secondary green
- **Glow**: `#10b981` - Highlight green
- **Glow2**: `#34d399` - Light highlight

### Typography

- Font Family: Inter
- Sizes: xs (12px) through 7xl
- Weights: 400, 500, 600, 700, 800, 900

### Spacing & Borders

- Rounded corners: 2xl, 3xl, 2rem
- Borders: 2px and 4px for blocks
- Shadow: Soft md and lg shadows
- Gaps: 4px to 10 units

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

## Sections

### 1. Hero Section
- Fullscreen landing with bold typography
- Premium CTA buttons
- Animated dashboard card preview
- Key metrics display

### 2. Trust Section
- "Members-only" messaging
- Split layout with content and visual
- Premium member tier information
- Spending goals and metrics

### 3. Feature Grid
- 6 feature cards in responsive grid
- Each card has:
  - Icon with gradient
  - Title and description
  - Hover animations
  - Solid border design

### 4. Stats Section
- Member statistics with numbers
- Customer testimonials
- App store ratings
- Testimonial cards with author info

### 5. Security Section
- Security messaging
- 3 key security features:
  - Data encryption
  - Secure approvals
  - Protected insights
- Trust-building visual design

### 6. Footer
- Links (About, Careers, Privacy, Terms)
- Social media icons
- Branding information

## Animation Patterns

- **Fade & Move Up**: Initial page load
- **Scroll Reveal**: Sections animate on scroll
- **Hover Effects**: Interactive elements on hover
- **Stagger**: Multiple items animate with delays
- **Scale & Lift**: Card hover effects

## Component Usage

### GlassCard Component

```jsx
<GlassCard
  title="Feature Title"
  description="Feature description"
  accent="from-emerald-500 to-teal-400"
  icon={<IconComponent />}
/>
```

### Animation Hook

```jsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.7 }}
```

## Performance

- Optimized animations using Framer Motion
- CSS-in-JS with Tailwind for minimal bundle
- Lazy loading with Intersection Observer
- Smooth scrolling behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Customization

### Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  surface: '#your-color',
  accent: '#your-color',
  // ...
}
```

### Modify Content

Update section components in `src/components/` or data in `src/data/features.ts`

### Adjust Animations

Edit animation duration and delays in each component's `transition` prop.

## Future Enhancements

- Add Swiper.js for carousel sections
- Implement dark mode toggle
- Add form validation
- Integrate backend API
- Add CMS for content management
- Performance monitoring with analytics
