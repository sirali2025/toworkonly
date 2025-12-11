# Immersive Hero System Implementation

## Overview
The new Hero section combines layered gradients, parallax typography, and a dedicated Three.js scene to create an immersive, interactive experience that matches the TitanGate brand palette.

## Components

### 1. Hero Section (`src/sections/Hero.tsx`)
The main hero component featuring:
- **Layered Gradients**: Royal Blue (#0A1F44) base with Electric Cyan and Orange accents
- **Parallax Typography**: GSAP ScrollTrigger drives depth-based scroll animations
- **Rotating Taglines**: GSAP timeline cycles through brand messages:
  - "Intelligence that acts"
  - "Autonomous innovation"
  - "Future-ready AI"
  - "Decisions at light speed"
- **CTA Copy**: "The New Era of Autonomous Intelligence"
- **Interactive Canvas**: Three.js holographic scene embedded in background

### 2. Holographic Core (`src/3d/HolographicCore.tsx`)
Three.js scene with:
- **Floating Structures**:
  - Torus geometries with transmission material
  - Octahedron wireframes
  - Icosahedron rings
- **Particle Fog**: 2000 particles creating ambient depth
- **Kinetic Lighting**: Dynamic point lights and spotlights that sweep across structures
- **Continuous Animation**: All structures rotate and float with different timing

## Features

### Scroll-Driven Effects
- Headline parallax (moves up faster than scroll)
- Subline opacity fade and vertical translation
- Canvas scale and opacity change on scroll
- All powered by GSAP ScrollTrigger with `scrub: 1` for smooth tracking

### Performance Optimizations
- **Lazy Loading**: HolographicCore loaded via React.lazy() and Suspense
- **Throttled Rendering**: Canvas set to "always" frameloop with reduced dpr
- **Reduced Particle Count**: 2000 particles (vs. typical 5000+)
- **Transmission Material**: Uses optimized samples=4 for performance
- **Code Splitting**: Vite automatically splits HolographicCore into separate chunk

### Electric Cyan Accents
All interactive elements feature Electric Cyan (#00FFFF):
- Rotating tagline icons
- CTA button gradients and glows
- Holographic structure emissive colors
- Particle fog
- Point lights
- Scroll indicator

## Color Palette (TitanGate)
- **Royal Blue**: `#0A1F44` - Primary background
- **Electric Cyan**: `#00FFFF` - Holographic accents, glows, highlights
- **Orange**: `#FF6A00` - Secondary accents, CTAs

## CSS Animations
New animations added to `src/index.css`:
- `animate-pulse-slow` - Gradient blob animations
- `animate-pulse-glow` - Cyan glow pulsing
- `animate-gradient-shift` - Multi-stop gradient movement
- `animate-ping-slow` - Button border effect
- `animate-scroll-bounce` - Scroll indicator animation

## Dependencies Added
```json
{
  "three": "^0.x.x",
  "@react-three/fiber": "^8.x.x",
  "@react-three/drei": "^9.x.x",
  "gsap": "^3.x.x",
  "@types/three": "^0.x.x"
}
```

## Integration
The Hero is used in `src/pages/HomePage.tsx`:
```tsx
import Hero from '../sections/Hero';
```

## Responsive Design
- Mobile: Scaled typography, simplified CTA layout
- Tablet/Desktop: Full parallax effects, dual CTA buttons
- Canvas: Adapts dpr based on device capabilities

## Accessibility
- Semantic HTML structure
- Keyboard-accessible CTA buttons
- Reduced motion support via pointer-events: none on non-interactive canvas
- High contrast text on dark background

## Browser Support
- Modern browsers with WebGL support
- Graceful degradation: 3D scene hidden if WebGL unavailable
- Fallback: Gradient backgrounds still provide visual interest
