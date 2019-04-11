import rotatingBG from '../../../components/js/helpers/rotatingBG.js'
import puppeteer from 'puppeteer'

describe('Dimensions of rotating hero background', () => {

	let browser;
	let page;
	// this.computedStyles = 76543;

	// let computedStyles = el => {
	// 	let getStyles = JSON.parse(JSON.stringify(getComputedStyle(el)));

	// 	return {
	// 		width: parseFloat(getStyles.width),
	// 		height: parseFloat(getStyles.height),
	// 		top: parseFloat(getStyles.top),
	// 		left: parseFloat(getStyles.left)
	// 	};
	// }

	beforeEach(async () => {
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('http://localhost:8080/');

		// computedStyles = el => {
		// 	let getStyles = JSON.parse(JSON.stringify(getComputedStyle(el)));

		// 	return {
		// 		width: parseFloat(getStyles.width),
		// 		height: parseFloat(getStyles.height),
		// 		top: parseFloat(getStyles.top),
		// 		left: parseFloat(getStyles.left)
		// 	};
		// }
		// console.log(this.computedStyles)
	})

	afterEach(() => {
		page.close();
	})

	it('calculates page at 1000px X 1000px', async () => {
		await page.setViewport({ width: 1000, height: 1000 });

		let styles = await page.$eval('.bg-square', el => {

			// return computedStyles(el);
			// console.log(computedStyles);

			let getStyles = JSON.parse(JSON.stringify(getComputedStyle(el)));
			// console.log(getStyles)

			return {
				width: parseFloat(getStyles.width),
				height: parseFloat(getStyles.height),
				top: parseFloat(getStyles.top),
				left: parseFloat(getStyles.left)
			};
		});

		expect(styles).toEqual({
			width: 1414.2,
			height: 1414.2,
			top: -207.107,
			left: -207.107
		});
	})

	it('calculates page at 1500px X 500px', async () => {
		await page.setViewport({ width: 1500, height: 500 });

		let styles = await page.$eval('.bg-square', el => {

			let getStyles = JSON.parse(JSON.stringify(getComputedStyle(el)));
			// console.log(this.computedStyles)

			return {
				width: parseFloat(getStyles.width),
				height: parseFloat(getStyles.height),
				top: parseFloat(getStyles.top),
				left: parseFloat(getStyles.left)
			};
		});

		expect(styles).toEqual({
			width: 1581.12,
			height: 1581.12,
			top: -540.569,
			left: -40.5694
		});
	})
})
