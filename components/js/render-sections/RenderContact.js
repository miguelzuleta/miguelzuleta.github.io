import toDOM from '../helpers/toDOM'

let RenderContact = dataObj => {
	let { title, info } = dataObj
	let infoList = []

	for(let key in info) {
		infoList.push({
			elem: 'li',
			child: [{
				elem: 'a',
				attrs: {
					class: 'bar-list contact-list-item',
					target: '_blank',
					href: info[key]
				},
				text: key
			}]
		})
	}

	let contactData = {
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
					attrs: { class: 'contact-list' },
					child: infoList
				}]
			}]
		}]
	}

	toDOM(contactData)
}

export default RenderContact
