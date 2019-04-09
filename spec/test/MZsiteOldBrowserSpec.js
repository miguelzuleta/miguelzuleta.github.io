import puppeteer from 'puppeteer'
import path from 'path'
import fs from 'fs'
import { exec } from 'child_process'

// let getFileContent = new Promise(resolve => {
// 		fs.readFile(__dirname + '/../../components/js/MZsite.js', (err, data) => {
// 			console.log(err)
// 			console.log(data)
// 			return resolve(data);
// 		})
// 	})

describe("TESTING IE RENDER", () => {
	let mzSite = path.join(__dirname, `/../../components/js/MZsite.js`);
	// let testFolder = path.join(__dirname, '/../test-folder');
	// let jsFile = name => {
	// 	let devFile = path.join(__dirname, `/../../components/js/${name}.js`);
	// 	let testFile = devFile.replace('.js', '_test.js');

	// 	return {
	// 		dev: devFile,
	// 		test: testFile
	// 	}
	// };

	// let mzSite = jsFile('MZsite');

	// let jsFiles = {
	// 	mzSite: jsFile('MZsite'),
	// 	main: jsFile('main')
	// }

	// console.log(jsFiles)

	// let getFileContent;
	let originalFileData = '';
	let browser;
	let page;
	let waitOptions = {
		visible: true,
		timeout: 2000
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

	// let renderSections = {
	// 	page: {
	// 		msg: "page",
	// 		selector: "body.data-loaded"
	// 	},
	// 	bg: {
	// 		msg: "bg wrapper section",
	// 		selector: ".bg-wrap"
	// 	},
	// 	hero: {
	// 		msg: "hero section",
	// 		selector: ".hero-msg-wrap"
	// 	},
	// 	skills: {
	// 		msg: "skills section",
	// 		selector: ".skills.info"
	// 	},
	// 	exp: {
	// 		msg: "expirience section",
	// 		selector: ".exp.info"
	// 	},
	// 	codepen: {
	// 		msg: "codepen section",
	// 		selector: ".codepens.info"
	// 	},
	// 	contact: {
	// 		msg: "contact section",
	// 		selector: ".contact.info"
	// 	}
	// }

	// let getFileContent;

	// let dir = path.join(__dirname, '/../../components/js/MZsite.js');
	// console.log(dir)

	// let getFileContent = new Promise(resolve => {
	// 	fs.readFile(dir, (err, data) => {
	// 		console.log(err)
	// 		console.log(data)
	// 		return resolve(data);
	// 	})
	// })

	beforeAll(async () => {

		// let jsFile = name => path.join(__dirname, `/../../components/js/${name}.js`);
		// let jsFiles = {
		// 	mzSite: jsFile('MZsite'),
		// 	main: jsFile('main')
		// }

		// console.log("jsFile('MZsite')['dev']", jsFile('MZsite')['dev'])


		// let dir = path.join(__dirname, '/../../components/js/MZsite.js');
		// let testFolder = path.join(__dirname, '/../test-folder');
		// console.log("jsFiles['mzSite']", jsFiles['mzSite']);

		// // if (!fs.existsSync(testFolder)) {
		// // 	fs.mkdirSync(testFolder);
		// // }

		// for (let file in jsFiles) {
		// 	// console.log(file)
		// 	let newTestFile = jsFiles[file].replace('.js', '_test.js');
		// 	console.log(newTestFile, jsFiles[file]);
		// 	fs.copyFile(jsFiles[file], newTestFile, err => {
		// 		if (err) throw err;
		// 	})
		// }


		// let mzSite = jsFile('MZsite');

		// let generateTestFile = new Promise(resolve => {
		// 	fs.copyFile(mzSite.dev, mzSite.test, err => {
		// 		if (err) {
		// 			throw err;
		// 		} else {
		// 			resolve();
		// 		}
		// 	})
		// })

		// await generateTestFile;
		// console.log(newFileLocation)

		// let getFileContent = new Promise(resolve => {
		// 	fs.readFile(mzSite, 'utf8', (err, data) => {
		// 		// console.log(err)
		// 		originalFileData = data;
		// 		let switchFetch = data.replace(/\!self\.fetch/m, 'self.fetch');
		// 		// console.log(switchFetch);
		// 		return resolve(switchFetch);
		// 	})
		// })

		// // await getFileContent;

		// // console.log(getFileContent)

		// // let rewriteSelf = new Promise(resolve => {
		// // 	fs.writeFile(mzSite.dev, getFileContent, err => {
		// // 		if (err) {
		// // 			throw err
		// // 		} else {
		// // 			resolve();
		// // 		}
		// // 	})
		// // })

		// getFileContent.then(newData => {
		// 	fs.writeFile(mzSite, newData, err => {
		// 		if (err) throw err
		// 	})
		// })

		let getFileContent = new Promise(resolve => {
			fs.readFile(mzSite, 'utf8', (err, data) => {
				// console.log(err)
				originalFileData = data;
				// console.log('originalFileData', originalFileData);
				let switchFetch = data.replace(/\!self\.fetch/m, 'self.fetch');
				// console.log(switchFetch);

				fs.writeFile(mzSite, switchFetch, err => {
					if (err) throw err

					setTimeout(() => {
						resolve();
					}, 1000)
				})
			})
		})

		// getFileContent.then(newData => {
		// 	fs.writeFile(mzSite, newData, err => {
		// 		if (err) throw err
		// 	})
		// })

		await getFileContent;


		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('http://localhost:8080/');


		// browser = await puppeteer.launch({ headless: true });
		// page = await browser.newPage();
		// await page.goto('http://localhost:8080/');
	})

	afterAll(() => {
		// console.log('originalFileData', originalFileData);
		fs.writeFile(mzSite, originalFileData, err => {
			if (err) {
				console.log('ERROR', err)
			}
		});
		// console.log('page is closing')
		// let deleteModifiedFile = new Promise(resolve => {
		// 	exec(`rm -rf ${mzSite.dev}`, (err, stdout, stderr) => {
		// 		if (err) {
		// 			throw err;
		// 		} else {
		// 			resolve();
		// 		}
		// 	})
		// })

		// deleteModifiedFile.then(() => {
		// 	fs.rename(mzSite.test, mzSite.dev, err => {
		// 		if (err) throw err;
		// 	})
		// })
		console.log(' page is closing')
		page.close();
	})

		for (let section in renderSections) {
	// it('GETS MAGIC', async () => {
		// let getFileContent = new Promise(resolve => {
		// 	fs.readFile(mzSite, 'utf8', (err, data) => {
		// 		// console.log(err)
		// 		originalFileData = data;
		// 		// console.log('originalFileData', originalFileData);
		// 		let switchFetch = data.replace(/\!self\.fetch/m, 'self.fetch');
		// 		// console.log(switchFetch);
		// 		resolve(switchFetch);
		// 	})
		// })

		// await getFileContent;

		// console.log(getFileContent)

		// let rewriteSelf = new Promise(resolve => {
		// 	fs.writeFile(mzSite.dev, getFileContent, err => {
		// 		if (err) {
		// 			throw err
		// 		} else {
		// 			resolve();
		// 		}
		// 	})
		// })

		// getFileContent.then(newData => {
		// 	fs.writeFile(mzSite, newData, err => {
		// 		if (err) throw err
		// 	})
		// })
		// getFileContent.then(data => {
		// 	console.log('data', data);
		// })
		// console.log('alskdmlaskdmlasmdlaksdmalsdkm8080808')

			let { msg, selector } = renderSections[section];

			it(`renders ${msg}`, async () => {
				let sectionLoad = await page.waitForSelector(selector, waitOptions);

				expect(sectionLoad !== null).toBe(true);
			})
	// })
		}

	// for (let section in renderSections) {
	// 	let { msg, selector } = renderSections[section];

	// 	it(`renders ${msg}`, async () => {
	// 		let sectionLoad = await page.waitForSelector(selector, waitOptions);

	// 		expect(sectionLoad !== null).toBe(true);
	// 	})
	// }

})
