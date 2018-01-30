let loop = (context, element) => {
	let loopString = ''
	let contextKeys = ''
	// let matchDeepObj = null


	for (let key in context) {
		let matchDeepObj = element.match(/\[\[(.+)\]\]/g)

		// console.log(key)
		// console.log(contextKeys)
		// console.log('- - - - - - - - - ')
		// console.log(element)

		if (matchDeepObj) {

			let deepContext = element

			matchDeepObj.forEach((arrElem, index) => {
				// console.log(matchDeepObj)
				// console.log(deepContext)
				// console.log('- - - - - - - - - ')
				// console.log(element)
				let deepObject = context[key]
				let objectBranch = arrElem.split('value.')[1].split(']]')[0].split('.')

				objectBranch.forEach(objSib => {
					deepObject = deepObject[objSib]
				})

				console.log(deepObject)

				console.log(objectBranch)
				// console.log(context[key])
				// console.log(arrElem)
				// console.log(JSON.parse(`${context[key]}.${objectBranch}`))
				deepContext = deepContext.replace(arrElem, deepObject)
				// console.log(contextKeys)
				// console.log(element)
				contextKeys = deepContext.replace(/\[(value)\]/g, context[key])
							 .replace(/\[(key)\]/g, key)

				console.log(contextKeys)
			})
		} else {
			contextKeys = element.replace(/\[(value)\]/g, context[key])
							 .replace(/\[(key)\]/g, key)
		}

		// console.log(typeof contextKeys)
		loopString += contextKeys
	}

	// console.log(loopString)
	return loopString
}

export default loop
