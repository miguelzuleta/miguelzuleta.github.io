import toDOM from '../../components/js/helpers/toDOM.js';

if (global.process === undefined) {
	toDOM({
		parent: 'body',
		child: [{
			elem: 'section',
			text: 'MORE TESTINGS'
		}]
	})
}