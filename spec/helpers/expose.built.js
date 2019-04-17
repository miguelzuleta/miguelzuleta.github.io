(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emphasis = require('./emphasis.js');

var _emphasis2 = _interopRequireDefault(_emphasis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toDOM = function toDOM(props) {
	var parent = props.parent,
	    child = props.child;

	var dataAttr = 'data-current-elem';
	var parentElems = document.querySelectorAll(parent);
	var targetElements = Object.keys(parentElems).map(function (elem) {
		return parentElems[elem];
	});

	targetElements.forEach(function (parentEl) {
		if (child) {
			child.forEach(function (childEl) {
				var newElem = document.createElement(childEl.elem);
				newElem.setAttribute(dataAttr, '');

				if (childEl.text) {
					newElem.innerHTML = (0, _emphasis2.default)(childEl.text);
				}

				for (var attrKey in childEl.attrs) {
					newElem.setAttribute(attrKey, childEl.attrs[attrKey]);
				}

				parentEl.appendChild(newElem);
				parentEl.removeAttribute(dataAttr);

				if (childEl['child']) {
					toDOM({
						parent: '[' + dataAttr + ']',
						child: childEl['child']
					});
				} else {
					newElem.removeAttribute(dataAttr);
				}
			});
		}
	});
};

exports.default = toDOM;

},{"./emphasis.js":1}],3:[function(require,module,exports){
(function (global){
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./toDOM.js":2}]},{},[1,2,3]);
