import loop from './loop.js'

let skills = dataContext => {
    let allSkills = `
        <p>[key]</p>
        <h2>[value]</h2>
    `
    return `
        <h4>${dataContext.title}</h4>
        ${loop(dataContext.list, allSkills)}
    `
}

export default skills
