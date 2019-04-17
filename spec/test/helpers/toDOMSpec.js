import puppeteer from 'puppeteer'
import path from 'path'

describe('Elements appended to DOM via object', function() {
	let testFile = path.join('file://', __dirname, `/../../helpers/toDOM.html`);
	let browser;
	let page;

	beforeAll(async () => {

		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto(testFile);
	})

	afterAll(() => {
		page.close();
	})

	it('loads correct text in element', async () => {
		let sectionText = await page.$eval('section', el => el.innerHTML);

		expect(sectionText).toBe('toDOM text');
	})

	it('_', async () => {
		let sectionText = await page.$eval('body', el => el.innerHTML);

		console.log(sectionText)
	})

})
