const toDOM = props => {
	let { parent, child } = props
	let dataAttr = 'data-el'
	let parentContainer = document.querySelectorAll(parent)

	Object.values(parentContainer).forEach(parentEl => {
		if (child) {
			child.forEach((childEl, index) => {
				let renderAttr = parentEl.getAttribute(dataAttr)
				let dataRender = renderAttr ? `${renderAttr}${index}`: index

				let newElem = document.createElement(childEl.elem)
				newElem.setAttribute(dataAttr, dataRender)

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
						parent: `[${dataAttr}="${dataRender}"]`,
						child: childEl.child
					})
				} else {
					newElem.removeAttribute(dataAttr)
				}
			})

		}
	})
}

export default toDOM
