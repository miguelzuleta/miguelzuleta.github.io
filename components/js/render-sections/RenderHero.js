import { MAIN_WRAP } from '../helpers/constants.js';
import toDOM from '../helpers/toDOM';

let RenderHero = dataObj => {
	let { headline, intro } = dataObj;

	let heroData = {
		parent: MAIN_WRAP,
		child: [{
			elem: 'header',
			class: 'hero-msg-wrap',
			child: [{
				class: 'hero-msg',
				child: [{
					elem: 'h1',
					text: headline
				}, {
					elem: 'p',
					text: intro
				}]
			}]
		}]
	}

	toDOM(heroData);
}

export default RenderHero;
