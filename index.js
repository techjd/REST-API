require('./db')
const express = require('express')
const bodyParser = require('body-parser');

const postMessagesRoutes = require('./controllers/postMessagesController')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(4000,()=>console.log('Server Started at 4000'))


app.use('/postmessages',postMessagesRoutes)