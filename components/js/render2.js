const render2 = props => {
	let { parent, markup } = props
	let parentProp = ('parent' in props)
	let parentContainer = document.querySelectorAll(parent)

	if (parentProp) {
		parentContainer.forEach(element => {
			element.innerHTML += markup
		})
	} else {
		return markup
	}
}

export default render2
