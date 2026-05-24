# Component Documentation

## Overview

This document outlines the reusable React components used in the Zuntra Premium frontend.

## Components

### HeroSection

The main landing/hero section of the page.

**Features:**
- Fullscreen hero with large typography
- Premium CTA buttons (primary + secondary)
- Animated dashboard preview card
- Key metrics boxes
- Entrance animations on load

**Props:** None

**Usage:**
```jsx
<HeroSection />
```

---

### TrustSection

Trust and about section highlighting member benefits and features.

**Features:**
- Split layout (text left, visual right)
- Member tier information
- Spending goal progress bar
- Transaction insights statistics
- Scroll reveal animations

**Props:** None

**Usage:**
```jsx
<TrustSection />
```

---

### FeatureGrid

Grid layout displaying 6 key feature cards.

**Features:**
- Responsive 1/2/3 column layout
- Uses GlassCard component for consistency
- Staggered scroll animations
- Maps over feature data from features.ts

**Props:** None

**Usage:**
```jsx
<FeatureGrid />
```

---

### GlassCard

Reusable card component with solid borders and hover effects.

**Props:**
```typescript
interface GlassCardProps extends MotionProps {
  title: string;           // Card title
  description: string;     // Card description
  accent: string;          // (Unused but available)
  icon: ReactNode;         // Icon element
}
```

**Features:**
- Solid border (2px emerald-600)
- White background with hover lift
- Icon with emerald background
- Smooth transitions
- Motion animation support

**Usage:**
```jsx
<GlassCard
  title="Bill Payments"
  description="One-tap credit card management with instant rewards."
  icon={<IoCardOutline className="h-6 w-6" />}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
/>
```

---

### StatsSection

Section featuring statistics and member testimonials.

**Features:**
- 3 key stat boxes with metrics
- 2 testimonial cards
- Staggered animations on scroll
- App store rating icons
- Author information display

**Props:** None

**Usage:**
```jsx
<StatsSection />
```

---

### SecuritySection

Security and trust-focused section with feature cards.

**Features:**
- Split layout with text and features
- 3 security features cards:
  - Data encryption
  - Secure approvals
  - Protected insights
- Icon-based visual hierarchy
- Solid border design

**Props:** None

**Usage:**
```jsx
<SecuritySection />
```

---

### Footer

Navigation footer with links and social icons.

**Features:**
- 4-column link layout
- Branding section
- Social media icons (Twitter, Instagram, LinkedIn)
- Responsive design

**Links:**
- About
- Careers
- Privacy Policy
- Terms

**Props:** None

**Usage:**
```jsx
<Footer />
```

---

### SectionHeading

Reusable heading component for section titles.

**Props:**
```typescript
interface SectionHeadingProps {
  overline: string;        // Small uppercase text above
  title: string;          // Main heading text
  description?: string;   // Optional description
}
```

**Features:**
- Uppercase overline with letter spacing
- Large bold title
- Optional description text
- Consistent styling across sections

**Usage:**
```jsx
<SectionHeading
  overline="Feature spotlight"
  title="Modern tools for credit, rewards, and control."
  description="A premium suite crafted for crisp interactions..."
/>
```

---

## Animation Patterns

### Scroll Reveal (Used in most components)

```jsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.7 }}
```

### Staggered Items (Feature grid, testimonials)

```jsx
transition={{ duration: 0.7, delay: index * 0.08 }}
```

### Entrance Animation (Hero section)

```jsx
initial={{ opacity: 0, y: 32 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.9, delay: 0.15 }}
```

### Hover Effects (Cards)

```jsx
whileHover={{ y: -8 }}
transition={{ duration: 0.3 }}
```

---

## Data Files

### features.ts

Centralized feature data configuration.

**Structure:**
```typescript
interface FeatureItem {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
}

export const features: FeatureItem[] = [
  // 6 feature objects
]
```

**Features:**
- Bill payments
- Rewards system
- Credit score
- UPI payments
- Cashback
- CRED Coins

---

## Styling Approach

### Tailwind Classes

All components use Tailwind CSS utility classes for styling:

**Common Classes:**
- `rounded-2xl` / `rounded-3xl` - Border radius
- `border-2` / `border-4` - Borders (emerald-600)
- `bg-block` / `bg-emerald-50` - Backgrounds
- `text-slate-900` / `text-emerald-700` - Text colors
- `shadow-md` / `shadow-lg` - Shadow effects
- `hover:bg-emerald-100` - Hover states

### Color Tokens

From tailwind.config.js:
```css
--color-surface: #f0fdf4
--color-surface2: #dcfce7
--color-accent: #15803d
--color-accent2: #059669
```

---

## Performance Optimizations

1. **Motion Optimization**: Uses Framer Motion for GPU-accelerated animations
2. **Lazy Loading**: `whileInView` triggers only when visible
3. **Once Animation**: `once: true` prevents re-animation on scroll
4. **Icon Optimization**: Using react-icons for tree-shakeable icons
5. **CSS Utility**: Tailwind's JIT compilation for minimal CSS

---

## Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Color contrast ratios meet WCAG AA
- Focus states on interactive elements
- Alt text support via icon libraries

---

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Best Practices

1. **Components are pure**: No side effects, accept props only
2. **Animation timing**: 0.6-0.9s for scrolls, 0.25-0.3s for hovers
3. **Spacing consistency**: Use Tailwind's gap and padding utilities
4. **Typography hierarchy**: Use size and weight combinations
5. **Responsiveness**: Mobile-first approach with sm/md/lg breakpoints

