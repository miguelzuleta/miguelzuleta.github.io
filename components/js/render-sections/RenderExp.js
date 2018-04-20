import render from '../helpers/render'

let RenderExp = (parent, dataObj) => {
	let allExp = () => {
		let expList = ''

		for(let key in dataObj) {
			let { company, duration, title, description } = dataObj[key]

			if (key !== 'title') {
				expList += `
					<div class="job ${key}">
						<small class="duration">${duration.from} <span>- ${duration.to}</span></small>
						<h4 class="company">${company}</h4>
						<h5 class="title">${title}</h5>
						<p class="description">${description}</p>
					</div>
				`
			}
		}

		return expList
	}

	let expMarkup = `
		<div class="info-wrap">
			<h4 class="info-title">${dataObj.title}</h4>
			<ul class="job-list">${allExp()}</ul>
		</div>
	`

	return render({
		parent: parent,
		markup: expMarkup
	})
}

export default RenderExp
