import toDOM from './toDOM.js';

if (global.process === undefined) {
	toDOM({
		parent: 'body',
		child: [{
			elem: 'section',
			text: 'MORE TESTINGS'
		}]
	})

	toDOM({
		parent: 'body',
		child: [{
			elem: 'aside',
			text: 'fuck yes'
		}]
	})
}
