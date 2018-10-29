const emphasis = text => {
	let matchEm = text.match(/\*(.*?)\*/g)

	if (matchEm) {
		let breakSentence = text.split('*')
		let textWithEmphasis = ''

		matchEm = matchEm.map(str => str.replace(/\*/g, ''))

		breakSentence.forEach(el => {
			if (matchEm.includes(el)) {
				textWithEmphasis += `<em>${el}</em>`
			} else {
				textWithEmphasis += el
			}
		})

		return textWithEmphasis
	}

	return text
}

export default emphasis
