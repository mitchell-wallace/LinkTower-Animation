import { test } from '@playwright/test';

test('capture promo page screenshot', async ({ page }) => {
  await page.goto('/promo');
  await page.waitForTimeout(500);
  
  // Capture the frame area
  const frame = await page.locator('#promo-frame');
  await frame.screenshot({ path: 'promo-screenshot.png' });
  console.log('Saved promo-screenshot.png');
});
