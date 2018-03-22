import hero from './hero.js'
import skills from './skills.js'
import exp from './exp.js'

let data = fetch('./data.json')
			.then(response => response.json())
			.then(body => body)

let dataReceived = Promise.resolve(data)


let render1 = (parentElem, childElem, context) => {
	let parent = document.querySelector(parentElem)
	parent.innerHTML = childElem(context)
}

// const render2 = props => {
// 	let { parent, markup } = props
// 	let parentProp = ('parent' in props)
// 	let parentContainer = document.querySelectorAll(parent)

// 	if (parentProp) {
// 		parentContainer.forEach(element => {
// 			element.innerHTML += markup
// 		})
// 	} else {
// 		return markup
// 	}

// }

dataReceived.then(dataObj => {
	// render2({
	// 	parent: '#hero2',
	// 	markup: hero
	// })
	// console.log(dataObj)

	hero('#hero2', dataObj.hero)
	skills('#skills2', dataObj.skills)
	exp('#exp2', dataObj.exp)

	// render1('#hero1', hero, dataObj.hero)
	// render1('#skills1', skills, dataObj.skills)
	// render1('#exp1', exp, dataObj.exp)
})
