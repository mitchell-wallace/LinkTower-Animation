import { test, expect } from '@playwright/test';

/**
 * Test to verify seamless loop boundary
 * Captures screenshots at start (0ms) and just before loop (14999ms)
 * These should show visually identical content positions
 */
test('loop boundary comparison', async ({ page }) => {
  await page.goto('/promo');
  
  const frame = page.locator('#promo-frame');
  await expect(frame).toBeVisible();
  
  // Pause animation immediately
  await page.evaluate(() => {
    document.querySelectorAll('.animate-scroll-down, .animate-scroll-up').forEach(el => {
      (el as HTMLElement).style.animationPlayState = 'paused';
    });
  });
  
  // Screenshot at t=0 (animation start)
  await frame.screenshot({ path: 'loop-boundary-0ms.png' });
  
  // Set animation to just before loop point (99.99% through)
  // Animation duration is 15s, so 14.999s = 99.993% through
  await page.evaluate(() => {
    document.querySelectorAll('.animate-scroll-down, .animate-scroll-up').forEach(el => {
      (el as HTMLElement).style.animationDelay = '-14.999s';
    });
  });
  
  // Small delay to let browser recalculate
  await page.waitForTimeout(100);
  
  // Screenshot at t=14.999s (just before loop)
  await frame.screenshot({ path: 'loop-boundary-14999ms.png' });
  
  console.log('Saved loop-boundary-0ms.png and loop-boundary-14999ms.png');
  console.log('Compare these images - content should be in nearly identical positions');
});
