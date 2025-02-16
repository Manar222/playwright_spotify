import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('Spotify Login Test', async ({ page }) => {

    try {
        await page.goto('https://www.spotify.com/login/')

        await page.locator('#login-username').fill('menna35378@me.com')
        await page.locator('#login-password').fill('eqFjp3xUuHFe3W')

        const buttonLogin = await page.locator('button:has-text("Log In")')
        await buttonLogin.click()
        await expect(page.locator('span', { hasText: 'Spotify' })).toBeVisible()
        await page.locator('a:has-text("Egypt (English)")').click();
        await expect(page.getByRole('link', { name: 'Spotify' })).toBeVisible();
        //await expect( page.locator('a[href*="spotify.com"]:has-text("Spotify")')).toBeVisible();

        //await page.getByText('Spotify').click();



    } catch (error) {
        console.error('Test failed with error:', error);
        throw error;
    }
})