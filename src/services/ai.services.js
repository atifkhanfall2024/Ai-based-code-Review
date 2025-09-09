const Groq = require('groq-sdk')
require('dotenv').config()
const groq = new Groq({apiKey:process.env.Groq_Sdk})

// main work of this function is to return me chat
const GroqChat = async(value)=>{

    const ChatComplete = await groq.chat.completions.create({
        model:'openai/gpt-oss-120b',
        messages:[
            {
              role:"system",
              content:value
            }
        ]
    })

    return ChatComplete.choices[0].message.content
}

module.exports = GroqChat