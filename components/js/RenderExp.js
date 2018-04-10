import render from './render'

let RenderExp = (parent, dataObj) => {
	let allExp = () => {
		let expList = ''

		for(let key in dataObj) {
			let { company, duration, title, description } = dataObj[key]

			if (key !== 'title') {
				expList += `
					<div class="job ${key}">
						<span>${duration.from} - ${duration.to}</span>
						<h4>${company}</h4>
						<h5>${title}</h5>
						<p>${description}</p>
					</div>
				`
			}
		}

		return expList
	}

	let expMarkup = `
		<h4 class="info-title">${dataObj.title}</h4>
		<ul class="job-list">${allExp()}</ul>
	`

	return render({
		parent: parent,
		markup: expMarkup
	})
}

export default RenderExp
