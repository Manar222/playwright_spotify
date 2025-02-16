import { test,expect } from "@playwright/test";
import { text } from "stream/consumers";
test.beforeEach(
    async({page})=>{
        await page.goto('https://www.spotify.com/login/')

        await page.locator('#login-username').fill('menna35378@me.com')
        await page.locator('#login-password').fill('eqFjp3xUuHFe3W')

        const buttonLogin = await page.locator('button:has-text("Log In")')
        await buttonLogin.click()
        await expect(page.locator('span', { hasText: 'Spotify' })).toBeVisible()
        await page.locator('a:has-text("Egypt (English)")').click();

    }
)
test("Spotify Add Playlist Test", async ({ page }) => {

    try {
        await page.goto('https://open.spotify.com/?flow_ctx=806afb2f-bc66-41ec-8021-33a923236bf8%3A1739683782')
       const Playlist= await page.getByRole('button', { name: 'Create playlist or folder' })
       await Playlist.click();
       await page.getByRole('menuitem', { name: 'Create a new playlist' }).click();
       const search =await page.getByRole('searchbox')

       const addSongToPlaylist = async (songName: string) => {
        await search.fill(songName);
            await page.waitForTimeout(3000); // Allow results to load
            console.log(`Searching for: ${songName}`);

            // Ensure the song appears in results
            const songItem = page.locator('div[data-testid="tracklist-row"]').filter({ hasText: songName }).first();
            await songItem.waitFor();
            
             await songItem.getByRole('button',{ name: 'Add' }).click();
            console.log(`${songName} added successfully!`);
    };
    await addSongToPlaylist('سورة البقرة');
    await addSongToPlaylist('سورة الكهف');
    await addSongToPlaylist('سورة يس');


    console.log("Songs added successfully!");

    const button = await page.getByRole('button').first();
    await button.click();
console.log("Playlist is now playing!");


} catch (error) {
    console.error('Test failed with error:', error);
    throw error;
}

});


    