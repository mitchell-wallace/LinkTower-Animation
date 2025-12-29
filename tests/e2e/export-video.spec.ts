import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const FRAME_RATE = 30;
const DURATION_SECONDS = 15;
const TOTAL_FRAMES = FRAME_RATE * DURATION_SECONDS;
const OUTPUT_DIR = 'promo-frames';

test('capture promo animation frames for video export', async ({ page }) => {
  test.setTimeout(300000); // 5 minutes for 450 frames
  // Ensure output directory exists and is clean
  const outputPath = path.resolve(OUTPUT_DIR);
  if (fs.existsSync(outputPath)) {
    fs.rmSync(outputPath, { recursive: true });
  }
  fs.mkdirSync(outputPath, { recursive: true });

  await page.goto('/promo');
  
  const frame = page.locator('#promo-frame');
  await expect(frame).toBeVisible();

  // Hide control panels for clean export
  await page.evaluate(() => {
    const controls = document.querySelectorAll('.fixed');
    controls.forEach(el => (el as HTMLElement).style.display = 'none');
  });

  // Pause all animations immediately
  await page.evaluate(() => {
    document.querySelectorAll('.animate-scroll-down, .animate-scroll-up').forEach(el => {
      (el as HTMLElement).style.animationPlayState = 'paused';
    });
  });

  console.log(`Capturing ${TOTAL_FRAMES} frames at ${FRAME_RATE}fps...`);

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const timeSeconds = i / FRAME_RATE;
    
    // Set animation to specific time using negative delay
    await page.evaluate((time) => {
      document.querySelectorAll('.animate-scroll-down, .animate-scroll-up').forEach(el => {
        (el as HTMLElement).style.animationDelay = `-${time}s`;
      });
    }, timeSeconds);

    // Small delay to let browser render
    await page.waitForTimeout(10);

    // Capture frame with zero-padded filename
    const frameNum = String(i).padStart(4, '0');
    await frame.screenshot({ 
      path: path.join(outputPath, `frame-${frameNum}.png`),
    });

    // Progress logging every 30 frames (1 second)
    if (i % FRAME_RATE === 0) {
      console.log(`  Captured ${i}/${TOTAL_FRAMES} frames (${timeSeconds.toFixed(1)}s)`);
    }
  }

  console.log(`Done! ${TOTAL_FRAMES} frames saved to ${OUTPUT_DIR}/`);
});
