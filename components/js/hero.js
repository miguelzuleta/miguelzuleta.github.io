import render2 from './render2'

let hero = (parent, dataObj) => {
	let { headline, intro } = dataObj

	let heroMarkup = `
		<h1>${headline}</h1>
		<p>${intro}</p>
	`

	return render2({
		parent: parent,
		markup: heroMarkup
	})
}

export default hero
