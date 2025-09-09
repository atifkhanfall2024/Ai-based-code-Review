const express = require('express')
const Review = express.Router()
const Response = require('../controllers/ai.controller')

Review.get('/code/review' ,Response.getResponse )

module.exports = Review