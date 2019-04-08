import { BODY } from './helpers/constants.js'

import RenderBg from './render-sections/RenderBg.js'
import RenderHero from './render-sections/RenderHero.js'
import RenderSkills from './render-sections/RenderSkills.js'
import RenderExp from './render-sections/RenderExp.js'
import RenderCodepens from './render-sections/RenderCodepens.js'
import RenderContact from './render-sections/RenderContact.js'
import RenderOldBrowserMsg from './render-sections/RenderOldBrowserMsg.js'

import rotatingBG from './helpers/rotatingBG.js'

let MZsite = () => {
	let init = () => {
		if (!self.fetch) {
			RenderOldBrowserMsg()
		} else {
			_renderSections()
		}

		// return 9
	}

	let _fetchData = jsonFile => {
		let data = fetch(jsonFile)
			.then(response => response.json())
			.then(content => content)

		return Promise.resolve(data)
	}

	let _renderSections = () => {
		_fetchData('./data.json').then(dataObj => {
			let { hero, skills, exp, codepens, contact } = dataObj

			RenderBg()
			RenderHero(hero)
			RenderSkills(skills)
			RenderExp(exp)
			RenderCodepens(codepens)
			RenderContact(contact)

			BODY.classList.add('data-loaded')

			if (_isIE()) {
				BODY.classList.add('ie')
				return
			}

			let bgSquare = document.querySelector('.bg-square')
			_handleBgRotation(bgSquare)
		})
	}

	let _handleBgRotation = elem => {
		let rotateBG = () => rotatingBG(elem)

		rotateBG()
		window.addEventListener('resize', rotateBG)
	}

	let _isIE = () => {
		let isIE = !!document.documentMode || (!isIE && !!window.StyleMedia)

		return isIE
	}

	return { init }
}

export default MZsite
