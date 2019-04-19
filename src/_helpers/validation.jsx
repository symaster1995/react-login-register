const required = (index, value) => {

    const name = toUpperCase(index)

    return value == '' ? name + ' is required' : null
}

const email = (index, value) => {

    const name = toUpperCase(index)
    if(value == '') {
        return name + ' is required'
    }else{
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return !re.test(value) ? name + ' is invalid' : null
    }
}

const password = (index, value) => {

    const name = toUpperCase(index)

    if(value == '') {
        return name + ' is required'
    }else if(value.length < 6) {
        return name + ' must more than 6 characters'
    }

    return null
}

const toUpperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

export const validation = {
    required,
    email,
    password
}