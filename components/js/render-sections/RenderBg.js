import { MAIN_WRAP } from '../helpers/constants.js'
import toDOM from '../helpers/toDOM'

let RenderBg = () => {
	let heroData = {
		parent: MAIN_WRAP,
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
