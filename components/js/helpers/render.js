const render = props => {
	let { parent, markup } = props
	let parentContainer = document.querySelectorAll(parent)

	Object.keys(parentContainer).map(element => {
		parentContainer[element].innerHTML += markup
	})
}

export default render
