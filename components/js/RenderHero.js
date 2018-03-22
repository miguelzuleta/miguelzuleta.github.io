import render from './render'

let RenderHero = (parent, dataObj) => {
	let { headline, intro } = dataObj

	let heroMarkup = `
		<h1>${headline}</h1>
		<p>${intro}</p>
	`

	return render({
		parent: parent,
		markup: heroMarkup
	})
}

export default RenderHero
