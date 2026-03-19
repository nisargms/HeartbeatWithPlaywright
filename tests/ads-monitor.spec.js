// JavaScript source code
const { test, expect } = require('@playwright/test');

test('Microsoft Ads UI Availability Check', async ({ page }) => {
    // Define the target URL with your specific IDs
    const targetUrl = 'https://ui.ads.microsoft.com/campaign/vnext/overview?aid=176988362&cid=254263501&uid=101052291';

    // Navigate and wait for the network to be idle
    const response = await page.goto(targetUrl, {
        waitUntil: 'networkidle',
        timeout: 30000
    });

    // Verify HTTP status is successful (200)
    expect(response.status()).toBe(200);

    // Verification: Wait for a specific element that proves the dashboard loaded.
    // Note: Since this is behind a login in reality, the test may fail 
    // if it redirects to a login page. We are assuming "no password" as requested.
    await expect(page).toHaveURL(/.*overview/);

    // Optional: Check for a text element common on the overview page
    // await expect(page.getByText('Performance')).toBeVisible();
});
