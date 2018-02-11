'use strict'

const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const favicon = require('serve-favicon')

app.use(favicon(path.join(__dirname, 'statics', 'img', 'favicon.png')))

app.get('/', function (req, res) {
  res.send('hello world')
})

http.createServer(app).listen(8000, () => {
  console.log('Listening on port 8000')
})
