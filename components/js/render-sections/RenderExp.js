import toDOM from '../helpers/toDOM'

let RenderExp = dataObj => {
	let { title } = dataObj
	let expList = []

	for(let key in dataObj) {
		let { company, duration, title, description } = dataObj[key]

		if (key !== 'title') {
			expList.push({
				elem: 'li',
				attrs: { class: `job job-${key}` },
				child: [{
					elem: 'small',
					attrs: { class: 'duration' },
					text: `${duration.from} - ${duration.to}`
				}, {
					elem: 'h4',
					attrs: { class: 'company' },
					text: company
				}, {
					elem: 'h5',
					attrs: { class: 'title' },
					text: title
				}, {
					elem: 'p',
					attrs: { class: 'description' },
					text: description
				}]
			})
		}
	}

	let expData = {
		parent: 'main',
		child: [{
			elem: 'section',
			attrs: { class: 'exp info' },
			child: [{
				elem: 'div',
				attrs: { class: 'info-wrap' },
				child: [{
					elem: 'h4',
					attrs: { class: 'info-title' },
					text: title
				}, {
					elem: 'ul',
					attrs: { class: 'job-list' },
					child: expList
				}]
			}]
		}]
	}

	toDOM(expData)
}

export default RenderExp
