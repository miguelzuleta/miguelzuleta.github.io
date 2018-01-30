import loop from './loop.js'

let exp = dataContext => {
	let allExp = `
		<p>- - - - -</p>
		<p>[key]</p>
		<h2>[[value.company]]</h2>
		<h1>[[value.duration.from]]</h1>
		<h3>[[value.duration.to]]</h3>
		<h4>[[value.title]]</h4>
		<h6>[[value.description]]</h6>
	`
	return `
		${loop(dataContext, allExp)}
	`
}

export default exp
