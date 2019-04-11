import rotatingBG from '../../../components/js/helpers/rotatingBG.js'
import puppeteer from 'puppeteer'

describe('Calculate dimensions of rotating background based on browser dimensions', () => {

	let browser;
	let page;

	let computedStyles = el => {
		let getStyles = JSON.parse(JSON.stringify(getComputedStyle(el)));

		return {
			width: parseFloat(getStyles.width),
			height: parseFloat(getStyles.height),
			top: parseFloat(getStyles.top),
			left: parseFloat(getStyles.left)
		};
	}

	// beforeAll(async () => {
	// 	browser = await puppeteer.launch({ headless: false });
	// 	page = await browser.newPage();
	// 	await page.goto('http://localhost:8080/');
	// })

	afterAll(() => {
		page.close();
	})

	describe('calculate dimensions', () => {

		beforeAll(async () => {
			browser = await puppeteer.launch({ headless: false });
			page = await browser.newPage();
			await page.goto('http://localhost:8080/');
			await page.setViewport({ width: 1000, height: 1000 });
		})

		it('calculates page at 1000px X 1000px', async () => {
			// await page.setViewport({ width: 1000, height: 1000 });

			let styles = await page.$eval('.bg-square', el => {

				let getStyles = JSON.parse(JSON.stringify(getComputedStyle(el)));
				console.log(getStyles)

				return {
					width: parseFloat(getStyles.width),
					height: parseFloat(getStyles.height),
					top: parseFloat(getStyles.top),
					left: parseFloat(getStyles.left)
				};

				// return computedStyles(el);
			});

			// console.log(styles)

			expect(styles).toEqual({
				width: 1414.2,
				height: 1414.2,
				top: -207.107,
				left: -207.107
			});
		})
	})

	describe('calculate dimensions 2', () => {

		beforeAll(async () => {
			browser = await puppeteer.launch({ headless: false });
			page = await browser.newPage();
			await page.goto('http://localhost:8080/');
			await page.setViewport({ width: 1500, height: 500 });
		})

		it('calculates page at 1500px X 500px', async () => {
			// await page.setViewport({ width: 1000, height: 1000 });

			let styles = await page.$eval('.bg-square', el => {

				let getStyles = JSON.parse(JSON.stringify(getComputedStyle(el)));
				console.log(getStyles)

				return {
					width: parseFloat(getStyles.width),
					height: parseFloat(getStyles.height),
					top: parseFloat(getStyles.top),
					left: parseFloat(getStyles.left)
				};

				// return computedStyles(el);
			});

			// console.log(styles)

			expect(styles).toEqual({
				width: 1581.12,
				height: 1581.12,
				top: -540.569,
				left: -40.5694
			});
		})
	})

	// it('calculates dimensions with page at 1500px X 500px', async () => {
	// 	await page.setViewport({ width: 1500, height: 500 });

	// 	let styles = await page.$eval('.bg-square', el => {

	// 		let getStyles = JSON.parse(JSON.stringify(getComputedStyle(el)));

	// 		return {
	// 			width: parseFloat(getStyles.width),
	// 			height: parseFloat(getStyles.height),
	// 			top: parseFloat(getStyles.top),
	// 			left: parseFloat(getStyles.left)
	// 		};

	// 		// return computedStyles(el);
	// 	});

	// 	expect(styles).toEqual({
	// 		width: 1581.12,
	// 		height: 1581.12,
	// 		top: -540.569,
	// 		left: -40.5694
	// 	});
	// })
})
