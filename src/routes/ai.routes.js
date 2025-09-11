const express = require('express')
const Review = express.Router()
const Response = require('../controllers/ai.controller')

Review.post('/code/review' ,Response.getResponse )

module.exports = Review