import toDOM from '../helpers/toDOM'

let RenderSkills = dataObj => {
	let { title, list } = dataObj

	let skillList = []

	for(let key in list) {
		skillList.push({
			elem: 'li',
			child: [{
				elem: 'span',
				attrs: {
					class: 'bar-list skills-list-item',
					'data-score': list[key],
					style: `width: ${list[key]}%;`
				},
				text: key
			}]
		})
	}

	let skillsData = {
		parent: 'main',
		child: [{
			elem: 'section',
			attrs: { class: 'skills info'},
			child: [{
				elem: 'div',
				attrs: { class: 'info-wrap' },
				child: [{
					elem: 'h4',
					attrs: { class: 'info-title' },
					text: title
				}, {
					elem: 'ul',
					attrs: { class: 'skills-list' },
					child: skillList
				}]
			}]
		}]
	}

	toDOM(skillsData)
}

export default RenderSkills
