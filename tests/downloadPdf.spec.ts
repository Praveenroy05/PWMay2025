import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test('Download and validate PDF file', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
  await page.getByRole('button', { name: 'Generate and Download PDF File' , exact : true}).click({ timeout: 10000});

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download PDF File' }).click();
  const download = await downloadPromise;

  const downloadsDir = path.join(__dirname, '../downloads');

  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir);
  }
  const filePath = path.join(downloadsDir, await download.suggestedFilename());
  await download.saveAs(filePath);

  // 6. Validate the PDF download is successful
  expect(fs.existsSync(filePath)).toBeTruthy();
  expect(filePath).toContain(('.pdf'));
});
