# LinkTower Promo Animation

A promotional video animation for [LinkTower](https://github.com/trevortylerlee/treelink), featuring three columns of animated link cards scrolling at a 30° angle. Built with Astro and exported via Playwright + FFmpeg.

## Quick Start

```bash
pnpm install
pnpm dev          # View animation at http://localhost:3030/promo
pnpm export:video # Generate MP4 video
```

## The Animation

The promo page (`/promo`) displays a looping animation of LinkTower-style cards:

- **Three columns** scrolling in contrary motion (center down, sides up)
- **30° rotation** with 1.8x scale to fill the frame
- **15-second loop** that seamlessly repeats
- **1080x720 frame** (3:2 aspect ratio)

### Controls

- **Play/Pause** - Toggle animation
- **Speed** - 0.5x to 2x playback
- **Download** - Get the exported MP4

## Video Export

The animation can be exported as video using Playwright to capture frames and FFmpeg to encode:

```bash
pnpm export:video  # H.264 MP4 (recommended, ~1.6MB)
pnpm export:webm   # VP9 WebM
pnpm export:gif    # Animated GIF (half size, 15fps)
```

Output is saved to `public/promo-export.mp4` and accessible via the Download button.

## Project Structure

```
src/
├── pages/
│   ├── index.astro      # Redirects to /promo
│   └── promo.astro      # Main animation page
└── promo/
    ├── PromoLink.astro  # Card component
    ├── data.ts          # Link data for all columns
    └── ARCHITECTURE.md  # Technical details
```

## How It Works

1. **PromoLink.astro** - Simplified link card with color variants (base, primary, secondary, neutral) and optional logo display
2. **data.ts** - Defines 40 sample links across 3 columns with icons and descriptions
3. **promo.astro** - Renders columns in a rotated container with CSS animations
4. **Infinite scroll** - Content is duplicated and scrolls exactly 50% to loop seamlessly

## Customization

- Edit `src/promo/data.ts` to change links
- Modify colors in `src/promo/PromoLink.astro`
- Adjust timing/rotation in `src/pages/promo.astro` constants

## License

MIT
