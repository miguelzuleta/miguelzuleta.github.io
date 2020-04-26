import { MAIN_WRAP } from '../helpers/constants.js';

const sectionWrap = (sectionClass, sectionTitle, sectionList) => {
	return {
		parent: MAIN_WRAP,
		child: [{
			elem: 'section',
			class: `${sectionClass} info`,
			child: [{
				class: 'info-wrap',
				child: [{
					elem: 'h4',
					class: 'info-title',
					text: sectionTitle
				}, {
					elem: 'ul',
					class: `${sectionClass}-list`,
					child: sectionList
				}]
			}]
		}]
	}
}

export default sectionWrap;
