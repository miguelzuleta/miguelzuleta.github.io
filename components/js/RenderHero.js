import render from './render'

let RenderHero = (parent, dataObj) => {
	let { headline, intro } = dataObj

	let heroMarkup = `
		<div class="bg"></div>
		<div class="text-wrap">
			<h1 data-msg="${headline}"></h1>
		</div>
	`
	// <p>${intro}</p>

	return render({
		parent: parent,
		markup: heroMarkup
	})
}

export default RenderHero
