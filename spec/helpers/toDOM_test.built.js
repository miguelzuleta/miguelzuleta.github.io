'use strict';

var _toDOM = require('./toDOM.js');

var _toDOM2 = _interopRequireDefault(_toDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (global.process === undefined) {
	(0, _toDOM2.default)({
		parent: 'body',
		child: [{
			elem: 'section',
			text: 'MORE TESTINGS'
		}]
	});

	(0, _toDOM2.default)({
		parent: 'body',
		child: [{
			elem: 'aside',
			text: 'fuck yes'
		}]
	});
}
