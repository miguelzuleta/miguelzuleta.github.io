import toDOM from '../helpers/toDOM'
import pageSection from '../helpers/elemSection'

let RenderSkills = dataObj => {
	let { title, pens } = dataObj
	let pensList = []

	for(let key in pens) {
		pensList.push({
			elem: 'li',
			attrs: { class: 'pen' },
			child: [{
				elem: 'a',
				attrs: {
					class: 'pen-title',
					target: '_blank',
					href: `https://codepen.io/miguelzuleta/pen/${key}`
				}
			}, {
				elem: 'iframe',
				attrs: {
					src: `//codepen.io/miguelzuleta/embed/preview/${key}/?theme-id=dark&default-tab=result&embed-version=2`,
					class: `pen-frame pen-${key}`,
					title: pens[key],
					scrolling: 'no',
					frameborder:'no',
					allowtransparency: 'true',
					allowfullscreen: 'true'
				}
			}]
		})
	}

	let pensData = pageSection('codepens', title, pensList)

	toDOM(pensData)
}

export default RenderSkills
