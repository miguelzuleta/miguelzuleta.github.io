import rotatingBG from '../../../components/js/helpers/rotatingBG.js'
import puppeteer from 'puppeteer'

describe('Dimensions of rotating hero background', () => {

	let browser;
	let page;
	let viewports = [
		{
			width: 1000,
			height: 1000,
			expectation: {
				width: 1414.2,
				height: 1414.2,
				top: -207.107,
				left: -207.107
			}
		},
		{
			width: 1500,
			height: 500,
			expectation: {
				width: 1581.12,
				height: 1581.12,
				top: -540.569,
				left: -40.5694
			}
		},
		{
			width: 400,
			height: 1050,
			expectation: {
				width: 1123.61,
				height: 1123.61,
				top: -36.8051,
				left: -361.805
			}
		}
	];

	beforeEach(async () => {
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('http://localhost:8080/');
	})

	afterEach(() => {
		page.close();
	})

	viewports.forEach(viewport => {
		let { width, height, expectation } = viewport;

		xit(`calculates dimensions with browser at ${width}px X ${height}px`, async () => {
			await page.setViewport({ width: width, height: height });

			let styles = await page.$eval('.bg-square', el => {
				let getStyles = JSON.parse(JSON.stringify(getComputedStyle(el)));

				return {
					width: parseFloat(getStyles.width),
					height: parseFloat(getStyles.height),
					top: parseFloat(getStyles.top),
					left: parseFloat(getStyles.left)
				};
			});

			expect(styles).toEqual(expectation);
		})
	})
})
