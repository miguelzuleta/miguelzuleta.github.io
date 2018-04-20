import render from '../helpers/render'

let RenderSkills = (parent, dataObj) => {
	let { title, list } = dataObj

	let allSkills = () => {
		let skillList = ''

		for(let key in list) {
			skillList += `
				<li>
					<span class="bar-list skills-list-item"
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
		<div class="info-wrap">
			<h4 class="info-title">${title}</h4>
			<ul class="skills-list">${allSkills()}</ul>
		</div>
	`

	render({
		parent: parent,
		markup: skillsMarkup
	})
}

export default RenderSkills
