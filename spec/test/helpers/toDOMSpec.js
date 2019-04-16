// import toDOM from '../../../components/js/helpers/toDOM.js'
import puppeteer from 'puppeteer'
// console.log(global)
// let jsdom = require('jsdom').JSDOM;

describe('Elements appended to DOM via object', function() {
	let browser;
	let page;
	// let addP = parent => {
	// 	toDOM({
	// 		parent: parent,
	// 		child: [{
	// 			elem: 'p',
	// 			text: 'testing'
	// 		}]
	// 	})
	// }
	// let some;
	// this.somethingAMAZIIIIIIIING = '6r5fytguhjnk'

	// let _this = this
	// console.log('this.somethingAMAZIIIIIIIING', this.somethingAMAZIIIIIIIING)

	beforeAll(async () => {
		// some = 'this is SOME'
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('about:blank');
		// await page.addScriptTag({ content: openBlank().nalls });
		// await page.exposeFunction('addP1', addP())
		// console.log(addP1())
	})

	afterAll(() => {
		page.close();
	})

	describe('fuck', () => {

		beforeAll(async () => {
			// await page.addScriptTag({ content: `
					
			// 		let test = function(el, txt) {
			// 			let newEl = document.createElement('p');
			// 			newEl.innerHTML = txt;
			// 			el.appendChild(newEl);
			// 		}

			// 	` })
			// await page.addScriptTag({ path: './spec/helpers/emphasis.js' })
			// await page.addScriptTag({ path: './spec/helpers/toDOM.js' })
			await page.addScriptTag({ path: './spec/helpers/expose.built.js' })
			// await page.addScriptTag({ content: `
					
			// 		let test = function(el, txt) {
			// 			let newEl = document.createElement('p');
			// 			newEl.innerHTML = txt;
			// 			el.appendChild(newEl);
			// 		}

			// 	` })
			// await page.addScriptTag({ content: `alert('ksjdnfksjdn')`})
		})

		it('grabs', async () => {
			// await page.exposeFunction('addP', parent => {
			// 	return toDOM({
			// 			parent: parent,
			// 			child: [{
			// 				elem: 'p',
			// 				text: 'testing'
			// 			}]
			// 		})
			// })

			let html = await page.$eval('html', el => {
				// console.log('yay running inside a browser')

				// dom = new jsdom(document.documentElement.innerHTML);
				// window = dom.window;

				// let bod = document.querySelector('body');
				// console.log(bod)

				// console.log('windowWWWWWWWWW')
				// console.log(window)

				// test(bod, 'this is test text')
				// test(bod, 'this is test text 2222')
				// test(bod, 'this is test text 3333')

				// let scriptTag = document.createElement('script');
				// scriptTag.type = "text/javascript";
				// scriptTag.text = `toDOM({
				// 					parent: bod,
				// 					child: [{
				// 						elem: 'p',
				// 						text: 'testing'
				// 					}]
				// 				})`;

				// document.body.appendChild(scriptTag);

				// await page.addScriptTag({ content: `toDOM({
				// 					parent: document.querySelector('html'),
				// 					child: [{
				// 						elem: 'p',
				// 						text: 'testing'
				// 					}]
				// 				})` })

				// addP(bod);

				// await page.exposeFunction('addP', addP(bod))

				// console.log('this.somethingAMAZIIIIIIIING INSIDE IT', _this.somethingAMAZIIIIIIIING)
				// addP(bod);

				// let addP = parent => {
				// 	toDOM({
				// 		parent: parent,
				// 		child: [{
				// 			elem: 'p',
				// 			text: 'testing'
				// 		}]
				// 	})
				// }

				// addP(bod);
				// console.log(toDOM())
				// console.log(document.documentElement.innerHTML)

				toDOM({
					parent: 'body',
					child: [{
						elem: 'p',
						text: 'testing'
					}]
				})

				toDOM({
					parent: 'body',
					child: [{
						elem: 'section',
						text: 'MORE TESTINGS'
					}]
				})

				return el.innerHTML;
				// return `${document.documentElement.innerHTML} O0O0O0O0O0 ${bod}`;
			})

			console.log(html);

			// let getBod = await page.$('html');
			// console.log(getBod)
		})
	})

	
})


/*


CHECK USER AGENT

browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--user-agent="Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"']});
page = await browser.newPage();
await page.goto('https://some.page.com', {waitUntil: 'load'});
await page.exposeFunction('foo', (e) => { console.log("Received " + e); });
var bar = page.addScriptTag({path: '/home/user/node/bar.js'});
browser.close();


*/

