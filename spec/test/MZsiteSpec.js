import puppeteer from 'puppeteer'
import path from 'path'
import fs from 'fs'

describe("Load sections of the page", () => {
	let mzSite = path.join(__dirname, `/../../components/js/MZsite.js`);
	let originalFileData = '';

	let browser;
	let page;
	let waitOptions = {
		visible: true,
		timeout: 500
	}

	let sections = {
		page: {
			msg: "page",
			selector: "body.data-loaded"
		},
		bg: {
			msg: "bg wrapper section",
			selector: ".bg-wrap"
		},
		hero: {
			msg: "hero section",
			selector: ".hero-msg-wrap"
		},
		skills: {
			msg: "skills section",
			selector: ".skills.info"
		},
		exp: {
			msg: "expirience section",
			selector: ".exp.info"
		},
		codepen: {
			msg: "codepen section",
			selector: ".codepens.info"
		},
		contact: {
			msg: "contact section",
			selector: ".contact.info"
		}
	}

	let oldBrowserSections = {
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
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('http://localhost:8080/');
	})

	afterAll(() => {
		page.close();
	})

	describe('Load sections on modern browsers', () => {
		for (let section in sections) {
			let { msg, selector } = sections[section];

			it(`renders ${msg}`, async () => {
				let sectionLoad = await page.waitForSelector(selector, waitOptions);

				expect(sectionLoad !== null).toBe(true);
			})

		}
	})

	// describe('Load fallback on super old browsers', () => {
	// 	beforeAll(() => {
	// 		fs.readFile(mzSite, 'utf8', (err, data) => {
	// 			originalFileData = data;
	// 			let switchFetch = data.replace(/\!self\.fetch/m, 'self.fetch');

	// 			fs.writeFile(mzSite, switchFetch, err => {
	// 				if (err) throw err
	// 			})
	// 		})
	// 	})

	// 	afterAll(() => {
	// 		fs.writeFile(mzSite, originalFileData, err => {
	// 			if (err) throw err
	// 		});
	// 	})

	// 	for (let section in oldBrowserSections) {
	// 		let { msg, selector } = oldBrowserSections[section];

	// 		it(`renders ${msg}`, async () => {
	// 			let sectionLoad = await page.waitForSelector(selector, waitOptions);

	// 			expect(sectionLoad !== null).toBe(true);
	// 		})

	// 	}
	// })

})
