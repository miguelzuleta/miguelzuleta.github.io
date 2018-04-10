import RenderHero from './RenderHero.js'
import RenderSkills from './RenderSkills.js'
import RenderExp from './RenderExp.js'

let data = fetch('./data.json')
			.then(response => response.json())
			.then(body => body)

let dataReceived = Promise.resolve(data)

let heroDimensions = () => {
	let windowH = window.innerHeight
	let windowW = window.innerWidth
	let largerAxis = Math.max(windowH, windowW)
	let elemHypotenuse = Math.hypot(windowH, windowW)
	let elemDimensions = largerAxis + (elemHypotenuse - largerAxis)
	let bg = document.querySelector('.bg-wrap .bg')

	bg.style.cssText = `width: ${elemDimensions}px; height: ${elemDimensions}px;`
}

dataReceived.then(dataObj => {
	let { hero, skills, exp } = dataObj

	RenderHero('.hero', hero)
	RenderSkills('.skills', skills)
	RenderExp('.exp', exp)

	heroDimensions()
	window.addEventListener('resize', heroDimensions)
})
