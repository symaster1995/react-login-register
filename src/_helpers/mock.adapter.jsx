import axios from 'axios';

let users = JSON.parse(localStorage.getItem('users')) || []
let token = JSON.parse(localStorage.getItem('serverToken')) || []

var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);

mock.onPost('/users').reply(config => {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(config.data)
        let duplicateUser = users.filter(user => { return user.username === parsedData.username }).length
        let duplicateEmail = users.filter(user => { return user.email === parsedData.email }).length

        if (duplicateUser) {
            // return an error
            reject({ message: 'Username already exists' })
        } else if (duplicateEmail) {
            reject({ message: 'Email already exists' })
        } else {
            // insert into localstorage

            parsedData.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1

            users.push(parsedData)

            localStorage.setItem('users', JSON.stringify(users))

            resolve([200, { message: 'Registration Succesful' }])
        }
    })
})

mock.onPost('/login').reply(config => {
    return new Promise((resolve, reject) => {
        const parsedData = JSON.parse(config.data)
        let checkUser = users.filter(user => { return user.username === parsedData.username && user.password === parsedData.password }).length

        if (checkUser) {

            let randomToken = 'thisisatoken.imtoolazy.tofixthis'
            token.push({ token: randomToken })
            localStorage.setItem('serverToken', JSON.stringify(token))

            resolve([200, { message: 'Login Successful', token: randomToken }])
        } else {
            reject({ message: 'User not found or wrong credentials' })
        }
    })
})

mock.onPost('/logout').reply(config => {
    return new Promise((resolve, reject) => {
        localStorage.removeItem('serverToken')
        resolve([200, { message: 'You are logged out' }])
    })
})