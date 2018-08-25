import toDOM from '../helpers/toDOM'
import sectionWrap from '../site-modules/section-wrap'

let RenderContact = dataObj => {
	let { title, info } = dataObj
	let contactList = []

	for(let key in info) {
		contactList.push({
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

	let contactData = sectionWrap('contact', title, contactList)

	toDOM(contactData)
}

export default RenderContact
