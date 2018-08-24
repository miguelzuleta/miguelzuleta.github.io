const render = props => {
	let { parent, child } = props
	let parentContainer = document.querySelectorAll(parent)

	Object.values(parentContainer).forEach(parentEl => {
		if (child) {
			child.forEach((childEl, index) => {
				let newElem = document.createElement(childEl.tag)
				let renderAttr = parentEl.getAttribute('data-el')
				let dataRender = renderAttr ? `${renderAttr}${index}`: index

				newElem.setAttribute('data-el', dataRender)
				newElem.innerText = childEl.inner

				parentEl.appendChild(newElem)


				if (childEl['child']) {
					render({
						parent: `[data-el="${dataRender}"]`,
						child: childEl['child']
					})
				}
			})
		}
	})
}

render({
	parent: 'main',
	child: [{
		tag: 'h2',
		inner: 'nee',
		child: [{
			tag: 'span',
			inner: 'inner nee',
			child: [{
				tag: 'i',
				inner: 'iiii i i  i i'
			}]
		},
		{
			tag: 'span',
			inner: 'OTHOERRRRR nee',
			child: [{
				tag: 'i',
				inner: 'ii222 2 22 22 2 '
			}]
		},
		{
			tag: 'span',
			inner: 'moar spaaaana nee',
			child: [{
				tag: 'i',
				inner: '3 3 3 3 3',
				child: [{
					tag: 'em',
					inner: 'EMEMEMEMEM'
				}]
			}]
		}]
	},
	{
		tag: 'h3',
		inner: 'nee3'
	}]
})

// let testObj = {
// 	parent: '.parent',
// 	child: [{
// 		tag: 'div',
// 		attrs: { class: 'test-class', id: 'test-id' },
// 		inner: 'nee',
// 		child: [{
// 			tag: 'span',
// 			attrs: { 'data-inner': 'test data inner' },
// 			inner: 'text'
// 		}]
// 	}]
// }

// import RenderHero from './render-sections/RenderHero.js'
// import RenderSkills from './render-sections/RenderSkills.js'
// import RenderExp from './render-sections/RenderExp.js'
// import RenderCodepens from './render-sections/RenderCodepens.js'
// import RenderContact from './render-sections/RenderContact.js'
// import detectOldBrowser from './helpers/detectOldBrowser.js'
// import rotatingHero from './rotatingHero.js'
// import render from './helpers/render'

// let body = document.querySelector('body')
// let isIE = !!document.documentMode || (!isIE && !!window.StyleMedia)

// detectOldBrowser(body)

// function test() {
// 	return render({
// 		parent: '.hero',
// 		markup: '<p>fsdfsdf</p>'
// 	})
// }


// render({
// 	parent: 'main',
// 	markup: `<header class="hero">${test()}</header>`
// })

// // let head = document.createElement('header')
// // head.className = 'hero'
// // document.querySelector('main').appendChild(head)

// let data = fetch('./data.json')
// 			.then(response => response.json())
// 			.then(body => body)

// let dataReceived = Promise.resolve(data)


// dataReceived.then(dataObj => {
// 	let { hero, skills, exp, codepens, contact } = dataObj

// 	// RenderHero('.hero', hero)
// 	// RenderSkills('.skills', skills)
// 	// RenderExp('.exp', exp)
// 	// RenderCodepens('.codepens', codepens)
// 	// RenderContact('.contact', contact)

// 	body.classList.add('data-loaded')

// 	if(isIE) {
// 		body.classList.add('ie')
// 		return
// 	}

// 	rotatingHero()
// 	window.addEventListener('resize', rotatingHero)
// })
