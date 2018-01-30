let hero = dataContext => {
	let { headline, intro } = dataContext

	return `
		<h1>${headline}</h1>
		<h6>${intro}</h6>
	`
}

export default hero
