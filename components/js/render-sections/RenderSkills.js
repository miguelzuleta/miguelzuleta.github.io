import toDOM from '../helpers/toDOM';
import sectionWrap from '../site-modules/section-wrap';

let RenderSkills = dataObj => {
	let { title, list } = dataObj;

	let skillList = [];

	for(let key in list) {
		skillList.push({
			elem: 'li',
			child: [{
				elem: 'span',
				attrs: {
					class: 'bar-list skills-list-item',
					'data-score': list[key],
					style: `width: ${list[key]}%;`
				},
				text: key
			}]
		})
	}

	let skillsData = sectionWrap('skills', title, skillList);

	toDOM(skillsData);
}

export default RenderSkills;
