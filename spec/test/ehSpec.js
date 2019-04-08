// var jsdom = require("jsdom");

// window = jsdom.jsdom('<html><head></head><body><div id="rondavu_container"></div></body></html>').createWindow();

// if(Object.keys(window).length === 0) {
//     // this hapens if contextify, one of jsdom's dependencies doesn't install correctly
//     // (it installs different code depending on the OS, so it cannot get checked in.);
//     throw "jsdom failed to create a usable environment, try uninstalling and reinstalling it";
// }

// global.window = window;

// global.document = window.document;

import puppeteer from 'puppeteer'
// import MZsite from '../../site/js.js'
// import MZsite from '../../components/js/MZsite.js'
// import fetchData from '../../components/js/MZsite.js'
// import fetch from 'node-fetch'
// import promisedData from '../../site/data.json'

describe("MZsite runs", function() {
	let browser;
	let page;
	let waitOptions = {
		visible: true,
		timeout: 500
	}

	let renderSections = {
		page: {
			msg: "renders page",
			selector: "body.data-loaded"
		},
		bg: {
			msg: "renders bg wrapper section",
			selector: ".bg-wrap"
		},
		hero: {
			msg: "renders hero section",
			selector: ".hero-msg-wrap"
		},
		skills: {
			msg: "renders skills section",
			selector: ".skills.info"
		},
		exp: {
			msg: "renders expirience section",
			selector: ".exp.info"
		},
		codepen: {
			msg: "renders codepen section",
			selector: ".codepens.info"
		},
		contact: {
			msg: "renders contact section",
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

		it(msg, async () => {
			let sectionLoad = await page.waitForSelector(selector, waitOptions);

			expect(sectionLoad !== null).toBe(true);
		})
	}

});
