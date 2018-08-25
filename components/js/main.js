import RenderBg from './render-sections/RenderBg.js'
import RenderHero from './render-sections/RenderHero.js'
import RenderSkills from './render-sections/RenderSkills.js'
import RenderExp from './render-sections/RenderExp.js'
import RenderCodepens from './render-sections/RenderCodepens.js'
import RenderContact from './render-sections/RenderContact.js'
import detectOldBrowser from './helpers/detectOldBrowser.js'

import rotatingHero from './rotatingHero.js'
import { BODY } from './helpers/constants.js'

let isIE = !!document.documentMode || (!isIE && !!window.StyleMedia)

detectOldBrowser(BODY)

let data = fetch('./data.json')
			.then(response => response.json())
			.then(content => content)

let dataReceived = Promise.resolve(data)


dataReceived.then(dataObj => {
	let { hero, skills, exp, codepens, contact } = dataObj

	RenderBg()
	RenderHero(hero)
	RenderSkills(skills)
	RenderExp(exp)
	RenderCodepens(codepens)
	RenderContact(contact)

	BODY.classList.add('data-loaded')

	if(isIE) {
		BODY.classList.add('ie')
		return
	}

	rotatingHero()
	window.addEventListener('resize', rotatingHero)
})
