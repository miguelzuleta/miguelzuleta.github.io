import toDOM from '../helpers/toDOM'

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
				},
				text: 'See the Pen',
				child: [{
					elem: 'a',
					attrs: {
						href: `https://codepen.io/miguelzuleta/pen/${key}/`
					}
				}]
			}]
		})
	}

	let pensData = {
		parent: 'main',
		child: [{
			elem: 'section',
			attrs: { class: 'codepens info'},
			child: [{
				elem: 'div',
				attrs: { class: 'info-wrap' },
				child: [{
					elem: 'h4',
					attrs: { class: 'info-title' },
					text: title
				}, {
					elem: 'ul',
					attrs: { class: 'codepens-list' },
					child: pensList
				}]
			}]
		}]
	}

	toDOM(pensData)
}

export default RenderSkills
