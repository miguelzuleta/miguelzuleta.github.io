import puppeteer from 'puppeteer'
import MZsite from '../../components/js/MZsite.js'

describe("MZsite runs", function() {
	let browser;
	let page;

	beforeAll(async function() {
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('https://miguelzuleta.com');
		await page.waitForSelector('body.data-loaded', { visible: true })
		const pageHTML = await page.evaluate(() => {
			return document.querySelector('body').innerHTML;
		});
		console.log(pageHTML);
	});

	it("init() exists", function() {
		expect(MZsite().init()).not.toBe(null);
	});

	it("init() returns number", function() {
		expect(MZsite().init()).toBe(9);
	});

});
