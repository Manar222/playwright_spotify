import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('Spotify Signup Test', async ({ page }) => {
try {
    await page.goto('https://www.spotify.com/signup/')

    await page.locator('#username').fill('menna35378@me.com');

    const buttonNext= await page.locator('button:has-text("Next")')
    await buttonNext.click();

    await page.locator('#new-password').fill('eqFjp3xUuHFe3W');
    await buttonNext.click();
    
    await expect(page.locator('#displayName')).toBeVisible({ timeout: 10000 });

    await page.locator('#displayName').fill('TestUser');
  
  await page.locator('#day').fill('24');
 const month= await page.locator('#month')
 await month.selectOption('10');
  await page.locator('#year').fill('1999');
  await page.locator('span:has-text("Woman")').click();
  await buttonNext.click();
  await page.locator('span:has-text("Please send me news and offers from Spotify")').click();
  await page.locator('label[for="checkbox-privacy"]').click();
  const buttonSignUp= await page.locator('button:has-text("Sign up")')
    await buttonSignUp.click();

} catch (error) {
    console.error('Test failed with error:', error);
    throw error;
}

});
