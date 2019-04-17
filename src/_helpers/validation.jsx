const required = (name, value) => {
    if (value == '') {
        return name + ' is required'
    }

    return null
}

export const validation = {
    required,
}