let hero = dataContext => {
	let { headline, intro } = dataContext

	return `
		<h1>${headline}</h1>
		<p>${intro}</p>
	`
}

export default hero
