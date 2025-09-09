const express = require('express')
const app = express()
const AiReview = require('./routes/ai.routes')

app.use('/' ,AiReview)


module.exports = app