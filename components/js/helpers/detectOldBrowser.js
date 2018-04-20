let detectOldBrowser = element => {
	if (!self.fetch) {
		element.classList.add('old-browser')

		let oldBrowserMsg = `
			<div class="msg">
				<p>Hello! This is Miguel.</p>
				<p>This page didn't load because your browser is too old. :(</p>
				<p>Have you tried <a href="https://www.google.com/chrome/">Google Chrome</a>?</p>
			</div>
		`

		element.innerHTML = oldBrowserMsg

		throw new Error("Your browser is too old :(")
	}
}

export default detectOldBrowser
