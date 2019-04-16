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
