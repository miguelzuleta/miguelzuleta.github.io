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
}
