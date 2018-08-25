import { MAIN_WRAP } from './constants.js'

const pageSection = (sectionClass, sectionTitle, sectionList) => {
	return {
		parent: MAIN_WRAP,
		child: [{
			elem: 'section',
			attrs: { class: `${sectionClass} info`},
			child: [{
				elem: 'div',
				attrs: { class: 'info-wrap' },
				child: [{
					elem: 'h4',
					attrs: { class: 'info-title' },
					text: sectionTitle
				}, {
					elem: 'ul',
					attrs: { class: `${sectionClass}-list` },
					child: sectionList
				}]
			}]
		}]
	}
}

export default pageSection
