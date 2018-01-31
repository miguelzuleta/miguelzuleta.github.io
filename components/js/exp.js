import loop from './loop.js'

let exp = dataContext => {
	let allExp = `
		<div class="job [key]">
			<span>[[value.duration.from]] - [[value.duration.to]]</span>
			<h4>[[value.company]]</h4>
			<h5>[[value.title]]</h5>
			<p>[[value.description]]</p>
		</div>
	`
	return `
		${loop(dataContext, allExp)}
	`
}

export default exp
