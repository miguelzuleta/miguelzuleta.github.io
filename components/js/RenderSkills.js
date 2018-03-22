import render from './render'

let RenderSkills = (parent, dataObj) => {
	let { title, list } = dataObj

	let allSkills = () => {
		let skillList = ''

		for(let key in list) {
			skillList += `
				<li class="skill">
					<span class="skill-name">${key}</span>
					<span class="skill-score">${list[key]}</span>
				</li>
			`
		}

		return skillList
	}

	let skillsMarkup = `
		<h4>${title}</h4>
		<ul>${allSkills()}</ul>
	`

	render({
		parent: parent,
		markup: skillsMarkup
	})
}

export default RenderSkills
