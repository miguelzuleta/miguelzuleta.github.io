import render from './render'

let RenderSkills = (parent, dataObj) => {
	let { title, list } = dataObj

	let allSkills = () => {
		let skillList = ''

		for(let key in list) {
			skillList += `
				<li class="skills-list">
					<span class="skills-list-name"
						  data-score="${list[key]}"
						  style="width: ${list[key]}%;">
						  ${key}
					</span>
				</li>
			`
		}

		return skillList
	}

	let skillsMarkup = `
		<h4 class="info-title">${title}</h4>
		<ul>${allSkills()}</ul>
	`

	render({
		parent: parent,
		markup: skillsMarkup
	})
}

export default RenderSkills
