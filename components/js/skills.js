import loop from './loop.js'

let skills = dataContext => {
	let { title, list } = dataContext

	let allSkills = `
		<li class="skill">
			<span class="skill-name">[key]</span>
			<span class="skill-score">[value]</span>
		</li>
	`
	return `
		<h4>${title}</h4>
		<ul>
			${loop(list, allSkills)}
		</ul>
	`
}

export default skills
