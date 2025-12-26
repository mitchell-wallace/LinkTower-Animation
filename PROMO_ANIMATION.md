# LinkTower Promo Animation

This document describes the promotional animation created for LinkTower, accessible at `/promo`.

## Overview

The promo animation is a looping video showcasing LinkTower's link card capabilities. It features:
- Three columns of animated link cards
- Seamless infinite scrolling (center scrolls down, sides scroll up)
- 30° clockwise rotation for visual interest
- 3:2 aspect ratio frame (1200x800px)
- Built-in screen recording capability

## Accessing the Animation

**Development:**
```bash
pnpm run dev
```
Then navigate to: `http://localhost:4321/promo`

**Production:**
After building (`pnpm run build`), the page will be at `/promo/index.html`

## Features

### 1. Three-Column Layout
- **Left Column**: 8 diverse link cards (GitHub, Newsletter, eBook, YouTube, Blog, Twitter, Support, Docs)
- **Center Column**: 8 cards with alternating LinkTower logo images
- **Right Column**: 8 diverse link cards (LinkedIn, Podcast, Course Materials, Instagram, Contact, Portfolio, Contribute, Sponsor)

### 2. Color Variety
Uses all available DaisyUI color schemes:
- `base` - Default gray tones
- `primary` - Blue tones
- `secondary` - Purple tones
- `accent` - Orange tones
- `neutral` - Gray tones

### 3. Icon Variety
Demonstrates various icon types from the Lucide icon set:
- Social media (GitHub, LinkedIn, Twitter, Instagram, etc.)
- Actions (Mail, Send, Download, etc.)
- Content (Book, Newspaper, Package, etc.)
- UI elements (varying right-side icons for same tab / new tab / download)

### 4. Seamless Looping Animation
- Left & Right columns: Scroll **up** continuously
- Center column: Scrolls **down** continuously
- Animation duration: **20 seconds** per loop
- Columns duplicate their content to create seamless infinite scroll
- Left and right columns have identical heights for perfect looping
- Center column height is designed to match for continuity

### 5. Visual Effects
- **Rotation**: 30° clockwise rotation
- **Scaling**: 1.4x scale to fill frame diagonal-to-diagonal
- **Frame**: 1200x800px (3:2 aspect ratio) for ~720p quality
- **Background**: Purple gradient (can be customized)

## Recording the Animation

The page includes built-in recording controls in the bottom-right corner:

### Method 1: Built-in Screen Recording (Recommended)

1. Open `/promo` in your browser
2. Click **"Start Recording"** button
3. Select the browser window/tab to record
4. Recording automatically stops after 20 seconds (one complete loop)
5. Video downloads as `linktower-promo.webm`

**Note:** The recording uses the browser's MediaRecorder API with:
- VP9 codec
- 30 FPS
- 5 Mbps bitrate

### Method 2: Manual Screen Recording

If the built-in recorder doesn't work in your environment:

1. Click **"Hide Controls"** to remove the control panel
2. Use external screen recording software (OBS, QuickTime, etc.)
3. Record for exactly **20 seconds** for a seamless loop
4. Crop to the animated frame area (1200x800px region)

### Converting the Video

If you need a different format:

```bash
# Convert WebM to MP4
ffmpeg -i linktower-promo.webm -c:v libx264 -crs 23 -preset medium -c:a aac -b:a 128k linktower-promo.mp4

# Create a GIF (for web use)
ffmpeg -i linktower-promo.webm -vf "fps=15,scale=600:-1:flags=lanczos" -c:v gif linktower-promo.gif

# Optimize for file size
ffmpeg -i linktower-promo.webm -c:v libx264 -crf 28 -preset slow linktower-promo-optimized.mp4
```

## Customization

### Adjusting Animation Speed

In `src/pages/promo.astro`, find the CSS animations:

```css
/* Slow down (30 seconds) */
animation: scroll-up 30s linear infinite;
animation: scroll-down 30s linear infinite;

/* Speed up (10 seconds) */
animation: scroll-up 10s linear infinite;
animation: scroll-down 10s linear infinite;
```

**Important:** Also update the auto-stop timeout in the script section to match:
```javascript
// Auto-stop after [duration] seconds
setTimeout(() => {
  // ...
}, 20000); // Change this to match animation duration
```

### Changing Rotation

Adjust the `transform` property in `.rotated-container`:

```css
.rotated-container {
  transform: translate(-50%, -50%) rotate(30deg) scale(1.4);
  /* Change 30deg to desired angle */
  /* Adjust scale(1.4) to fit properly */
}
```

### Modifying Colors

Edit the link data arrays (`leftColumnLinks`, `centerColumnLinks`, `rightColumnLinks`) and change the `color` property:
- `base`, `primary`, `secondary`, `accent`, `neutral`
- Add `-gradient` suffix for gradient backgrounds (e.g., `primary-gradient`)

### Changing Link Content

Edit the link arrays in the frontmatter section of `src/pages/promo.astro`:

```javascript
const leftColumnLinks = [
  {
    id: "left-1",
    title: "Your Title",
    description: "Your description",
    url: "#",
    icon: "lucide:your-icon",
    color: "base",
    newTab: true,      // optional
    download: false    // optional
  },
  // ...
];
```

### Frame Size

Adjust dimensions in CSS:

```css
.animation-frame {
  width: 1200px;  /* Adjust width */
  height: 800px;  /* Adjust height */
  /* Maintain 3:2 ratio for best results */
}
```

## Technical Details

### File Structure
- **Page**: `src/pages/promo.astro`
- **Icons config**: `src/lib/getRequiredIcons.ts` (includes promo page icons)
- **Assets**: Uses `/profile-picture.png` for LinkTower logo

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- MediaRecorder API required for built-in recording
- CSS animations work in all modern browsers

### Performance
- Uses CSS transforms (GPU-accelerated)
- No JavaScript required for animation (pure CSS)
- Minimal DOM manipulation

## Troubleshooting

### Icons not showing
- Ensure icons are listed in `src/lib/getRequiredIcons.ts`
- Use `lucide:` prefix for Lucide icons
- Run `pnpm run build` to regenerate icon cache

### Animation not smooth
- Check browser performance
- Reduce scale or complexity
- Use hardware acceleration CSS properties

### Recording fails
- Try "Hide Controls" + external recording software
- Check browser permissions for screen capture
- Use Chrome/Edge for best MediaRecorder support

## Future Enhancements

Potential improvements:
- Server-side video generation using Puppeteer/Playwright
- Multiple animation presets
- Configurable animation parameters via query params
- Export to more formats directly in-browser

---

**Created for LinkTower promotional materials**
**Build date**: December 2025
