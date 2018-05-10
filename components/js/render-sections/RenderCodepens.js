import render from '../helpers/render'

let RenderSkills = (parent, dataObj) => {
	let { title, pens } = dataObj

	let allPens = () => {
		let pensList = ''

		for(let key in pens) {
			pensList += `
				<div class="pen">
					<p class="pen-title">${pens[key]}</p>
					<iframe id="pen-${key}" scrolling='no' title='${pens[key]}' src='//codepen.io/miguelzuleta/embed/preview/${key}/?theme-id=dark&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='https://codepen.io/miguelzuleta/pen/${key}/'>${pens[key]}</a> by Miguel Zuleta (<a href='https://codepen.io/miguelzuleta'>@miguelzuleta</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
				</div>
			`
		}

		return pensList
	}

	let skillsMarkup = `
		<div class="info-wrap">
			<h4 class="info-title">${title}</h4>
			${allPens()}
		</div>
	`

	render({
		parent: parent,
		markup: skillsMarkup
	})
}

export default RenderSkills
