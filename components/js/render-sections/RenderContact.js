import render from '../render'

let RenderContact = (parent, dataObj) => {
	let { title, info } = dataObj

	let allInfo = () => {
		let infoList = ''

		for(let key in info) {
			console.log(key)
			infoList += `
				<li>
					<a href="${info[key]}" class="bar-list contact-list-item" target="_blank">
						${key}
					</a>
				</li>
			`
		}

		return infoList
	}

	let skillsMarkup = `
		<div class="info-wrap">
			<h4 class="info-title">${title}</h4>
			<ul class="contact-list">${allInfo()}</ul>
		</div>
	`

	render({
		parent: parent,
		markup: skillsMarkup
	})
}

export default RenderContact
