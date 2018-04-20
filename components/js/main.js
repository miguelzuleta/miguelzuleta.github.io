import RenderHero from './render-sections/RenderHero.js'
import RenderSkills from './render-sections/RenderSkills.js'
import RenderExp from './render-sections/RenderExp.js'
import RenderContact from './render-sections/RenderContact.js'
import detectOldBrowser from './helpers/detectOldBrowser.js'
import rotatingHero from './rotatingHero.js'

let body = document.querySelector('body')
let isIE = !!document.documentMode || (!isIE && !!window.StyleMedia)

detectOldBrowser(body)

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
