import render2 from './render2'

let exp = (parent, dataObj) => {
	let allExp = () => {
		let expList = ''

		for(let key in dataObj) {
			let { company, duration, title, description } = dataObj[key]

			expList += `
				<div class="job ${key}">
					<span>${duration.from} - ${duration.to}</span>
					<h4>${company}</h4>
					<h5>${title}</h5>
					<p>${description}</p>
				</div>
			`
		}

		return expList
	}

	return render2({
		parent: parent,
		markup: allExp()
	})
}

export default exp
