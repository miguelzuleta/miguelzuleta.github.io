import { MAIN_WRAP } from '../helpers/constants.js';
import toDOM from '../helpers/toDOM';

let RenderBg = () => {
	let heroData = {
		parent: MAIN_WRAP,
		child: [{
			class: 'bg-wrap',
			child: [{ class: 'bg-square' }]
		}]
	}

	toDOM(heroData);
}

export default RenderBg;
