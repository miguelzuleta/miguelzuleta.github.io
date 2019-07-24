import { BODY, MAIN_WRAP } from '../helpers/constants';

let RenderOldBrowserMsg = () => {
	BODY.classList.add('old-browser');

	let oldBrowserMsg = `
		<div class="msg">
			<p>Oh hi! This is Miguel.</p>
			<p>This page didn't load because your browser is too old. :(</p>
			<p>Have you tried <a href="https://www.google.com/chrome/">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>? They're awesome.</p>
		</div>
	`
 	document.querySelector(MAIN_WRAP).innerHTML = oldBrowserMsg;
}

export default RenderOldBrowserMsg;
