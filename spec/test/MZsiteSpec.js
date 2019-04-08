import puppeteer from 'puppeteer'

describe("MZsite runs", function() {
	let browser;
	let page;
	let waitOptions = {
		visible: true,
		timeout: 500
	}

	let renderSections = {
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

	beforeAll(async () => {
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('http://localhost:8080/');
	});

	for (let section in renderSections) {
		let { msg, selector } = renderSections[section];

		it(`renders ${msg}`, async () => {
			let sectionLoad = await page.waitForSelector(selector, waitOptions);

			expect(sectionLoad !== null).toBe(true);
		})
	}

});
