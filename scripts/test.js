'use strict';

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const testPageFile = path.resolve(__dirname, '../test/fixtures/index.html');
const featDir = './src/';
const testDir = './test/';
const assert = require('assert');

fs.readdir(
  testDir,
  { encoding: 'utf8', withFileTypes: true },
  (error, files) => {
    files.forEach(file => {
      if (typeof file !== 'object') {
        throw new Error('use node >= 10.0.0');
      }
      if (file.isFile && file.name.endsWith('.test.js')) {
        const featFile = fs.readFileSync(`${featDir}${file.name.replace('.test', '')}`, 'utf8');
        const testFile = fs.readFileSync(`${testDir}${file.name}`, 'utf8');

        fs.writeFile(testPageFile, `<script>\n${featFile}\n${testFile}</script>\n`, () => {
          puppeteer.launch().then(async browser => {
            const page = await browser.newPage();
            page.on('pageerror', err => {
              console.info(err);
            });
            await page.goto(`file://${testPageFile}`);
            await browser.close();
          });
        });
      }
    });
});

