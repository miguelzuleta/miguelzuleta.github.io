const render = props => {
	let { parent, markup } = props
	let parentContainer = document.querySelectorAll(parent)

	parentContainer.forEach(element => {
		element.innerHTML += markup
	})
}

export default render
