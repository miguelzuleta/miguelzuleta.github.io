let loop = (context, element) => {
	let loopString = ''
	let contextKeys = ''
	let matchDeepObj = null
	let objKeys = []

	for (let key in context) {
		matchDeepObj = element.match(/\[\[(.+?)\]\]/g)
		objKeys = [context[key], key]
		console.log(matchDeepObj)

		if (matchDeepObj) {
			let deepContext = element

			matchDeepObj.forEach((arrElem, index) => {
				let deepObject = context[key]
				let objectBranch = arrElem.split('value.')[1].split(']]')[0].split('.')

				objectBranch.forEach(objSib => {
					deepObject = deepObject[objSib]
				})

				deepContext = deepContext.replace(arrElem, deepObject)
				contextKeys = _replaceContextKeys(deepContext, ...objKeys)
			})
		} else {
			contextKeys = _replaceContextKeys(element, ...objKeys)
		}

		loopString += contextKeys
	}

	return loopString
}

let _replaceContextKeys = (element, obj, objKey) => {
	return element.replace(/\[(value)\]/g, obj)
				  .replace(/\[(key)\]/g, objKey)
}

export default loop
