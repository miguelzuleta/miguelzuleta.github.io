let rotatingBG = () => {
	let bg = document.querySelector('.bg-square')
	let windowH = window.innerHeight
	let windowW = window.innerWidth
	let largerAxis = Math.max(windowH, windowW)

	let squareSpecs = {
		hypotenuse: function() {
			return Math.hypot(windowH, windowW)
		},
		dimensions: function() {
			return largerAxis + (hypotenuse() - largerAxis)
		},
		position: function() {
			return {
				top: (windowH / 2) - (dimensions() / 2),
				left: (windowW / 2) - (dimensions() / 2)
			}
		}
	}

	let { hypotenuse, dimensions, position } = squareSpecs

	bg.style.cssText = `
		width: ${dimensions()}px;
		height: ${dimensions()}px;
		top: ${position().top}px;
		left: ${position().left}px;
	`
}

export default rotatingBG
