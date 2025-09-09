const express = require('express')
const app = express()


app.get('/' , async(req,res)=>{
    res.send('this is ai code reviewer')
})

module.exports = app