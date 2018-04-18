let RenderAnimSquare = (parent, value) => {

	let dimensions = `width: ${value}px; height: ${value}px;`

	let keyframes = (prefix='') => {
		return `@${prefix}keyframes rotateSquare {
					from {
						transform: translate3d(-50%, -50%, 0) rotate(0deg);
						${dimensions}
					}
					to {
						transform: translate3d(-50%, -50%, 0) rotate(359deg);
						${dimensions}
					}
				}`
	}

	let styles = `
		.bg-square {
			${dimensions}
			transform: translate3d(-50%, -50%, 0) rotate(0deg);
		}

		${keyframes()}
		${keyframes('-webkit-')}
	`

	parent.innerHTML = styles

}

export default RenderAnimSquare
