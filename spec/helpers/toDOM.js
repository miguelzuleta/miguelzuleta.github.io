import toDOM from '../../components/js/helpers/toDOM.js';

if (global.process === undefined) {
	toDOM({
		parent: 'body',
		child: [{
			elem: 'section',
			attrs: {
				id: 'to-dom-id',
				class: 'to-dom-class'
			},
			text: 'toDOM text'
		}]
	})

	let list = Array(7).fill().map((el, index) => {
		return {
			elem: 'li',
			attrs: { class: `list-elem list-elem-${index}`},
			text: `element ${index}`
		}
	})

	toDOM({
		parent: 'body',
		child: [{
			elem: 'ul',
			child: list
		}]
	})
}
