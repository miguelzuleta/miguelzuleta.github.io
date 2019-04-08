import puppeteer from 'puppeteer'
import MZsite from '../../components/js/MZsite.js'

describe("MZsite runs", function() {
	let browser;
	let page;

	beforeAll(async () => {
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('https://miguelzuleta.com');
	});

	it("page renders", async () => {
		let pageLoads = await page.waitForSelector('body.data-loaded', {
			visible: true,
			timeout: 500
		 })

		expect(pageLoads !== null).toBe(true);
	})

	it("init() exists", () => {
		expect(MZsite().init()).not.toBe(null);
	});

	it("init() returns number", () => {
		expect(MZsite().init()).toBe(9);
	});

});
