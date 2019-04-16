'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var emphasis = function emphasis(text) {
	var matchEm = text.match(/\*(.*?)\*/g);

	if (matchEm) {
		var breakSentence = text.split('*');
		var textWithEmphasis = '';

		matchEm = matchEm.map(function (str) {
			return str.replace(/\*/g, '');
		});

		breakSentence.forEach(function (el) {
			if (matchEm.includes(el)) {
				textWithEmphasis += '<em>' + el + '</em>';
			} else {
				textWithEmphasis += el;
			}
		});

		return textWithEmphasis;
	}

	return text;
};

exports.default = emphasis;
