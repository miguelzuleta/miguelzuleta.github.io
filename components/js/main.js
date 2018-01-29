import hero from './hero.js'
import skills from './skills.js'
import exp from './exp.js'

let data = fetch('./data.json')
            .then(response => response.json())
            .then(body => body)

let dataReceived = Promise.resolve(data)


let render = (parentElem, childElem, context) => {
    let parent = document.querySelector(parentElem)
    parent.innerHTML = childElem(context)
}

dataReceived.then(obj => {
    render('#hero', hero, obj.hero)
    render('#skills', skills, obj.skills)
})
