const GrokChat = require('../services/ai.services')
module.exports.getResponse = async(req,res)=>{
try{
        const value = req.query.value

    if(!value){
        return res.status(401).json({message: ' Please Enter Prompt ' })
    }

    const Chat = await GrokChat(value)

    res.send(Chat)
}catch(err){
    res.status(401).json({message: err.message})
}
}