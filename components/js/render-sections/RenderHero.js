import toDOM from '../helpers/toDOM'

let RenderHero = dataObj => {
	let { headline, intro } = dataObj

	let heroData = {
		parent: 'main',
		child: [{
			elem: 'header',
			attrs: { class: 'hero-msg-wrap' },
			child: [{
				elem: 'div',
				attrs: { class: 'hero-msg' },
				child: [{
					elem: 'h1',
					text: headline
				}, {
					elem: 'p',
					text: intro
				}]
			}]
		}]
	}

	toDOM(heroData)
}

export default RenderHero
