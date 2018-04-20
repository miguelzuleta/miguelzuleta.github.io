import render from '../helpers/render'

let RenderHero = (parent, dataObj) => {
	let { headline, intro } = dataObj

	let heroMarkup = `
		<div class="hero-msg-wrap">
			<div class="hero-msg">
				<h1>${headline}</h1>
				<p>${intro}</p>
			</div>
		</div>
	`

	return render({
		parent: parent,
		markup: heroMarkup
	})
}

export default RenderHero
