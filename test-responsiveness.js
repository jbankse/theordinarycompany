const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const URL = 'http://localhost:3000';
const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  for (const vp of VIEWPORTS) {
    console.log(`Testing ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    
    try {
      await page.goto(URL, { waitUntil: 'networkidle' });
      // Wait a bit for animations to settle
      await page.waitForTimeout(2000);
      
      await page.screenshot({ 
        path: path.join(screenshotsDir, `homepage-${vp.name}-full.png`),
        fullPage: true 
      });
      console.log(`Saved screenshot for ${vp.name}`);
    } catch (e) {
      console.error(`Failed to test ${vp.name}:`, e);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Done!');
}

run();
