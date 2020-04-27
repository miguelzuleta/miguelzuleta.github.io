import toDOM from '../helpers/toDOM';
import sectionWrap from '../site-modules/section-wrap';

let RenderExp = dataObj => {
	let { title } = dataObj;
	let expList = [];

	for(let key in dataObj) {
		let { company, duration, title, description } = dataObj[key];

		let companyInfo = {
			text: false,
			child: false
		};

		if (company) {
			if (company.match(/\*\*/)) {
				let companyDetails = company.split('**');

				companyInfo['text'] = companyDetails[0];
				companyInfo['child'] = {
					child: [{
						elem: 'em',
						text: companyDetails[1]
					}]
				};
			} else {
				companyInfo['text'] = company;
			}
		}

		if (key !== 'title') {
			expList.push({
				elem: 'li',
				class: `job ${key}`,
				child: [{
					elem: 'small',
					class: 'duration',
					text: `${duration.from} - ${duration.to}`
				},
				{
					elem: 'h4',
					class: 'company',
					text: companyInfo.text,
					...companyInfo.child
				}, 
				{
					elem: 'h5',
					class: 'title',
					text: title
				}, {
					elem: 'p',
					class: 'description',
					text: description
				}]
			})
		}
	}

	let expData = sectionWrap('exp', title, expList);

	toDOM(expData);
}

export default RenderExp;
