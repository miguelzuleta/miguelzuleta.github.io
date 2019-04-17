import puppeteer from 'puppeteer'
import path from 'path'

describe('Elements appended to DOM via object', function() {
	let testFile = path.join('file://', __dirname, `/../../helpers/toDOM.html`);
	let browser;
	let page;
	let waitOptions = {
		visible: true,
		timeout: 500
	}

	beforeAll(async () => {

		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto(testFile);
	})

	afterAll(() => {
		page.close();
	})

	it('appends custom class attribute', async () => {
		let domClass = await page.$eval('section', el => el.getAttribute('class'));

		expect(domClass).toBe('to-dom-class');
	})

	it('appends custom id attribute', async () => {
		let domID = await page.$eval('section', el => el.getAttribute('id'));

		expect(domID).toBe('to-dom-id');
	})

	it('loads correct text in element', async () => {
		let sectionText = await page.$eval('section', el => el.innerHTML);

		expect(sectionText).toBe('toDOM text');
	})

	it('loads a list', async () => {
		let asideList = await page.$$eval('ul .list-elem', el => el.length);

		expect(asideList).toBeGreaterThan(0);
		expect(asideList).not.toBe(null);
	})

	it('loads a list', async () => {
		let elem0 = await page.$eval('.list-elem-0', el => el.innerHTML);

		expect(elem0).toBe('element 0');
	})

	it('_', async () => {
		let sectionText = await page.$eval('body', el => el.innerHTML);

		console.log(sectionText)
	})

})
