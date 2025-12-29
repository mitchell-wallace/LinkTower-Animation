import { test } from '@playwright/test';

test('capture promo page screenshot', async ({ page }) => {
  await page.goto('/promo');
  await page.waitForTimeout(500);
  
  // Capture the frame area
  const frame = await page.locator('#promo-frame');
  await frame.screenshot({ path: 'promo-screenshot.png' });
  console.log('Saved promo-screenshot.png');
});

test('capture animation at multiple timestamps', async ({ page }) => {
  await page.goto('/promo');
  const frame = await page.locator('#promo-frame');
  
  // Capture at 0s, 3s, 7s to verify scrolling
  await frame.screenshot({ path: 'promo-0s.png' });
  console.log('Saved promo-0s.png');
  
  await page.waitForTimeout(3000);
  await frame.screenshot({ path: 'promo-3s.png' });
  console.log('Saved promo-3s.png');
  
  await page.waitForTimeout(4000);
  await frame.screenshot({ path: 'promo-7s.png' });
  console.log('Saved promo-7s.png');
});
