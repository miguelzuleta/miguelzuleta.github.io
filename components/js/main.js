import RenderHero from './RenderHero.js'
import RenderSkills from './RenderSkills.js'
import RenderExp from './RenderExp.js'
import rotatingSquare from './rotatingSquare.js'

let data = fetch('./data.json')
			.then(response => response.json())
			.then(body => body)

let dataReceived = Promise.resolve(data)

dataReceived.then(dataObj => {
	let { hero, skills, exp } = dataObj

	RenderHero('.hero', hero)
	RenderSkills('.skills', skills)
	RenderExp('.exp', exp)

	rotatingSquare()
	window.addEventListener('resize', rotatingSquare)
})
