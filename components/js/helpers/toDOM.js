const toDOM = props => {
	let { parent, child } = props;
	let dataAttr = 'data-current-elem';
	let parentElems = [];

	if (typeof parent == 'object') {
		parentElems = Object.keys(parent).length ? [...parent] : [parent];
	} else {
		parentElems = [...document.querySelectorAll(parent)];
	}

	parentElems.forEach(parentEl => {
		if (child) {
			child.forEach(childEl => {
				let newElem = {};

				if (childEl.elem) {
					newElem = document.createElement(childEl.elem);
				} else {
					newElem = document.createElement('div');
				}

				newElem.setAttribute(dataAttr, '');

				if (childEl.class) {
					newElem.setAttribute('class', childEl.class);
				}

				if (childEl.id) {
					newElem.id = childEl.id;
				}

				if (childEl.text) {
					newElem.innerHTML = childEl.text;
				}

				for (let attrKey in childEl.attrs) {
					newElem.setAttribute(attrKey, childEl.attrs[attrKey]);
				}
				
				parentEl.appendChild(newElem);
				parentEl.removeAttribute(dataAttr);

				if (childEl['child'] && (typeof childEl['child'] === 'object')) {
					toDOM({
						parent: `[${dataAttr}]`,
						child: childEl['child']
					})
				} else {
					newElem.removeAttribute(dataAttr);
				}
			})
		}
	})
}

export default toDOM;
