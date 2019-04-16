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
					newElem.innerHTML = emphasis(childEl.text);
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
