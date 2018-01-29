let loop = (context, element) => {
    let loopString = ''
    let contextKeys = ''

    for (let key in context) {
        contextKeys = element.replace(/\[(value)\]/g, context[key])
                            .replace(/\[(key)\]/g, key)

        loopString += contextKeys
    }

    return loopString
}

export default loop
