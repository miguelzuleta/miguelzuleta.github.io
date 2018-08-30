const toDOM = props => {
	let { parent, child } = props
	let dataAttr = 'data-current-elem'
	let parentElems = document.querySelectorAll(parent)
	let targetElements = Object.keys(parentElems).map(elem => parentElems[elem])

	targetElements.forEach(parentEl => {
		if (child) {
			child.forEach(childEl => {
				let newElem = document.createElement(childEl.elem)
				newElem.setAttribute(dataAttr, '')

				if (childEl.text) {
					newElem.innerHTML = childEl.text
				}

				for (let attrKey in childEl.attrs) {
					newElem.setAttribute(attrKey, childEl.attrs[attrKey])
				}

				parentEl.appendChild(newElem)
				parentEl.removeAttribute(dataAttr)


				if (childEl['child']) {
					toDOM({
						parent: `[${dataAttr}]`,
						child: childEl['child']
					})
				} else {
					newElem.removeAttribute(dataAttr)
				}
			})
		}
	})
}

export default toDOM
