import toDOM from '../helpers/toDOM'
import { BODY, MAIN_WRAP } from '../helpers/constants'

let RenderOldBrowserMsg = () => {
	BODY.classList.add('old-browser')

	let oldBrowserMsg = {
		parent:  MAIN_WRAP,
		child: [{
			elem: 'p',
			text: 'Hello! This is Miguel.'
		}, {
			elem: 'p',
			text: "This page didn't load because your browser is too old. Sad."
		}, {
			elem: 'p',
			child: [{
				elem: 'span',
				text: 'Have you tried '
			}, {
				elem: 'a',
				attrs: { href: 'https://www.google.com/chrome' },
				text: 'Google Chrome'
			}, {
				elem: 'span',
				text: '?'
			}]
		}]
	}

	toDOM(oldBrowserMsg)
}

export default RenderOldBrowserMsg
