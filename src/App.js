const express = require('express')
const app = express()
const AiReview = require('./routes/ai.routes')
const cors  = require('cors')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
     origin: "http://localhost:5173",
     credentials: true
}))

app.use('/' ,AiReview)


module.exports = app