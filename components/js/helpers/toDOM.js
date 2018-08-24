const toDOM = props => {
	let { parent, child } = props
	let dataAttr = 'data-current-elem'
	let parentContainer = document.querySelectorAll(parent)

	Object.values(parentContainer).forEach(parentEl => {
		if (child) {
			child.forEach(childEl => {
				let newElem = document.createElement(childEl.elem)
				newElem.setAttribute(dataAttr, '')

				if (childEl.text) {
					newElem.innerText = childEl.text
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
