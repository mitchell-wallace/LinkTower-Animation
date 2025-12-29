# Agent Context: LinkTower Promo Animation

This repository creates a promotional video animation for LinkTower, a link-in-bio platform.

## Primary Purpose

The main feature is `/promo` - a looping animation of link cards that can be exported as video. The root URL (`/`) redirects here.

## Key Files

### Animation Core
- `src/pages/promo.astro` - Main animation page with 3-column layout, 30° rotation, CSS animations
- `src/promo/PromoLink.astro` - Card component with 4 color variants
- `src/promo/data.ts` - Sample link data (40 items across 3 columns)
- `src/promo/ARCHITECTURE.md` - Technical documentation of the animation system

### Export Pipeline
- `tests/e2e/export-video.spec.ts` - Playwright test that captures 450 frames at 30fps
- `pnpm export:video` - Runs Playwright + FFmpeg to generate H.264 MP4
- Output: `public/promo-export.mp4`

## Animation Mechanics

1. **Layout**: Three columns in a flex container, each duplicated for seamless looping
2. **Rotation**: 30° clockwise with 1.8x scale to fill 1080x720 frame
3. **Motion**: Center scrolls down, left/right scroll up (contrary motion)
4. **Duration**: 15 seconds, linear infinite animation
5. **Looping**: Content wrapped in `pb-2` divs ensures exact 50% scroll distance

## Common Tasks

### Modify link content
Edit `src/promo/data.ts` - each column is an array of `PromoLinkData` objects.

### Change animation timing
In `src/pages/promo.astro`, modify `ANIMATION_DURATION` constant.

### Adjust visual styling
- Card colors: `colorClasses` in `PromoLink.astro`
- Layout: CSS classes in `promo.astro` (gap, padding, margins)
- Rotation/scale: `ROTATION_DEG` and scale calculation in `promo.astro`

### Export video
```bash
pnpm export:video  # Creates public/promo-export.mp4
```

## Tech Stack
- Astro 4.x with Tailwind CSS + DaisyUI
- astro-icon for SVG icons
- Playwright for frame capture
- FFmpeg for video encoding (H.264)

## Testing
- `pnpm test:run` - Vitest unit tests
- `pnpm exec playwright test` - E2E tests including screenshot validation
