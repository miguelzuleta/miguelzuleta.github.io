import toDOM from '../helpers/toDOM';
import sectionWrap from '../site-modules/section-wrap';

let RenderExp = dataObj => {
	let { title } = dataObj;
	let expList = [];

	for(let key in dataObj) {
		let { company, duration, title, description } = dataObj[key];

		if (key !== 'title') {
			expList.push({
				elem: 'li',
				attrs: { class: `job ${key}` },
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

	let expData = sectionWrap('exp', title, expList);

	toDOM(expData);
}

export default RenderExp;
