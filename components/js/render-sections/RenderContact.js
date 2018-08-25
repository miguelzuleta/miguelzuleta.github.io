import toDOM from '../helpers/toDOM'
import sectionWrap from '../site-modules/section-wrap'

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

	let contactData = sectionWrap('contact', title, infoList)

	toDOM(contactData)
}

export default RenderContact
