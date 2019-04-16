import express from 'express'

const app = express()

var path = require('path')

app.use('/', express.static('public'))

const currentPath = path.join(__dirname, '../../public')

app.listen(3000, () => {
    console.log('SERVER IS RUNNING ON localhost:3000')
})