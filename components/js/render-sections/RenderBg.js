import toDOM from '../helpers/toDOM'

let RenderBg = () => {
	let heroData = {
		parent: 'main',
		child: [{
			elem: 'div',
			attrs: { class: 'bg-wrap' },
			child: [{
				elem: 'div',
				attrs: { class: 'bg-square' }
			}]
		}]
	}

	toDOM(heroData)
}

export default RenderBg
