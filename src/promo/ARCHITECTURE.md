# Promo Animation Architecture

## Overview
Create a looping promotional animation showing 3 columns of CustomLink components, rotated 30 degrees, scrolling infinitely within a 1080x720 (3:2) frame.

## Frame Specifications
- **Resolution**: 1080x720px (3:2 aspect ratio, ~720p)
- **Rotation**: 30 degrees clockwise
- **Target Duration**: ~15 seconds per loop

## File Structure
```
src/promo/
├── ARCHITECTURE.md      # This file
├── data.ts              # Link data for all 3 columns
├── PromoLink.astro      # Simplified link card component
├── PromoColumn.astro    # Single column with infinite scroll
└── PromoFrame.astro     # Main frame container with rotation
```

## Implementation Phases

### Phase 1: Static Layout
1. Create simplified PromoLink component (no images/carousels)
2. Define link data arrays (12 items per column)
3. Create 3-column layout filling 1080x720 frame
4. **Goal**: 3 evenly-spaced columns visible in frame

### Phase 2: Rotation
1. Apply `transform: rotate(30deg)` to content
2. Scale content to fill diagonal (calculated, not trial-and-error)
3. **Goal**: Rotated content fills frame corner-to-corner

### Phase 3: Infinite Scrolling
1. Duplicate column content for seamless loop
2. CSS animation scrolls exactly one content-height
3. Animation loops instantly (no visible reset)
4. **Goal**: Each column scrolls infinitely

### Phase 4: Contrary Motion  
1. Middle column: scrolls DOWN
2. Side columns: scroll UP
3. Same speed for visual balance
4. **Goal**: Creates dynamic visual interest

### Phase 5: Export Controls
1. Timer display showing loop position
2. Pause/play controls
3. Speed adjustment
4. Instructions for screen recording

## Technical Approach: Infinite Scroll

For truly infinite scrolling without gaps:

```
[Content A]  ←── Viewport sees this
[Content B]  
[Content A]  ←── Duplicate
[Content B]  

Animation: translateY(0) → translateY(-50%)
           Then instant reset to 0 (seamless because content repeats)
```

With 2x duplication, scroll 50% of total height = 1 full content set.

## Rotation Math

At 30° rotation with 1080x720 frame:
- Diagonal length: sqrt(1080² + 720²) ≈ 1298px
- Content needs to cover this diagonal
- Scale factor: ~1.2-1.4x depending on content arrangement

## Color Scheme
Use mix of: base, primary, secondary, neutral
- Provides visual variety
- Demonstrates LinkTower's theming capabilities
