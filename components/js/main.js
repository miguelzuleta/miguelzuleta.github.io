import RenderHero from './render-sections/RenderHero.js'
import RenderSkills from './render-sections/RenderSkills.js'
import RenderExp from './render-sections/RenderExp.js'
import RenderContact from './render-sections/RenderContact.js'
import rotatingHero from './rotatingHero.js'

import render from './render'

let body = document.querySelector('body')
let isIE = !!document.documentMode || (!isIE && !!window.StyleMedia)

if (!self.fetch) {
	body.classList.add('old-browser')

	let oldBrowserMsg = `
		<div class="msg">
			<p>Hello! This is Miguel.</p>
			<p>This page didn't load because your browser is too old. :(</p>
			<p>Have you tried <a href="https://www.google.com/chrome/">Google Chrome</a>?</p>
		</div>
	`

	body.innerHTML = oldBrowserMsg

	throw new Error("Old Browser!")
}

let data = fetch('./data.json')
			.then(response => response.json())
			.then(body => body)

let dataReceived = Promise.resolve(data)


dataReceived.then(dataObj => {
	let { hero, skills, exp, contact } = dataObj

	RenderHero('.hero', hero)
	RenderSkills('.skills', skills)
	RenderExp('.exp', exp)
	RenderContact('.contact', contact)

	body.classList.add('data-loaded')

	if(isIE) {
		body.classList.add('ie')
		return
	}

	rotatingHero()
	window.addEventListener('resize', rotatingHero)
})
