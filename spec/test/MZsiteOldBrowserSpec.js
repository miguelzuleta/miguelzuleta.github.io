import puppeteer from 'puppeteer'
import path from 'path'
import fs from 'fs'

describe("MZsite old browser runs", () => {
	let mzSite = path.join(__dirname, `/../../components/js/MZsite.js`);

	let originalFileData = '';
	let browser;
	let page;
	let waitOptions = {
		visible: true,
		timeout: 500
	}

	let renderSections = {
		old: {
			msg: "old browser class",
			selector: "body.old-browser"
		},
		msg: {
			msg: "old browser message",
			selector: "main .msg"
		}
	}

	beforeAll(async () => {
		let getFileContent = new Promise(resolve => {
			fs.readFile(mzSite, 'utf8', (err, data) => {
				originalFileData = data;
				let switchFetch = data.replace(/\!self\.fetch/m, 'self.fetch');

				fs.writeFile(mzSite, switchFetch, err => {
					if (err) throw err

					setTimeout(() => {
						resolve();
					}, 1000)
				})
			})
		})

		await getFileContent;

		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('http://localhost:8080/');
	})

	afterAll(() => {
		fs.writeFile(mzSite, originalFileData, err => {
			if (err) {
				console.log('ERROR', err)
			}
		});

		console.log(' page is closing')
		page.close();
	})

	for (let section in renderSections) {
		let { msg, selector } = renderSections[section];

		it(`renders ${msg}`, async () => {
			let sectionLoad = await page.waitForSelector(selector, waitOptions);

			expect(sectionLoad !== null).toBe(true);
		})
	}

})
