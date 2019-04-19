import puppeteer from 'puppeteer'
import path from 'path'
import fs from 'fs'

describe("Rendered page sections", () => {
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

	describe('Load sections on modern browsers', () => {
		beforeAll(async () => {
			browser = await puppeteer.launch({ headless: true });
			page = await browser.newPage();
			await page.goto('http://localhost:8080/');
		})

		afterAll(() => {
			page.close();
		})

		for (let section in sections) {
			let { msg, selector } = sections[section];

			it(`renders ${msg}`, async () => {
				let sectionLoad = await page.waitForSelector(selector, waitOptions);

				expect(sectionLoad !== null).toBe(true);
			})

		}
	})

})
