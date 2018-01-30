import loop from './loop.js'

let skills = dataContext => {
	let { title, list } = dataContext

	let allSkills = `
		<p>[key]</p>
		<h2>[value]</h2>
		<p>- - - - - -</p>
	`
	return `
		<h4>${title}</h4>
		${loop(list, allSkills)}
	`
}

export default skills
